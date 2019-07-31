import Link from 'next/link';
import React from 'react'
import PropTypes from 'prop-types'

import { i18n, withTranslation } from '../i18n'

const Navbar = ({ t }) => (
    <nav className="navbar navbar-expand navbar-dark bg-dark mb-4">
        <div className="container">
            <a className="navbar-brand" href="#">EllenSun Immigration Corp.</a>
            <div className="collapse navbar-collapse">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <Link href="/"><a
                        className="nav-link">{t('home')}</a></Link>
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
                    <li className="nav-item"
                        onClick={() => i18n.changeLanguage(i18n.language === 'en' ? 'zh' : 'en')}
                    >
                        <Link><a
                            className="nav-link ">{t('change-locale')}</a></Link>
                    </li>
                </ul>
            </div>
        </div>   
    </nav>
);
Navbar.getInitialProps = async () => ({
    namespacesRequired: ['common'],
})

Navbar.propTypes = {
    t: PropTypes.func.isRequired,
}

export default withTranslation('common')(Navbar)
