import Layout from '../components/layout';
import PropTypes from 'prop-types'

import { i18n, withTranslation } from '../i18n'

const immigration = ({ t }) => (
    <Layout>
        <div className="container">
            <div className="row">
            <div className="col-sm-8">
                <h2>{t('immigration')}</h2>
                <img src="/static/immigration.jpg" className="d-block w-100" alt="visit" />
                <h5></h5>
                <h5 className="text-justify">{t('detail#immigration')}</h5>
                <h4>{t('general#immigration')}</h4>
                    <li>{t('immigration-1')}</li>
                    <li>{t('immigration-2')}</li>
                    <li>{t('immigration-3')}</li>
                    <li>{t('immigration-4')}</li>
                    <li>{t('immigration-5')}</li>
                    <li>{t('immigration-6')}</li>
                    <li>{t('immigration-7')}</li>
            </div>
                <div className="col-sm-3">
                    <h3>{t('service')}</h3>
                    <div className="list-group">
                        <a href="/visit" role="button" type="button" className="list-group-item list-group-item-action">
                        {t('visit')}
                        </a>
                        <a href="/immigration" role="button" type="button" className="list-group-item list-group-item-action active">{t('immigration')}</a>
                        <a href="/work" role="button" type="button" className="list-group-item list-group-item-action">{t('work')}</a>
                        <a href="/study" role="button" type="button" className="list-group-item list-group-item-action">{t('study')}</a>
                        <a href="/other" role="button" type="button" className="list-group-item list-group-item-action">{t('other')}</a>
                    </div>
                </div>
            </div>
        </div>
    </Layout>
);
immigration.getInitialProps = async () => ({
    namespacesRequired: ['common'],
})

immigration.propTypes = {
    t: PropTypes.func.isRequired,
}

export default withTranslation('common')(immigration)