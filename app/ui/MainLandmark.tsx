export default function MainLandmark({ children }: {
    children: React.ReactNode;
}) {
    return (
        <main className="flex-1 block mx-auto max-w-2xl px-2 sm:px-4 w-full">
            { children }
        </main>
    );
}
