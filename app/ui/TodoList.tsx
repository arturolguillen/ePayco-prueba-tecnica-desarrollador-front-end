"use client";

import { use, useCallback, useEffect, useMemo, useState } from "react";
import type { Todo } from "@/app/todos/page";
import TodoItem from "@/app/ui/TodoItem";
import TodoTabs, { ActiveTab } from "@/app/ui/TodoTabs";

export default function TodoList({ todos }: {
    todos: Promise<Todo[]>
}) {
    const initialTodos = use(todos);
    const [ allTodos, setAllTodos ] = useState<Todo[]>(initialTodos);
    const [ activeTab, setActiveTab ] = useState<ActiveTab>('all');

    const visibleTodos = useMemo(() => {
        return allTodos.filter(todo => {
            if (activeTab === 'pending') return !todo.completed;
            if (activeTab === 'completed') return todo.completed;
            return true;
        });
    }, [ allTodos, activeTab ]);

    const toggleCompleted = useCallback((todo: Todo) => setAllTodos(prevTodos => prevTodos.map(t => t.id === todo.id ? { ...t, completed: !t.completed } : t)), []);
    const deleteTodo = useCallback((todo: Todo) => setAllTodos(prevTodos => prevTodos.filter(t => t.id !== todo.id)), []);

    return (
        <div className="space-y-4">
            <TodoTabs activeTab={ activeTab } onSelect={ (tab: ActiveTab) => setActiveTab(tab) } />
            <div className="space-y-4">
                { visibleTodos.map(todo =>
                    <TodoItem
                        key={ todo.id }
                        todo={ todo }
                        onToggleCompleted={ toggleCompleted }
                        onDelete={ deleteTodo }
                    />
                ) }
            </div>
        </div>
    );
}
