import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from "axios";

import Error404 from "./Pages/Error404";
import TransactionEdit from "./Pages/TransactionEdit";
import TransactionHome from "./Pages/TransactionHome";
import TransactionIndex from "./Pages/TransactionIndex";
import TransactionNew from "./Pages/TransactionNew";
import TransactionShow from "./Pages/TransactionShow";

import Navbar from "./Components/Navbar";

import './App.css';
const API = process.env.REACT_APP_API_URL;

function App() {
  console.log("Render");

  const [transactions, setTransactions] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    axios
    .get(`${API}/transactions`)
    .then((response) => {
      setTransactions(response.data);
    })
    .catch((e) => console.error("catch", e))
  },[]);

  useEffect(() => {
    let totalTransactions=0;
    transactions.forEach(transaction => {
      totalTransactions += Number(transaction.amount);
    });
    setTotal(totalTransactions);
  }, [transactions])

  return (
    <div className="App">
      <BrowserRouter>
      <Navbar total={total}/>
      <main>
        <Routes>
          <Route path ="/" element={<TransactionHome />} />
          <Route path ="/transactions" element={<TransactionIndex transactions={transactions} setTransactions={setTransactions} />} />
          <Route path ="/transactions/new" element={<TransactionNew setTotal={setTotal}/>} />
          <Route path ="/transactions/:index" element={<TransactionShow setTotal={setTotal} />} />
          <Route path ="/transactions/:index/edit" element={<TransactionEdit setTotal={setTotal} total={total}/>} />
          <Route path ="*" element={<Error404 />} />
        </Routes>
      </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
