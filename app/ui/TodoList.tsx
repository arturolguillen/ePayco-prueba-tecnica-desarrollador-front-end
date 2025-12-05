"use client";

import { use } from "react";
import { Todo } from "../todos/page";

export default function TodoList({ todos }: {
    todos: Promise<Todo[]>
}) {
    const allTodos = use(todos);

    return (
        <>{ JSON.stringify(allTodos) }</>
    );
}
