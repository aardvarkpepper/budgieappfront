import TransactionEditForm from "../Components/TransactionEditForm";

export default function TransactionEdit({transactions, setTotal, setTransactions}) {
    return (
        <div className="New Edit">
        <h2>Edit</h2>
        <TransactionEditForm setTotal={setTotal} transactions={transactions} setTransactions={setTransactions} />
        </div>
    )
}