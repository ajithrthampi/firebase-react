
import Signup from "./components/Signup"
import Login from "./components/Login"
import { Routes, Route } from "react-router-dom"
// import { Container, Row, Col} from "react-bootstrap"
import { UserAuthContextProvider } from "./context/UserAuthContext"
import Home from "./components/Home"
import ProtectedRoute from "./components/ProtectedRoute"
// import AdminList from "./components/Admin/AdminList"
import MainAdmin from "./components/Admin/MainAdmin"



function App() {

  return (

    <UserAuthContextProvider>
      <Routes>
        <Route exact path="/home" element={<ProtectedRoute> <Home /> </ProtectedRoute>} />
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/admin" element={<MainAdmin />} />
      </Routes>
    </UserAuthContextProvider>


  )
}

export default App