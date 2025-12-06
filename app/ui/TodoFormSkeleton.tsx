import GenericCard from "@/app/ui/GenericCard";

export default function TodoFormSkeleton() {
    return (
        <div className="animate-pulse">
            <GenericCard>
                <div className="space-y-3">
                    <div className="h-10 bg-gray-200 rounded-md"></div>
                    <div className="h-20 bg-gray-200 rounded-md"></div>
                    <div className="md:flex md:justify-end">
                        <div className="md:w-32 h-10 bg-gray-200 rounded-md"></div>
                    </div>
                </div>
            </GenericCard>
        </div>
    );
}
