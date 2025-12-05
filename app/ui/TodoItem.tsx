import type { Todo } from "@/app/todos/page";
import GenericCard from "@/app/ui/GenericCard";
import { Trash } from "lucide-react";

export default function TodoItem({ todo }: {
    todo: Todo
}) {
    return (
        <GenericCard>
            <div className="flex items-center justify-between gap-8">
                <div className="inline-flex items-center gap-4">
                    <input type="checkbox" className="checkbox checkbox-primary checkbox-sm rounded-full" />
                    <p className="text-lg font-medium -mt-1">{ todo.title }</p>
                </div>
                <div>
                    <button className="btn btn-error btn-soft btn-sm">
                        <Trash size={ 16 } />
                    </button>
                </div>
            </div>
        </GenericCard>
    );
}
