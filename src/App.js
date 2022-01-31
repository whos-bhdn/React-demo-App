import './App.css';
import logo from "./shared/images/Logo_TV_2015.svg.png"
import nature from "./shared/images/mainPhoto.jpg"
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar.jsx"
import Profile from "./Components/Profile/Profile";


const App = () => {
    return (
        <div className="container-xxl">
            <Header />
            <div className="d-flex">
                <Navbar />
                <Profile />
            </div>
            <Footer />
        </div>
    );
}

export default App;
