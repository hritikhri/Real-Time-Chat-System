import { BrowserRouter as Router, Routes ,Route} from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import ProtectedRoutes from "./pages/ProtectedRoutes"
import MainView from "./pages/MainView";
import SignupOTP from "./components/SignupOTP";

function App() {
  return (
    <>
      <div className="AppContainer">
        <Router>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/" element={<ProtectedRoutes><MainView><Home/></MainView></ProtectedRoutes>} />
            {/* <Route path="/signup/otp-manager" element={<SignupOTP/>}/> */}
            <Route path="*" element = {<ProtectedRoutes><MainView><Home/></MainView></ProtectedRoutes>} />
          </Routes>
        </Router>
      </div>
      {/* <Login/>   */}
      {/* <Signup/> */}
    </>
  );
}

export default App;
