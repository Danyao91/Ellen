import Layout from '../components/layout';
import React from 'react'
import PropTypes from 'prop-types'

import { i18n, withTranslation } from '../i18n'

const other = ({ t }) => (
    <Layout>
        <div className="container">
            <div className="row">
            <div className="col-sm-8">
                <h2>{t('other')}</h2>
                {/* <img src="/static/visit.jpg" className="d-block w-100" alt="visit" /> */}
                <h5></h5>
                <li>{t('other-1')}</li>
            </div>
                <div className="col-sm-3">
                    <h3>{t('service')}</h3>
                    <div className="list-group">
                        <a href="/visit" role="button" type="button" className="list-group-item list-group-item-action">
                        {t('visit')}
                        </a>
                        <a href="/immigration" role="button" type="button" className="list-group-item list-group-item-action">{t('immigration')}</a>
                        <a href="/work" role="button" type="button" className="list-group-item list-group-item-action">{t('work')}</a>
                        <a href="/study" role="button" type="button" className="list-group-item list-group-item-action">{t('study')}</a>
                        <a href="/other" role="button" type="button" className="list-group-item list-group-item-action active">{t('other')}</a>
                    </div>
                </div>
            </div>
        </div>
    </Layout>
);
other.getInitialProps = async () => ({
    namespacesRequired: ['common'],
})

other.propTypes = {
    t: PropTypes.func.isRequired,
}

export default withTranslation('common')(other)