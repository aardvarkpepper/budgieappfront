import Transaction from "./Transaction";

export default function Transactions({transactions, setTransactions}) {

    return (
        <div className="Transactions">
            <section>
                <table>
                    <tbody>
                        {transactions.map((transaction, index) => {
                            return <Transaction key={index} transaction={transaction} index={index} setTransactions={setTransactions} transactions = {transactions} />;
                        })}
                    </tbody>
                </table>
            </section>
        </div>
    )
}