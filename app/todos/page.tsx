import type { Metadata } from "next";
import Header from "@/app/ui/Header";
import MainLandmark from "@/app/ui/MainLandmark";
import { Suspense } from "react";
import TodoList from "@/app/ui/TodoList";
import AddTodoFab from "@/app/ui/AddTodoFab";
import TodoListSkeleton from "@/app/ui/TodoListSkeleton";

export const metadata: Metadata = {
    title: 'Tareas',
};

export type Todo = {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
};

function getTodos(): Promise<Todo[]> {
    return fetch('https://jsonplaceholder.typicode.com/todos')
        .then(res => res.json())
        .then((todos: Todo[]) => todos);
}

export default async function Page() {
    const todos = getTodos();

    return (
        <>
            <Header title={ 'ePayco tareas' } />
            <MainLandmark>
                <Suspense fallback={ <TodoListSkeleton /> }>
                    <TodoList todos={ todos } />
                </Suspense>
            </MainLandmark>
            <AddTodoFab />
        </>
    );
}
