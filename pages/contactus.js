import Layout from '../components/layout';
import PropTypes from 'prop-types'

import { i18n, withTranslation } from '../i18n'
import { callbackify } from 'util';

// const sendMessage = () => {
//     // document.getElementById('try').addEventListener("click", () => {
//         var xmlHttp = new XMLHttpRequest();
//         const theUrl = "https://api.telegram.org/bot927664956:AAEqWfwRCXoI_mnBXrwGzH5AXySoQoOVeFg/sendMessage?chat_id=@cuiziangchannel&text=name: "
//             + document.querySelector("#name").value + "%0D%0Aemail: "
//             + document.querySelector("#email").value + "%0D%0AphoneNumber: "
//             + document.querySelector("#phone").value + "%0D%0Amessage: "
//             + document.querySelector("#exampleFormControlTextarea1").value;

//         xmlHttp.onreadystatechange = () => {
//             if (xmlHttp.readyState === 4) {
//                 callback(xmlHttp.response);         
//                 }
//               }

//         xmlHttp.open("GET", theUrl, true); // false for synchronous request
//         xmlHttp.send();

//         document.querySelector("#name").value = "";
//         document.querySelector("#email").value = "";
//         document.querySelector("#phone").value = "";
//         document.querySelector("#exampleFormControlTextarea1").value = "";
//     // });
// }

// const callback = () => {
//     alert("Message has been successfully sent. Please wait for the response patiently. Thanks!");
// }

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
                                <h1></h1>
                                <div id="map-container-google-12" className="map-container-7" style={{ height: 200 + 'px' }}>
                                    <iframe src="https://maps.google.com/maps?q=1509%20merivale%20rd&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0"
                                        style={{ border: 0, allowfullscreen: true }} ></iframe>
                                </div>
                                <ul>1509 merivale Road, Ottawa</ul>
                                <ul> Ontario, Canada, K2G 3J3</ul>
                            </div>
                            <div className="col-sm-4">
                                <h4 className="text-danger">{t('contactInfo')}</h4>
                                <img src="/static/wechat.jpg" className="d-block w-100" height="280" width="70" />
                                <ul>{t('email')}</ul>
                                <ul>{t('tel')}</ul>
                                <ul>{t('wechat')}</ul>
                                <ul>{t('qr')}</ul>
                            </div>
                            <div className="col-sm-4">
                                <h4 className="text-danger">{t('reach')}</h4>
                                <img src="/static/official.jpg" className="d-block w-100" height="280" width="70" />
                                {/* <form>
                                    <div className="form-group">
                                        <label htmlFor="name">{t('Cname')}</label>
                                        <input type="name" className="form-control" id="name" />
                                        <label htmlFor="email">{t('Email')}</label>
                                        <input type="email" className="form-control" id="email" />
                                        <label htmlFor="phone">{t('phone')}</label>
                                        <input type="phone" className="form-control" id="phone" />
                                        <label htmlFor="exampleFormControlTextarea1">{t('message')}</label>
                                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                    </div>
                                    <a onClick={sendMessage} className="btn btn-default text-white bg-dark float-right" id="try">{t('send')}</a>
                                </form> */}
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