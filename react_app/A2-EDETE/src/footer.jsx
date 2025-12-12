import './Footer.css';

const Footer = ({ message }) => {
    return (
        <footer className="footer">
            <p>{message}</p>
            <p>Copyright © 2023 My Website. All rights reserved - Managed and maintained by EDET's DESIGNS.</p>
        </footer>
    );
};

export default Footer;