import Layout from '../components/layout';

const Home = () => (
    <Layout>
        {/* <div>
            <h1>EllenSun Immigration Corp.</h1>
        </div> */}
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner">
                <div className="carousel-item active">
                <img src="/static/picture1.jpg" className="d-block w-100" alt="visit" width="1100" height="650"/>
                </div>
                <div className="carousel-item">
                <img src="/static/picture2.jpg" classNameName="d-block w-100" alt="study" width="1100" height="650"/>
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
        </div>
    </Layout>
);

export default Home;