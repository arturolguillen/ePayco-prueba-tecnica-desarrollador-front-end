import GenericCard from "@/app/ui/GenericCard";
import Header from "@/app/ui/Header";
import MainLandmark from "@/app/ui/MainLandmark";
import TodoForm from "@/app/ui/TodoForm";

export default function Page() {
    return (
        <>
            <Header title={ 'Crear tarea' } backTo={ '/todos' } />
            <MainLandmark>
                <GenericCard>
                    <TodoForm />
                </GenericCard>
            </MainLandmark>
        </>
    );
}
