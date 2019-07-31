import Layout from '../components/layout';
import React from 'react'
import PropTypes from 'prop-types'

import { i18n, withTranslation } from '../i18n'

const work = ({ t }) => (
    <Layout>
        <div className="container">
            <div className="row">
            <div className="col-sm-8">
                <h2>{t('work')}</h2>
                <img src="/static/work.jpg" className="d-block w-100" alt="visit" />
                <h5></h5>
                <h4>{t('general#work')}</h4>
                    <li>{t('work-1')}</li>
                    <li>{t('work-2')}</li>
                    <li>{t('work-3')}</li>
                    <li>{t('work-4')}</li>
            </div>
                <div className="col-sm-3">
                    <h3>{t('service')}</h3>
                    <div className="list-group">
                        <a href="/visit" role="button" type="button" className="list-group-item list-group-item-action">
                        {t('visit')}
                        </a>
                        <a href="/immigration" role="button" type="button" className="list-group-item list-group-item-action">{t('immigration')}</a>
                        <a href="/work" role="button" type="button" className="list-group-item list-group-item-action active">{t('work')}</a>
                        <a href="/study" role="button" type="button" className="list-group-item list-group-item-action">{t('study')}</a>
                        <a href="/other" role="button" type="button" className="list-group-item list-group-item-action">{t('other')}</a>
                    </div>
                </div>
            </div>
        </div>
    </Layout>
);
work.getInitialProps = async () => ({
    namespacesRequired: ['common'],
})

work.propTypes = {
    t: PropTypes.func.isRequired,
}

export default withTranslation('common')(work)