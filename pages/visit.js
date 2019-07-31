import Layout from '../components/layout';
import React from 'react'
import PropTypes from 'prop-types'

import { i18n, withTranslation } from '../i18n'

const visit = ({ t }) => (
    <Layout>
        <div className="container">
            <div className="row">
            <div className="col-sm-8">
                <h2>{t('visit')}</h2>
                <img src="/static/visit.jpg" className="d-block w-100" alt="visit" height="400"/>
                <h5></h5>
                <h5>{t('detail#visit')}</h5> 
                <h4>{t('general#visit')}</h4>
                    <li>{t('visit-1')}</li>
                    <li>{t('visit-2')}</li>
                    <li>{t('visit-3')}</li>
                    <li>{t('visit-4')}</li>
            </div>
                <div className="col-sm-3">
                    <h3>{t('service')}</h3>
                    <div className="list-group">
                        <a href="/visit" role="button" type="button" className="list-group-item list-group-item-action active">
                        {t('visit')}
                        </a>
                        <a href="/immigration" role="button" type="button" className="list-group-item list-group-item-action">{t('immigration')}</a>
                        <a href="/work" role="button" type="button" className="list-group-item list-group-item-action">{t('work')}</a>
                        <a href="/study" role="button" type="button" className="list-group-item list-group-item-action">{t('study')}</a>
                        <a href="/other" role="button" type="button" className="list-group-item list-group-item-action">{t('other')}</a>
                    </div>
                </div>
            </div>
        </div>
    </Layout>
);
visit.getInitialProps = async () => ({
    namespacesRequired: ['common'],
})

visit.propTypes = {
    t: PropTypes.func.isRequired,
}

export default withTranslation('common')(visit)
