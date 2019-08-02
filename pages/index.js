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
                  <h5 className="card-title">{t('name')}</h5>
                  <p className="card-text">EllenSun Immigration Corp. is a federally incorporated professional immigration consulting company, focused on consulting services for potential candidates who wish to visit, study, work, or immigrate to Canada. We have successfully helped many clients to get their temporary or permanent resident status in the past years. With the head office in Ottawa Ontario, we have built a great reputation in Immigration Consulting field for our professionalism and responsibility.
    Ms. Ellen Sun, the corporation founder, is a Regulated Canadian Immigration Consultant (RCIC) # R531517 with good standing in Immigration Consultants of Canada Regulatory Council (ICCRC), also she is a gold member # R19093 of Canadian Association of Professional Immigration Consultants (CAPIC). She was graduated from Immigration Laws, Policies and Procedures certificate program of University of British Columbia. Ms. Ellen Sun has extensively studied Canadian immigration laws and regulations, and she has always strictly followed the complicated immigration procedures, helping the clients to choose the most appropriate immigration programs. </p>
                  {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                </div>
              </div>
            </div>
          <h5></h5>
          <div className ="col-sm-6">
            <div className="card">
            <img className="card-img-top" src="/static/card1.jpg" alt="Card image cap" height="300"/> 
              <div className="card-body">
                <h5 className="card-title">Regulated Canadian Immigration Consultant</h5>
                <p className="card-text">ICCRC’s federal mandate stems from the Immigration and Refugee Protection Act (IRPA) and the Citizenship Act which require anyone providing Canadian immigration or citizenship advice or representation for a fee or other consideration to be a member in good standing of ICCRC. Exceptions are members in good standing of a law society in Canada or the Chambre des notaires du Québec.
  To become an RCIC, the candidate must:</p>
                  <ul>
                    <li>{t('consultant-1')}</li>
                    <li>{t('consultant-2')}</li>
                    <li>{t('consultant-3')}</li>
                    <li>{t('consultant-4')}</li>
                    <li>{t('consultant-5')}</li>
                    <li>{t('consultant-6')}</li>
                    <li>{t('consultant-7')}</li>
                  </ul>
                  <p className="card-text">As being an RCIC, the member must:</p>
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
  

