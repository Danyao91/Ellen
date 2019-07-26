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
                    <li className="nav-item">
                        <Link href="/service"><a
                        className="nav-link">Service</a></Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/contactus"><a
                        className="nav-link">Contact us</a></Link>
                    </li>
                </ul>
            </div>
        ßß</div>   
    </nav>
);

export default Navbar;
