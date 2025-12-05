export default function FormError({ message }: {
    message: string;
}) {
    return (
        <p className="text-error mt-2 text-xs">{ message }</p>
    );
}
