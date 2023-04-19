import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
const API = process.env.REACT_APP_API_URL;

export default function TransactionEditForm({transactions, setTransactions, setTotal}) {
    const navigate = useNavigate();
    let { index } = useParams();
    const [transaction, setTransaction] = useState({
        idNumber: 0,
        item_name: "",
        amount: 0,
        date: "",
        from: "",
        category: "",
    });

    const handleTextChange = (event) => {
        setTransaction({ ...transaction, [event.target.id]: event.target.value })
    };

    useEffect(() => {
        axios
            .get(`${API}/transactions/${index}`)
            .then((response) => {;
                setTransaction(response.data)
            })
            .catch((e) => console.error(e))
    }, [index, setTotal])
    
      useEffect(() => {
        let totalTransactions=0;
        transactions.forEach(transaction => {
          totalTransactions += Number(transaction.amount);
        });
        setTotal(totalTransactions);
      }, [transactions])

    const updateTransaction = () => {
        axios
            .put(`${API}/transactions/${index}`, transaction)
            .then((response) => {
                setTransaction(response.data);
                navigate(`/transactions/${index}`)
            })
            .catch((e) => console.warn("warn", e))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        updateTransaction();
    };

    return (
        <div className="Edit">
            <form onSubmit={handleSubmit}>
                <label htmlFor="idNumber">ID#</label>
                <input
                    id="idNumber"
                    value={transaction.idNumber}
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
            <Link to={`/transactions/${index}`}>
                <button>Cancel Edit</button>
            </Link>
        </div>
    )
}