import Link from 'next/link';

const Navbar = () => (
    <nav className="navbar navbar-expand navbar-dark bg-dark mb-4">
        <div className="container">
            <a className="navbar-brand" href="#">EllenSun Immigration Corp.</a>
            <div className="collapse navbar-collapse">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <Link href="/"><a
                        className="nav-link">Home</a></Link>
                    </li>
                    <li className="nav-item dropdown">
                        <Link href="/service"><a className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Service
                        </a></Link>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a className="dropdown-item" href="/visit">Visit Canada</a>
                            <a className="dropdown-item" href="/immigration">Immigrate to Canada</a>
                            <a className="dropdown-item" href="/work">Work in Canada</a>
                            <a className="dropdown-item" href="/study">Study in Canada</a>
                            <a className="dropdown-item" href="/other">Other Applications</a>
                        </div>
                    </li>
                    <li className="nav-item">
                        <Link href="/contactus"><a
                        className="nav-link ">Contact us</a></Link>
                    </li>
    
                        {/* <Link href="/"><a className="nav-link">Language</a></Link> */}
                        <select data-theme="a" data-iconpos="right">
                           <option value="1">English</option>
                           <option value="2">简体中文</option>
                        </select>

                </ul>
            </div>
        </div>   
    </nav>
);

export default Navbar;
