import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav>
            <h1>
                <Link to="/transactions">Transactions</Link>
            </h1>
            <button>
                <Link to="transactions/new">New Transaction</Link>
            </button>
        </nav>
    )
}