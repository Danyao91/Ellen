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
            <div className="col-sm-4">
                <h3>{t('scan')}</h3>
                {/* <div className="col-sm-3">
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
                </div> */}
                <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                            <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    </ol>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                        <img src="/static/wechat.jpg" className="d-block w-100" alt="visit" width="280" height="300"/>
                        </div>
                        <div className="carousel-item">
                        <img src="/static/official.jpg" className="d-block w-100" alt="study" width="280" height="300"/>
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
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