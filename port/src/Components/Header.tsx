

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg " id="head" style={{backgroundColor:'#070d1b'}}>
      <div className="container-fluid">
        
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">ABOUT</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">RESUME</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">PORTFOLIO</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">TECHNOLOGIES</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">CONTACT</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
