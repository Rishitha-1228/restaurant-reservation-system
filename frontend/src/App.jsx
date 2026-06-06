import {
 BrowserRouter,
 Routes,
 Route
} from "react-router-dom";

import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Dashboard from "./pages/Dashboard";
import Reservation from "./pages/Reservation";

function App() {
 return (
  <BrowserRouter>

   <Routes>

    <Route
      path="/"
      element={<Home />}
    />

    <Route
      path="/menu"
      element={<Menu />}
    />

    <Route
      path="/reservation"
      element={<Reservation />}
    />

    <Route
      path="/dashboard"
      element={<Dashboard />}
    />

   </Routes>

  </BrowserRouter>
 );
}

export default App;