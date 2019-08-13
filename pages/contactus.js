import Layout from '../components/layout';
import PropTypes from 'prop-types'

import { i18n, withTranslation } from '../i18n'
import axios from 'axios';

const contact = ({ t }) => (
    <Layout>
            <div className="container">

            <h2 className="section-heading h1">{t('contact')}</h2>
                <h1></h1>
            <div className="card" >

                <div className="card-body">
        <div className="container">
            <div className="row">
                <div className="col-sm-4">
                    <h4 className='text-danger'>{t('location')}:</h4>
                    <ul>95 Splinter Crescent, Ottawa</ul>
                    <ul> Ontario, Canada, K2T 0H7</ul> 
                    <div id="map-container-google-12" className="map-container-7" style={{height: 200 + 'px'}}>
                        <iframe src="https://maps.google.com/maps?q=Miami&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0"
                        style={{border:0, allowfullscreen:true}} ></iframe>
                    </div>
                </div>
                <div className="col-sm-4">
                    <h4 className="text-danger">{t('contactInfo')}</h4>
                    <ul>{t('email')}</ul>
                    <ul>{t('tel')}</ul>
                    <ul>{t('wechat')}</ul>
                    <ul>{t('qr')}</ul>
                    <img src="/static/qr_code.jpeg" className="d-block w-100" height="300" width="80"/>
                </div>
                <div className="col-sm-4">
                    <h4 className="text-danger">{t('reach')}</h4>
                        <form>
                    <div className="form-group">
                        <label htmlFor="name">{t('Cname')}</label>
                        <input type="name" className="form-control" id="name" placeholder={t('Ename')}/>
                        <label htmlFor="email">{t('Email')}</label>
                        <input type="email" className="form-control" id="email" placeholder={t('Eemail')} />
                        <label htmlFor="phone">{t('phone')}</label>
                        <input type="phone" className="form-control" id="phone" placeholder={t('Ephone')} />
                        <label htmlFor="exampleFormControlTextarea1">{t('message')}</label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" placeholder={t('Emessage')} rows="3"></textarea>
                    </div>
                    <button type="submit" className="btn btn-default text-white bg-dark float-right" onClick="sendMessage();return false;">{t('send')}</button>
                    </form>
                </div>
            </div>
        </div>
                <div className="column">

                </div>
 
             </div>
            </div>

            </div>
    </Layout>
);

// axios.get(`https://api.telegram.org/bot927664956:AAEqWfwRCXoI_mnBXrwGzH5AXySoQoOVeFg/sendMessage?chat_id=@cuiziangchannel&text=123`)
// .then(res => {
//     console.log(res)
// });

contact.getInitialProps = async () => ({
    namespacesRequired: ['common'],
})

contact.propTypes = {
    t: PropTypes.func.isRequired,
}

export default withTranslation('common')(contact)