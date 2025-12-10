import './Footer.css'; // Import CSS for styling

// Footer component that shows my private message and copyright
const Footer = ({ message }) => {
    return (
        <footer className="footer">
            <p className="footer-message">{message}</p>
            <p className="footer-default">Copyright © 2025 My Website. All rights reserved.</p>
        </footer>
    );
};

export default Footer;