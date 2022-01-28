import logo from "../../shared/images/Logo_TV_2015.svg.png";

const Footer = () => {
    return (
        <div className="container mt-3">
            <footer className="row">
                <div className="col">
                    <img className="appLogoFooter" src={logo} alt="132"/>
                </div>
                <p className="text-muted">© 2022</p>
            </footer>
            <div className="col"></div>
            <div className="col"></div>
            <div className="col">
                <h5>Contacts</h5>
                <ul className="nav flex-column">
                    <li className="nav-item mb-2">
                        <a className="nav-link p-0 text-muted" href="">Instagram</a>
                    </li>
                </ul>
            </div>
        </div>
    )
        ;
}


export default Footer;
