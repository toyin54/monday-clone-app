import {BrowserRouter, Route, Routes} from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import TicketPage from "./pages/TicketPage";
import TicketCard from "./compnents/TicketCard";
import Nav from "./compnents/Nav";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
          <Nav/>
        <Routes>
          <Route path = '/' element = {<Dashboard/>}/>
            <Route path = '/ticket' element = {<TicketPage/>}/>
            <Route path = '/ticket/:id' element = {<TicketPage editMode = {true}/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
