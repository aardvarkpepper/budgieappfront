import TransactionEditForm from "../Components/TransactionEditForm";

export default function TransactionEdit({setTotal, total}) {
    return (
        <div className="New Edit">
        <h2>Edit</h2>
        <TransactionEditForm setTotal={setTotal} total={total}/>
        </div>
    )
}