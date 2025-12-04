export default function TodoForm() {
    return (
        <form action="" className="space-y-3">
            <label htmlFor="title" className="floating-label">
                <span>{ 'Escribe tu tarea' }</span>
                <input type="text" name="title" id="title" className="input block w-full" placeholder={ 'Escribe tu tarea' } />
            </label>
            <div className="card card-border border-base-300">
                <div className="card-body flex-row items-center justify-between gap-4">
                    <label htmlFor="completed" className="sr-only">{ 'Marcar como completada' }</label>
                    <p className="text-base-content/70">{ 'Marcar como completada' }</p>
                    <input type="checkbox" name="completed" id="completed" className="toggle" />
                </div>
            </div>
            <div className="md:flex md:justify-end">
                <button type="submit" className="btn btn-primary w-full md:w-auto">
                    { 'Crear Tarea' }
                </button>
            </div>
        </form>
    );
}
