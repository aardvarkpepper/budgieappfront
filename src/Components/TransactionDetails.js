import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
const API = process.env.REACT_APP_API_URL;

export default function TransactionDetails({setTotal}) {
    //test const vs let
    let navigate = useNavigate();
    const [transaction, setTransaction] = useState({});
    const [placeholder, setPlaceholder] = useState(0);
    let { index } = useParams();

    useEffect(() => {
        axios
            .get(`${API}/transactions/${index}`)
            .then((response) => {
                setTransaction(response.data);
                setPlaceholder(Number(response.data.amount));
            }).catch(() => {
                navigate("/not-found")
            })
    }, [index, navigate]);

    const handleDelete = () => {
        axios
            .delete(`${API}/transactions/${index}`)
            .then(() => {
                navigate("/transactions")
                setTotal(previous => previous - placeholder)
            }).catch((e) => console.error(e))
    };

    return (
        <table>
            <tbody>
                <tr>
                    <td>
                        <Link to={`/transactions/${index}`}>{transaction.idNumber}</Link>
                    </td>
                    <td>
                        <span>{transaction.item_name}</span>
                    </td>
                    <td>
                        <span>{transaction.amount}</span>
                    </td>
                    <td>
                        <span>{transaction.date}</span>
                    </td>
                    <td>
                        <span>{transaction.from}</span>
                    </td>
                    <td>
                        <span>{transaction.category}</span>
                    </td>
                    <td>
                        <span>
                            <Link to={"/transactions"}>
                                <button>Back</button>
                            </Link>
                        </span>
                    </td>
                    <td>
                        <span>
                            <Link to={`/transactions/${index}/edit`}>
                                <button>Edit</button>
                            </Link>
                        </span>
                    </td>
                    <td>
                        <span>
                            <button onClick={handleDelete}>Delete</button>
                        </span>
                    </td>
                </tr>
            </tbody>
        </table>
    )

}