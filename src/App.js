import './App.css';
import logo from "./shared/images/Logo_TV_2015.svg.png"
import Header from "./Components/HeaderComponent/Header";
import Footer from "./Components/FooterComponent/Footer";


const App = () => {
    return (
        <div className="container-xxl">
            <Header />
            <nav>
                <p>Profile</p>
                <p>Messages</p>
                <p>Main Content</p>
            </nav>
            <Footer />
        </div>
    );
}

export default App;
