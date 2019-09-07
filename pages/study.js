import Layout from '../components/layout';
import React from 'react'
import PropTypes from 'prop-types'

import { i18n, withTranslation } from '../i18n'

const study = ({ t }) => (
    <Layout>
        <div className="container">
            <div className="row">
            <div className="col-sm-8">
            <h2 className="card-title text-dark">{t('study')}</h2>
            <div className="card">
            <img className="card-img-top" src="/static/study.jpeg" alt="Card image cap" height="300"/> 
              <div className="card-body">
                <h4 className="title-name">{t('general#study')}</h4>
                    <li>{t('study-1')}</li>
                    <li>{t('study-2')}</li>
                    <li>{t('study-3')}</li>
                    <h5></h5>
                <h5 className="title-name">{t('school')}</h5>
                <li>{t('school-1')}</li>
                </div>
                </div>
            </div>
            <div className="col-sm-4">
            <h3 className="card-title text-dark">{t('scan')}</h3>
                {/* <div className="col-sm-3">
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

study.getInitialProps = async () => ({
    namespacesRequired: ['common'],
})

study.propTypes = {
    t: PropTypes.func.isRequired,
}

export default withTranslation('common')(study)