import './App.css';
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Left from "./components/Left";
import Right from "./components/Right";
import {Route, Routes} from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import DetailProduct from "./pages/DetailProduct";
import Cart from "./pages/Cart";
import Mid from "./pages/Mid";

function App() {
    return (
        <>
            <div className="container-fluid">
                <Header/>
                <Navbar/>
                <div className="row">
                    <Left/>
                    <div className="col-7 mid">
                        <Routes>
                            <Route path={''} element={<Login/>}/>
                            <Route path={'register'} element={<Register/>}/>
                            <Route path={'detail/:x'} element={<DetailProduct/>}/>
                            <Route path={'cart'} element={<Cart/>}/>
                            <Route path={'home'} element={<Mid/>}/>
                        </Routes>
                    </div>
                    <Right/>
                </div>
            </div>
        </>
    );
}

// formik

export default App;
