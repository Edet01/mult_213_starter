import './Header.css';

const Header = (props) => {  // Keep props as one object
    return (
        <header className="header">
            <h1>{props.title}</h1>    {/* Access the title from props */}
            <p>{props.message}</p>    {/* Access the message from props */}
        </header>
    );
};

export default Header;