import type { Todo } from "@/app/todos/page";
import GenericCard from "@/app/ui/GenericCard";
import clsx from "clsx";
import { Trash } from "lucide-react";
import Link from "next/link";

export default function TodoItem({ todo }: {
    todo: Todo
}) {
    return (
        <GenericCard>
            <div className="flex items-center justify-between gap-8">
                <div className="inline-flex items-center gap-4">
                    <input type="checkbox" className="checkbox checkbox-primary checkbox-sm rounded-full" />
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
