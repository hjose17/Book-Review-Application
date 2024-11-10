
// rendering footer with current year in copyright
function Footer() {
    const year = new Date().getFullYear();
    return (
        <footer>
            <p>Copyright © {year}</p>
        </footer>
    );
}

export default Footer;