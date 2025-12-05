import type { Todo } from "@/app/todos/page";
import GenericCard from "@/app/ui/GenericCard";
import clsx from "clsx";
import { Trash } from "lucide-react";
import Link from "next/link";
import { memo } from "react";
import { toggleTodoCompleted } from "@/app/actions/todo";

function TodoItem({ todo, toggleCompleted }: {
    todo: Todo;
    toggleCompleted: (todo: Todo) => void;
}) {
    return (
        <GenericCard>
            <div className="flex items-center justify-between gap-8">
                <div className="inline-flex items-center gap-4">
                    <input
                        type="checkbox"
                        name={ `mark_as_completed_${todo.id}` }
                        id={ `mark_as_completed_${todo.id}` }
                        className="checkbox checkbox-primary checkbox-sm rounded-full"
                        checked={ todo.completed }
                        onChange={ async () => {
                            // Optimistic UI update.
                            toggleCompleted(todo);
                            try {
                                await toggleTodoCompleted(todo);
                            } catch (error) {
                                // Revert UI update on error.
                                toggleCompleted(todo);
                            }
                        } }
                    />
                    <p className={ clsx({
                        'text-lg font-medium -mt-1': true,
                        'line-through text-base-content/50': todo.completed,
                    }) }>
                        <Link href={ `/todos/${todo.id}` } title={ todo.title }>
                            { todo.title }
                        </Link>
                    </p>
                </div>
                <div>
                    <button className="btn btn-error btn-sm btn-ghost">
                        <Trash size={ 16 } />
                    </button>
                </div>
            </div>
        </GenericCard>
    );
}

export default memo(TodoItem);
