import Layout from '../components/layout';

const visit = () => (
    <Layout>
        <div className="container">
            <div className="row">
            <div className="col-sm-8">
                <h2>Visit Canada</h2>
                <img src="/static/visit.jpg" className="d-block w-100" alt="visit" height="400"/>
                <h5></h5>
                <h4>Visitor Visa includes:</h4>
                    <li>Visitor Visa for Tourism: expiring on the passport's expiry date, visa holder may stay up to 6 months on each entry.</li>
                    <li>Visitor Visa for Family Visit: expiring on the passport's expiry date, visa holder may stay up to 6 months on each entry.</li>
                    <li>Super Visa: issued to the parents/ grandparents, visa holder may stay up to 24 months on each entry.</li>
                    <li>eTA: issued to applicant from a visa-exempt country.</li>
            </div>
                <div className="col-sm-3">
                    <h3>Service</h3>
                    <div className="list-group">
                        <a href="/visit" role="button" type="button" className="list-group-item list-group-item-action active">
                            Visit Canada
                        </a>
                        <a href="/immigration" role="button" type="button" className="list-group-item list-group-item-action">Immigrate to Canada</a>
                        <a href="/work" role="button" type="button" className="list-group-item list-group-item-action">Work in Canada</a>
                        <a href="/study" role="button" type="button" className="list-group-item list-group-item-action">Study in Canada</a>
                        <a href="/other" role="button" type="button" className="list-group-item list-group-item-action">Other Applications</a>
                    </div>
                </div>
            </div>
        </div>
    </Layout>
);

export default visit;