import type { Todo } from "@/app/todos/page";

export default function TodoToggleCompleted({ todo, onToggle }: {
    todo: Todo;
    onToggle: (todo: Todo) => void;
}) {
    return (
        <input
            type="checkbox"
            name={ `mark_as_completed_${todo.id}` }
            id={ `mark_as_completed_${todo.id}` }
            className="checkbox checkbox-primary checkbox-sm rounded-full"
            checked={ todo.completed }
            onChange={ () => onToggle(todo) }
        />
    );
}
