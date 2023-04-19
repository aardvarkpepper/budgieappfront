import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Error404 from "./Pages/Error404";
import Edit from "./Pages/TransactionEdit";
import Home from "./Pages/TransactionHome";
import Index from "./Pages/TransactionIndex";
import New from "./Pages/TransactionNew";
import Show from "./Pages/TransactionShow";

import Navbar from "./Components/Navbar";

import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
      <main>
        <Routes>
          <Route path ="/" element={<TransactionHome />} />
          <Route path ="/transactions" element={<TransactionIndex />} />
          <Route path ="/transactions/new" element={<TransactionNew />} />
          <Route path ="/transactions/:index" element={<TransactionShow />} />
          <Route path ="/transactions/:index/edit" element={<TransactionEdit />} />
          <Route path ="*" element={<Error404 />} />
        </Routes>
      </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
