import Link from 'next/link';
import React from 'react'
import PropTypes from 'prop-types'

import { i18n, withTranslation } from '../i18n'

const Navbar = ({ t }) => (
    <nav className="navbar navbar-expand navbar-dark bg-dark mb-4">
        <div className="container">
            <a className="navbar-brand" href="#">{t('name')}</a>
            <div className="collapse navbar-collapse">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <Link href="/"><a
                        className="nav-link">{t('home')}</a></Link>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        {t('service')}
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a className="dropdown-item" href="/visit">{t('visit')}</a>
                            <a className="dropdown-item" href="/immigration">{t('immigration')}</a>
                            <a className="dropdown-item" href="/work">{t('work')}</a>
                            <a className="dropdown-item" href="/study">{t('study')}</a>
                            <a className="dropdown-item" href="/other">{t('other')}</a>
                        </div>
                    </li>
                    <li className="nav-item">
                        <Link href="/contactus"><a
                        className="nav-link ">{t('contact')}</a></Link>
                    </li>
                    <li className="nav-item"
                        onClick={() => i18n.changeLanguage(i18n.language === 'en' ? 'zh' : 'en')}
                    >
                        <a className="nav-link ">{t('change-locale')}</a>
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
