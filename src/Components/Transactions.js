import Transaction from "./Transaction";
import { useState, useEffect } from 'react';
import axios from "axios";
const API = process.env.REACT_APP_API_URL;

export default function Transactions() {
    const [transactions, setTransactions] = useState([]);
    
    useEffect(() => {
        axios
        .get(`${API}/transactions`)
        .then((response) => setTransactions(response.data))
        .catch((e) => console.error("catch", e))
    }, []);

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