import type { Todo } from "@/app/todos/page";
import GenericCard from "@/app/ui/GenericCard";
import clsx from "clsx";
import Link from "next/link";
import { memo, startTransition, useActionState } from "react";
import { deleteTodo, toggleTodoCompleted } from "@/app/actions/todo";
import TodoToggleCompleted from "@/app/ui/TodoToggleCompleted";
import TodoDeleteButton from "@/app/ui/TodoDeleteButton";

function TodoItem({ todo, onToggleCompleted, onDelete }: {
    todo: Todo;
    onToggleCompleted: (todo: Todo) => void;
    onDelete: (todo: Todo) => void;
}) {
    const [ _, deleteAction, pendingDelete ] = useActionState(() => deleteTodo(todo), null);

    return (
        <GenericCard className={ clsx(pendingDelete && 'opacity-50 pointer-events-none') }>
            <div className="flex items-center justify-between gap-8">
                <div className="inline-flex items-center gap-4">
                    <TodoToggleCompleted todo={ todo } onToggle={ async () => {
                        // Optimistic UI update.
                        onToggleCompleted(todo);
                        try {
                            await toggleTodoCompleted(todo);
                        } catch (_) {
                            // Revert UI update on error.
                            onToggleCompleted(todo);
                        }
                    } } />
                    <p className={ clsx({
                        'text-lg font-medium -mt-1': true,
                        'line-through text-base-content/50': todo.completed,
                    }) }>
                        <Link href={ `/todos/${todo.id}` } title={ todo.title }>
                            { todo.title }
                        </Link>
                    </p>
                </div>
                <TodoDeleteButton todo={ todo } onClick={ () => {
                    try {
                        startTransition(deleteAction);
                        onDelete(todo);
                    } catch (_) { }
                } } />
            </div>
        </GenericCard>
    );
}

export default memo(TodoItem);
