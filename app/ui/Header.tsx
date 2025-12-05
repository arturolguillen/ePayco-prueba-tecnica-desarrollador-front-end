"use client";

import { ArrowLeft, Plus } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header({ title, backTo }: {
    title: string;
    backTo?: string;
}) {
    const pathname = usePathname();

    return (
        <header className="px-2 sm:px-4 w-full max-w-2xl mx-auto py-4 flex items-center justify-between">
            <div className="inline-flex items-center gap-2">
                { backTo && <Link href={ backTo } title={ 'Volver' }>
                    <ArrowLeft />
                </Link> }
                <h1 className="font-bold text-2xl">{ title }</h1>
            </div>
            { pathname === '/todos' && <Link href={ '/todos/create' } title={ 'Nueva tarea' } className="btn btn-primary btn-soft btn-sm hidden xl:inline-flex">
                <Plus />
                <span>Nueva tarea</span>
            </Link> }
        </header>
    );
}
