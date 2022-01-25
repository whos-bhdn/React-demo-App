import './App.css';

const App = () => {
    return (
        <div className="simple">
            <Technologies />
            <Header />
        </div>
    );
}

const Header = () => {
    return (
        <div className="simple">
            <ul className="simpleColumn">
                <li className="simpleListEl">Hello this is my first React App</li>
                <li className="simpleListEl">Hello this is my first React App</li>
                <li className="simpleListEl">Hello this is my first React App</li>
                <li className="simpleListEl">Hello this is my first React App</li>
                <li className="simpleListEl">Hello this is my first React App</li>
            </ul>
        </div>
    );
}

const Technologies = () => {
    return(
        <ul className="simpleColumn">
        <li className="simpleListEl">HTML</li>
        <li className="simpleListEl">CSS</li>
        <li className="simpleListEl">Bootstrap</li>
        <li className="simpleListEl">Angular</li>
        <li className="simpleListEl">Firebase</li>
    </ul>
    )
}

export default App;
