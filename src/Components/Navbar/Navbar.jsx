import classes from "./Navbar.module.css";
import classNames from "classnames";
import "./Navbar.module.css"

const Navbar = () => {
   return(
       <nav className={classNames("mx-3")}>
           <p>Profile</p>
           <p>Messages</p>
           <p>Main Content</p>
       </nav>
   )
}

export default Navbar;