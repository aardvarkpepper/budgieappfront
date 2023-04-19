import { Link } from "react-router-dom";

export default function Bookmark({ transaction, index }) {
    return (
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
        </tr>
    )
}