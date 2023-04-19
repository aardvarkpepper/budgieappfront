import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const API=process.env.REACT_APP_API_URL;

export default function TransactionNewForm({ transactions, setTransactions }) {
    const navigate = useNavigate();
    const [transaction, setTransaction] = useState({
        id: 0,
        item_name: "",
        amount: 0,
        date: "",
        from: "",
        category: "",
    });

    const handleTextChange = (event) => {
        setTransaction({ ...transaction, [event.target.id]: event.target.value })
    };

    const addTransaction = () => {
        axios.post(`${API}/transactions`, transaction)
            .then(() => {
                navigate("/transactions");
            })
            .catch((e) => console.error("catch", e))
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        addTransaction();
    };

    return (
        <div className="New">
            <form onSubmit={handleSubmit}>
            <label htmlFor="idNumber">ID#</label>
                <input
                    id="idNumber"
                    value={transaction.id}
                    type="number"
                    onChange={handleTextChange}
                    placeholder="0"
                    required
                />
                <label htmlFor="item_name">Item name</label>
                <input
                    id="item_name"
                    value={transaction.item_name}
                    type="text"
                    onChange={handleTextChange}
                    placeholder="Item Name"
                    required
                />
                <label htmlFor="amount">Amount</label>
                <input
                    id="amount"
                    value={transaction.amount}
                    type="number"
                    onChange={handleTextChange}
                    placeholder="0"
                    required
                />
                <label htmlFor="date">Date(YYYY-MM-DD)</label>
                <input
                    id="date"
                    value={transaction.date}
                    type="text"
                    onChange={handleTextChange}
                    placeholder="Item Name"
                    required
                />
                <label htmlFor="from">From</label>
                <input
                    id="from"
                    value={transaction.from}
                    type="text"
                    onChange={handleTextChange}
                    placeholder="From"
                    required
                />
                <label htmlFor="category">Item name</label>
                <input
                    id="category"
                    value={transaction.category}
                    type="text"
                    onChange={handleTextChange}
                    placeholder="Category"
                    required
                />
                <br />
                <input type="submit"/>
            </form>
        </div>
    )
}