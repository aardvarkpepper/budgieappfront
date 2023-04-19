import { Link } from "react-router-dom";

export default function Navbar({total}) {
    const emptySpace = () => {
        return (<span>&nbsp;&nbsp;&nbsp;</span>)
    }

    const colorMe = (total) => {
        if (total > 100) {
            return (<span className="green">Total: {total}</span>)
        } else if (total >= 0) {
            return (<span className="yellow">Total: {total}</span>)
        } else {
            return (<span className="red">Total: {total}</span>)
        }
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
            {colorMe(total)}
        </nav>
    )
}