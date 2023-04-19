import TransactionNewForm from "../Components/TransactionNewForm";
export default function TransactionNew ({setTotal}) {
    return (
        <div className="New">
            <h2>New</h2>
            <TransactionNewForm setTotal={setTotal}/>
        </div>
    )
}