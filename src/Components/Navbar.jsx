

function Navbar(){
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
            <a className="navbar-brand" href="/">Logo</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
                <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Home</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="/">Sell Your Music</a>
                </li>
                <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="/" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Services
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                    <li><a className="dropdown-item" href="/">Music Distribution</a></li>
                    <li><a className="dropdown-item" href="/">Video Distribution</a></li>
                    <li><a className="dropdown-item" href="/">Lyrics Distribution</a></li>
                    <li><a className="dropdown-item" href="/">Caller Tune Distribution</a></li>
                    <li><a className="dropdown-item" href="/">Music Publishing</a></li>
                </ul>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="/">Artist Help</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="/">Blogs</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="/">Jobs</a>
                </li>
                <li className="nav-item login-btn">
                <a className="nav-link" href="/login">Login</a>
                </li>
            </ul>
            </div>
        </div>
        </nav>
    )
}

export default Navbar;