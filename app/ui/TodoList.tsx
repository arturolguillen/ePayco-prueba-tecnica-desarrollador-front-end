"use client";

import { use, useCallback, useState } from "react";
import type { Todo } from "@/app/todos/page";
import TodoItem from "@/app/ui/TodoItem";

export default function TodoList({ todos }: {
    todos: Promise<Todo[]>
}) {
    const initialTodos = use(todos);
    const [ allTodos, setAllTodos ] = useState<Todo[]>(initialTodos);
    const toggleCompleted = useCallback((todo: Todo) => {
        setAllTodos(prevTodos => prevTodos.map(t => t.id === todo.id ? { ...t, completed: !t.completed } : t));
    }, [])

    return (
        <div className="space-y-4">
            { allTodos.map(todo => <TodoItem key={ todo.id } todo={ todo } toggleCompleted={ toggleCompleted } />) }
        </div>
    );
}
