import TransactionDetails from "../Components/TransactionDetails";

export default function TransactionShow({setTotal}) {
    return (
        <div className="Show">
            <h2>Show</h2>
            <TransactionDetails setTotal={setTotal} />
        </div>
    )
}