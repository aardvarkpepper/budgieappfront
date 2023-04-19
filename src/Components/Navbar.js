import { Link } from "react-router-dom";

export default function Navbar({total}) {
    const emptySpace = () => {
        return (<span>&nbsp;&nbsp;&nbsp;</span>)
    }
    return (
        <nav>
            <span>Budgeting App{emptySpace()}</span>
            <span>
                <Link to="/transactions">Transactions</Link> {emptySpace()}
            </span>
            <button>
                <Link to="transactions/new">New Transaction</Link>
            </button>
            <span>Total: {total}</span>
        </nav>
    )
}