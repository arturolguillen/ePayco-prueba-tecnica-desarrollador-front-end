import clsx from "clsx";

export type ActiveTab = 'all' | 'pending' | 'completed';

export default function TodoTabs({ activeTab, onSelect }: {
    activeTab?: ActiveTab,
    onSelect?: (tab: ActiveTab) => void
}) {
    return (
        <div role="tablist" className="tabs tabs-border">
            <a role="tabs" className={ clsx({
                'tab': true,
                'tab-active': activeTab === 'all'
            }) } onClick={ () => onSelect?.('all') }>
                { 'Todas' }
            </a>
            <a role="tabs" className={ clsx({
                'tab': true,
                'tab-active': activeTab === 'pending'
            }) } onClick={ () => onSelect?.('pending') }>
                { 'Pendientes' }
            </a>
            <a role="tabs" className={ clsx({
                'tab': true,
                'tab-active': activeTab === 'completed'
            }) } onClick={ () => onSelect?.('completed') }>
                { 'Completadas' }
            </a>
        </div>
    );
}
