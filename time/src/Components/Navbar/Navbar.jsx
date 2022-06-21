import "./Navbar.css";

export const Navbar = () =>{
    return(
        <div className="navbar">
            <div className="logo">
                <img className="logoImg" src="data:image/png;base64,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" alt="logo img" />

            </div>
            <div>
                <input className="searchBar" type="text" placeholder="Serach..." />
            </div>
        </div>
    )
}