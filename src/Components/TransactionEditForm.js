import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
const API = process.env.REACT_APP_API_URL;

export default function TransactionEditForm({setTotal, total}) {
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
    const [placeholder, setPlaceholder] = useState(0);

    const handleTextChange = (event) => {
        setTransaction({ ...transaction, [event.target.id]: event.target.value })
    };
    //onChange={handleTextChange}

    useEffect(() => {
        axios
            .get(`${API}/transactions/${index}`)
            .then((response) => {;
                setTransaction(response.data)
                setPlaceholder(Number(response.data.amount))
            })
            .catch((e) => console.error(e))
    }, [index])

    const updateTransaction = () => {
        axios
            .put(`${API}/transactions/${index}`, transaction)
            .then((response) => {
                setTransaction(response.data);
                console.log("Previous value:", placeholder);
                console.log("New entry", Number(response.data.amount));
                setTotal(previous => previous - placeholder + Number(response.data.amount));
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
                    placeholder="0"
                    onChange={handleTextChange}
                    required
                />
                <label htmlFor="item_name">Item name</label>
                <input
                    id="item_name"
                    value={transaction.item_name}
                    type="text"
                    placeholder="Item Name"
                    onChange={handleTextChange}
                    required
                />
                <label htmlFor="amount">Amount</label>
                <input
                    id="amount"
                    value={transaction.amount}
                    type="number"
                    placeholder="0"
                    onChange={handleTextChange}
                    required
                />
                <label htmlFor="date">Date(YYYY-MM-DD)</label>
                <input
                    id="date"
                    value={transaction.date}
                    type="text"
                    placeholder="Item Name"
                    onChange={handleTextChange}
                    required
                />
                <label htmlFor="from">From</label>
                <input
                    id="from"
                    value={transaction.from}
                    type="text"
                    placeholder="From"
                    onChange={handleTextChange}
                    required
                />
                <label htmlFor="category">Item name</label>
                <input
                    id="category"
                    value={transaction.category}
                    type="text"
                    placeholder="Category"
                    onChange={handleTextChange}
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