import { Trash } from "lucide-react";
import type { Todo } from "@/app/todos/page";

export default function TodoDeleteButton({ todo, onClick }: {
    todo: Todo;
    onClick: (todo: Todo) => void;
}) {
    return (
        <button
            className="btn btn-error btn-sm btn-ghost"
            onClick={ () => onClick(todo) }
        >
            <Trash size={ 16 } />
        </button>
    );
}
