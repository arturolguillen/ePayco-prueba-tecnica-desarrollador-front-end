import clsx from "clsx";

export default function GenericCard({ children, className }: {
    children: React.ReactNode;
    className?: React.HTMLAttributes<HTMLDivElement>[ 'className' ];
}) {
    return (
        <div className={ clsx({
            'card bg-base-100 card-border border-base-300': true,
            [ className ?? '' ]: !!className,
        }) }>
            <div className="card-body">
                { children }
            </div>
        </div>
    );
}
