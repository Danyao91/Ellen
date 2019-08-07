import Layout from '../components/layout';
import PropTypes from 'prop-types'
import React from 'react'
import { i18n, withTranslation } from '../i18n'

const Homepage = ({ t }) => (
    <React.Fragment>
      <main>
        <Layout>
          <div className="row">
            <div className ="col-sm-6">
              <div className="card"> 
                <img className="card-img-top" src="/static/card2.jpeg" alt="Card image cap" height="300"/>
                <div className="card-body">
                  <h3 className="card-title text-dark">{t('name')}</h3>
                  <p className="card-text text-justify">{t('mainContent')}</p>
                  {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                </div>
              </div>
            </div>
          <h5></h5>
          <div className ="col-sm-6">
            <div className="card">
            <img className="card-img-top" src="/static/card1.jpg" alt="Card image cap" height="300"/> 
              <div className="card-body">
                <h3 className="card-title text-dark">{t('consultant')}</h3>
                <p className="card-text text-justify">{t('consultantContent-1')}</p>
                  <ul>
                    <li>{t('consultant-1')}</li>
                    <li>{t('consultant-2')}</li>
                    <li>{t('consultant-3')}</li>
                    <li>{t('consultant-4')}</li>
                    <li>{t('consultant-5')}</li>
                    <li>{t('consultant-6')}</li>
                    <li>{t('consultant-7')}</li>
                  </ul>
                  <p className="card-text">{t('consultantContent-2')}</p>
                  <ul>
                    <li>{t('consultant-8')}</li>
                    <li>{t('consultant-9')}</li>
                    <li>{t('consultant-10')}</li>
                  </ul>
                {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                </div>
              </div>
            </div>
          </div>
          {/* <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner">
                <div className="carousel-item active">
                <img src="/static/picture1.jpg" className="d-block w-100" alt="visit" width="1100" height="650"/>
                </div>
                <div className="carousel-item">
                <img src="/static/picture2.jpg" className="d-block w-100" alt="study" width="1100" height="650"/>
                </div>
                <div className="carousel-item">
                <img src="static/picture3.jpg" className="d-block w-100" alt="work" width="1100" height="650"/>
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
        </div> */}
        </Layout>
      </main>
    </React.Fragment>
  )
  
  Homepage.getInitialProps = async () => ({
    namespacesRequired: ['common'],
  })

  Homepage.propTypes = {
    t: PropTypes.func.isRequired,
  }

  export default withTranslation('common')(Homepage)

// class Homepage extends React.Component {
//     // static async getInitialProps() {
//     //   return {
//     //     namespacesRequired: ['common'],
//     //   }
//     // }
  
//     render() {
//       return (
//         <>
//           <Layout />
//         <div>
//         <div>{this.props.t("title")}</div>
//           <button
//             onClick={() => i18n.changeLanguage(i18n.language === 'en' ? 'chn' : 'en')}
//           >
//             Change locale
//           </button> </div> 
//           </>
//         <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
//             <ol className="carousel-indicators">
//                 <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
//                 <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
//                 <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
//             </ol>
//             <div className="carousel-inner">
//                 <div className="carousel-item active">
//                 <img src="/static/picture1.jpg" className="d-block w-100" alt="visit" width="1100" height="650"/>
//                 </div>
//                 <div className="carousel-item">
//                 <img src="/static/picture2.jpg" className="d-block w-100" alt="study" width="1100" height="650"/>
//                 </div>
//                 <div className="carousel-item">
//                 <img src="static/picture3.jpg" className="d-block w-100" alt="work" width="1100" height="650"/>
//                 </div>
//             </div>
//             <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
//                 <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//                 <span className="sr-only">Previous</span>
//             </a>
//             <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
//                 <span className="carousel-control-next-icon" aria-hidden="true"></span>
//                 <span className="sr-only">Next</span>
//             </a>
//         </div>
//       )
//     }
//   }
  

