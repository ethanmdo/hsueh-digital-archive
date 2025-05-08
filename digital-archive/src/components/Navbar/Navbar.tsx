import './Navbar.css'

function Navbar() {
    return(
        <nav id="navbar" className="navbar navbar-expand-lg navbar-light bg-light">
            <a id="nav-header" className="navbar-brand">
                HSUEH DIGITAL ARCHIVE
            </a>
            <div className="navbar-nav">
                <a className="nav-item nav-link active" href="/">Home</a>
                <div className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" href="/Photographs">Photographs</a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a className="dropdown-item" href="/Photographs">All Photos</a>
                        <div className="dropdown-divider"></div>
                        <a className="dropdown-item" href="/Photographs#taiwan">Taiwan</a>
                        <a className="dropdown-item" href="/Photographs#earlyUS">Early U.S.</a>
                        <a className="dropdown-item" href="/Photographs#raisingKids">Raising a Family</a>
                        <a className="dropdown-item" href="/Photographs#nineties">90s</a>
                    </div>
                </div>
                <a className="nav-item nav-link" href="/themed-collections">Themed Collections</a>
            </div>
        </nav>
    );
}

export default Navbar;