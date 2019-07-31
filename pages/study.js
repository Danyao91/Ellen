import Layout from '../components/layout';
import React from 'react'
import PropTypes from 'prop-types'

import { i18n, withTranslation } from '../i18n'

const study = ({ t }) => (
    <Layout>
        <div className="container">
            <div className="row">
            <div className="col-sm-8">
                <h2>{t('study')}</h2>
                <img src="/static/study.jpeg" className="d-block w-100" alt="visit" height="400"/>
                <h4>{t('general#study')}</h4>
                    <li>{t('study-1')}</li>
                    <li>{t('study-2')}</li>
                    <li>{t('study-3')}</li>
                    <h5></h5>
                <h5>{t('school')}</h5>
                <li>{t('school-1')}</li>
            </div>
                <div className="col-sm-3">
                    <h3>{t('service')}</h3>
                    <div className="list-group">
                        <a href="/visit" role="button" type="button" className="list-group-item list-group-item-action">
                        {t('visit')}
                        </a>
                        <a href="/immigration" role="button" type="button" className="list-group-item list-group-item-action">{t('immigration')}</a>
                        <a href="/work" role="button" type="button" className="list-group-item list-group-item-action">{t('work')}</a>
                        <a href="/study" role="button" type="button" className="list-group-item list-group-item-action active">{t('study')}</a>
                        <a href="/other" role="button" type="button" className="list-group-item list-group-item-action">{t('other')}</a>
                    </div>
                </div>
            </div>
        </div>
    </Layout>
);

study.getInitialProps = async () => ({
    namespacesRequired: ['common'],
})

study.propTypes = {
    t: PropTypes.func.isRequired,
}

export default withTranslation('common')(study)