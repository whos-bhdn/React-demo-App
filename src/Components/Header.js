import logo from "../shared/images/Logo_TV_2015.svg.png";


const Header = () => {
    return(
        <header className="header">
            <img className="App-logo" src={logo} alt="132"/>
            <div className="dropdown">
                <button id="dropdownMenuButton1" type="button" className="dropdown-toggle customBut" data-bs-toggle="dropdown" aria-expanded="false">
                    Выпадающая кнопка
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    <li><a className="dropdown-item" href="#">Выпадающая ссылка</a></li>
                    <li><a className="dropdown-item" href="#">Выпадающая ссылка</a></li>
                </ul>
            </div>
        </header>
    );
}


export default Header;