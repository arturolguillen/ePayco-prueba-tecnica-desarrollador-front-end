import { Plus } from "lucide-react";
import Link from "next/link";

export default function AddTodoFab() {
    return (
        <div className="fab xl:hidden">
            <Link href={ 'todos/create' } title={ 'Nueva tarea' } className="btn btn-primary btn-circle btn-soft btn-lg shadow-lg">
                <Plus />
            </Link>
        </div>
    );
}
