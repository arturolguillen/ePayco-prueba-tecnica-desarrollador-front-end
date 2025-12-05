import GenericCard from "@/app/ui/GenericCard";

export default function TodoListSkeleton() {
    return (
        <div className="space-y-4 animate-pulse">
            <GenericCard>
                <div className="h-6 bg-gray-200 rounded-md"></div>
            </GenericCard>
            <GenericCard>
                <div className="h-6 bg-gray-200 rounded-md"></div>
            </GenericCard>
            <GenericCard>
                <div className="h-6 bg-gray-200 rounded-md"></div>
            </GenericCard>
        </div>
    );
}
