"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import * as z from "zod";

export type SaveTodoState = {
    values: {
        title: string;
        completed: boolean;
    },
    errors: {
        title?: string[] | undefined;
    },
};

const SaveTodoSchema = z.object({
    title: z.string().min(1, { message: "Indica cuál es tu tarea" }),
    completed: z.coerce.boolean(),
});

export async function saveTodo(prevState: SaveTodoState, formData: FormData) {
    const title = formData.get("title");
    const completed = formData.get("completed");

    const defaultResponse = {
        values: {
            title: title as string,
            completed: completed === 'on',
        },
        errors: {}
    };

    const result = SaveTodoSchema.safeParse({ title, completed });

    if (!result.success) {
        return {
            ...defaultResponse,
            errors: { ...z.flattenError(result.error).fieldErrors },
        };
    }

    const valid = result.data;

    try {
        const res = await fetch("https://jsonplaceholder.typicode.com/todos", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                title: valid.title,
                completed: valid.completed,
                userId: 1,
            }),
        });

        if (!res.ok) {
            throw new Error(`HTTP ${res.status}`);
        }

        revalidatePath('/todos');
    } catch (error) {
        console.error("Failed to create todo:", error);

        return {
            ...defaultResponse,
            errors: { title: [ "No se pudo crear la tarea. Por favor, intenta de nuevo." ] },
        };
    }

    redirect('/todos');
}
