import './Navbar.css'

function Navbar() {
    return(
        <nav id="navbar" className="navbar navbar-expand-lg navbar-light bg-light">
            <a id="nav-header" className="navbar-brand">
                HSUEH DIGITAL ARCHIVE
            </a>
            <div className="navbar-nav">
                <a className="nav-item nav-link active" href="/">Home</a>
                <a className="nav-item nav-link" href="/Photographs">Photographs</a>
                <a className="nav-item nav-link" href="#">Themed Collections</a>
            </div>
        </nav>
    );
}

export default Navbar;