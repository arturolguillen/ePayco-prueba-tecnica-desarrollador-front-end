import Header from "@/app/ui/Header";
import MainLandmark from "@/app/ui/MainLandmark";
import type { Todo } from "@/app/todos/page";
import type { Metadata } from "next";
import { Suspense } from "react";
import GenericCard from "@/app/ui/GenericCard";
import TodoForm from "@/app/ui/TodoForm";
import TodoFormSkeleton from "@/app/ui/TodoFormSkeleton";

export const metadata: Metadata = {
    title: 'Editar tarea',
};

function fetchTodo(id: string): Promise<Todo> {
    return fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
        .then(res => res.json())
        .then((todo: Todo) => todo);
}

export default async function Page({ params }: {
    params: Promise<{ id: string }>
}) {
    const { id } = await params;
    const todo = fetchTodo(id);

    return (
        <>
            <Header title={ 'Editar tarea' } backTo={ '/todos' } />
            <MainLandmark>
                <Suspense fallback={ <TodoFormSkeleton /> }>
                    <GenericCard>
                        <TodoForm todo={ todo } />
                    </GenericCard>
                </Suspense>
            </MainLandmark>
        </>
    );
}
