"use client";

import { use } from "react";
import type { Todo } from "@/app/todos/page";
import TodoItem from "@/app/ui/TodoItem";

export default function TodoList({ todos }: {
    todos: Promise<Todo[]>
}) {
    const allTodos = use(todos);

    return (
        <div className="space-y-4">
            { allTodos.map(todo => <TodoItem key={ todo.id } todo={ todo } />) }
        </div>
    );
}
