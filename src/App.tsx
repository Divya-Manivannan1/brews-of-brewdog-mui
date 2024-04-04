import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter basename="/ticketCounter">
      <div className="app">
        <h1 className="app__title">Brews Of BrewDog</h1>
        <Routes>
          <Route path="/" element={<></>} />
          <Route path="/home" element={<></>} />
          <Route
            path="/beer/:ID"
            element={<></>}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
