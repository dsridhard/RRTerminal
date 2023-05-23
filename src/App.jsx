// import "./App.css";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MenuPage from "./pages/MenuPage";
import RoomBook from "./Module/RoomBooking/RoomBook";
import RoomReservation from "./Module/RoomBooking/RetiringroomReservation";
import BookingSearch from "./Module/Administration/BookingSearch";
import HorizontalLinearStepper from "./Module/Reports/HorizontalLinearStepper";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/home" element={<MenuPage />} />
        <Route path="/BookRoom" element={<RoomBook />}></Route>
        <Route path="/Retiringroom Reservation" element={<RoomReservation />}></Route>
        <Route path="/BookingSearch" element={<BookingSearch />} />
        <Route path="/ConsolidatedReport" element={<HorizontalLinearStepper />} />
      </Routes>
    </Router>
  );
}

export default App;
