import logo from "../../shared/images/Logo_TV_2015.svg.png";
import "./Header.module.css";
import classNames from 'classnames';
import classes from "./Header.module.css";


const Header = () => {
    return(
        <header className={classes.header}>
            <img className={classes.appLogo} src={logo} alt="132"/>
            <div className={classNames("dropdown")}>
                <button id="dropdownMenuButton1" type="button" className={"dropdown-toggle customBut"} data-bs-toggle="dropdown" aria-expanded="false">
                    Выпадающая кнопка
                </button>
                <ul className={classNames("dropdown-menu")} aria-labelledby="dropdownMenuButton1">
                    <li><a className={classNames("dropdown-item")} href="#">Выпадающая ссылка</a></li>
                    <li><a className={classNames("dropdown-item")} href="#">Выпадающая ссылка</a></li>
                </ul>
            </div>
        </header>
    );
}


export default Header;