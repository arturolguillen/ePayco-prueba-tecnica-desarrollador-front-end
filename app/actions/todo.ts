"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import * as z from "zod";
import { Todo } from "@/app/todos/page";

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
    const id = formData.get("id");
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
    const method = id ? "PUT" : "POST";
    const url = id
        ? `https://jsonplaceholder.typicode.com/todos/${id}`
        : "https://jsonplaceholder.typicode.com/todos";
    const body = id
        ? JSON.stringify({
            id: Number(id),
            title: valid.title,
            completed: valid.completed,
            userId: 1,
        })
        : JSON.stringify({
            title: valid.title,
            completed: valid.completed,
            userId: 1,
        });

    try {
        const res = await fetch(url, {
            method,
            headers: { "Content-Type": "application/json" },
            body,
        });

        if (!res.ok) {
            throw new Error(`HTTP ${res.status}`);
        }

        revalidatePath('/todos');
    } catch (error) {
        console.error("Failed to save todo:", error);

        return {
            ...defaultResponse,
            errors: { title: [ "No se pudo guardar la tarea. Por favor, intenta de nuevo." ] },
        };
    }

    redirect('/todos');
}

export async function toggleTodoCompleted(todo: Todo) {
    try {
        const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${todo.id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                ...todo,
                userId: 1,
            }),
        });

        if (!res.ok) {
            throw new Error(`HTTP ${res.status}`);
        }

        revalidatePath('/todos');
    } catch (error) {
        console.error("Failed to save todo:", error);
        throw error;
    }
}

export async function deleteTodo(todo: Todo) {
    try {
        const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${todo.id}`, {
            method: "DELETE",
        });

        if (!res.ok) {
            throw new Error(`HTTP ${res.status}`);
        }

        revalidatePath('/todos');
    } catch (error) {
        console.error("Failed to delete todo:", error);
        throw error;
    }
}
