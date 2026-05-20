// import logo from "..assets/rover.webp"
import { Link } from "react-router-dom"

// type NavbarProps = {
//     setView: (view: string) => void
// }

// function Navbar(props: NavbarProps) {
//     return (
//         <nav className="nav-container">
//             <a href="#" onClick= {(e)=> {e.preventDefault(); props.setView("home")}}>
//                 <img src={`/rover.webp`} alt="Rover Logo" />
//             </a>
//             <div>
//                 <button onClick={() => props.setView("home")}>Home</button>
//                 <button onClick={() => props.setView("characters")}>Characters</button>
//                 <button onClick={() => props.setView("echoes")}>Echoes</button>
//                 <button onClick={() => props.setView("about")}>About</button>
//             </div>
//         </nav>
//     )
// }

function Navbar() {
    return (
        <nav className="nav-container">
            <Link to="/">
                 <img src={`/rover.webp`} alt="Rover Logo" />
            </Link>
            <div>
                <Link to="/"><button>Home</button></Link>
                <Link to="characters"><button>Characters</button></Link>
                <Link to="echoes"><button>Echoes</button></Link>
                <Link to="about"><button>About</button></Link>
            </div>
        </nav>
    )
}

export default Navbar