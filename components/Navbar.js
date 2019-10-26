import Link from 'next/link';
import React from 'react'
import PropTypes from 'prop-types'

import { i18n, withTranslation } from '../i18n'

const Navbar = ({ t }) => (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark" id="main-top-nav">
        <a className="navbar-brand" href="#">{t('name')}</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
                <Link href="/"><a className="nav-link">{t('home')}</a></Link>
                <Link href="/visit"><a className="nav-link ">{t('visit-N')}</a></Link>
                <Link href="/immigration"><a className="nav-link ">{t('immigration-N')}</a></Link>
                <Link href="/work"><a className="nav-link ">{t('work-N')}</a></Link>
                <Link href="/study"><a className="nav-link ">{t('study-N')}</a></Link>
                <Link href="/other"><a className="nav-link ">{t('other-N')}</a></Link>
                <Link href="/contactus"><a className="nav-link ">{t('contact')}</a></Link>
                <li className="nav-item">
                    <a className="nav-link" onClick={() => i18n.changeLanguage(i18n.language === 'en' ? 'zh' : 'en')}>{t('change-locale')}</a>
                </li>
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
