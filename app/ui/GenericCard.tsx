export default function GenericCard({ children }: {
    children: React.ReactNode;
}) {
    return (
        <div className="card bg-base-100 card-border border-base-300">
            <div className="card-body">
                { children }
            </div>
        </div>
    );
}
