"use client";

import { saveTodo, SaveTodoState } from "@/app/actions/todo";
import { use, useActionState } from "react";
import FormError from "@/app/ui/FormError";
import { Todo } from "@/app/todos/page";

export default function TodoForm({ todo }: {
    todo?: Promise<Todo>
}) {
    const theTodo = todo ? use(todo) : null;
    const initialState: SaveTodoState = {
        values: {
            title: theTodo?.title ?? '',
            completed: theTodo?.completed ?? false,
        },
        errors: {},
    };

    const [ state, formAction, pending ] = useActionState<SaveTodoState, FormData>(saveTodo, initialState);

    return (
        <form action={ formAction } className="space-y-3">
            { theTodo && <input type="hidden" name="id" value={ theTodo.id } /> }
            <label htmlFor="title" className="floating-label">
                <span>{ 'Escribe tu tarea' }</span>
                <input
                    type="text"
                    name="title" id="title"
                    className="input block w-full"
                    placeholder={ 'Escribe tu tarea' }
                    autoComplete="text"
                    defaultValue={ state.values.title }
                />
                { state.errors?.title && <FormError message={ state.errors?.title[ 0 ] } /> }
            </label>
            <div className="card card-border border-base-300">
                <div className="card-body flex-row items-center justify-between gap-4">
                    <label htmlFor="completed" className="sr-only">{ 'Marcar como completada' }</label>
                    <p className="text-base-content/70">{ 'Marcar como completada' }</p>
                    <input
                        type="checkbox"
                        name="completed"
                        id="completed"
                        className="toggle"
                        defaultChecked={ state.values.completed }
                    />
                </div>
            </div>
            <div className="md:flex md:justify-end">
                <button
                    type="submit"
                    className="btn btn-primary btn-soft w-full md:w-auto"
                    disabled={ pending }
                >
                    { pending ? 'Guardando tarea...' : 'Guardar Tarea' }
                </button>
            </div>
        </form>
    );
}
