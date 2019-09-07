import React from 'react'
import PropTypes from 'prop-types'

// This is our initialised `NextI18Next` instance

import { i18n, withTranslation } from '../i18n'

const Footer = ({ t }) => (
  // <div className="bg-light text-dark" id="main-footer">
  <footer className="bg-light text-dark page-footer font-small grey pt-4 fixed-bottom" id="main-footer">
      <div className="container text-center text-md-left">
        <div className="row">
          <div className="col-md-6 mt-md-0 mt-3">
            <h5 className="text-uppercase">{t('name')}</h5>
            {/* <p>Here you can use rows and columns to organize your footer content.</p> */}
          </div>
          <div className="col-md-3 mb-md-0 mb-3">
            <h5 className="text-uppercase">{t('location')}</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#!">1509 merivale Road</a>
              </li>
            </ul>
          </div>
          <div className="col-md-3 mb-md-0 mb-3">
            <h5 className="text-uppercase">{t('contact')}</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#!">{t('tel')}</a>
              </li>
              <li>
                <a href="#!">{t('email')}</a>
              </li>
              <li>
                <a href="#!">{t('wechat')}</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* <div className="footer-copyright text-center py-3">© 2019 Copyright
      </div> */}
    </footer>
  // </div>
);

Footer.getInitialProps = async () => ({
  namespacesRequired: ['common'],
})

Footer.propTypes = {
  t: PropTypes.func.isRequired,
}

export default withTranslation('common')(Footer)