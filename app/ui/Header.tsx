import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function Header({ title, backTo }: {
    title: string;
    backTo?: string;
}) {
    return (
        <header className="px-2 sm:px-4 w-full max-w-2xl mx-auto py-4">
            <div className="inline-flex items-center gap-2">
                { backTo && <Link href={ backTo } title={ 'Volver' }>
                    <ArrowLeft />
                </Link> }
                <h1 className="font-bold text-2xl">{ title }</h1>
            </div>
        </header>
    );
}
