import Head from 'next/head';
import Navbar from './Navbar';

const Layout = (props) => (
    <div>
        <Head>
            <title>EllenSunImmigrationCorp.</title>
            <link rel="stylesheet"
            href="https://bootswatch.com/4/lux/bootstrap.min.css"/>
        </Head>ß
        <Navbar />
        <div className="container">
            {props.children}
        </div>
    </div>
);

export default Layout;