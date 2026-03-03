import logo from "../assets/react.svg"

function Navbar() {
    return (
        <nav className="nav-container">
            <img src={logo} alt="React Logo" />
            <div >
                <button>Home</button>
                <button>Characters</button>
                <button>Echoes</button>
                <button>About</button>
            </div>
        </nav>
    )
}

export default Navbar