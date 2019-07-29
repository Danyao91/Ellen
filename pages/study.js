import Layout from '../components/layout';

const study = () => (
    <Layout>
        <div class="container">
            <div class="row">
            <div class="col-sm-8">
                <h2>Study in Canada</h2>
                <img src="/static/study.jpeg" className="d-block w-100" alt="visit" height="400"/>
                <h4>Study Permit includes：</h4>
                    <li>Regular Study Permit.</li>
                    <li>SDS Study Permit: applicant may provide less documents with sooner process, must purchase $10,000 GIC prior to application.</li>
                    <li>Study permit with valid visit visa: special program for visitor visa holder, with a much lower refusal rate.</li>
                <h5></h5>
                <h5>School Application - No service charge</h5>
                <li>We help student to apply for college, university, primary/secondary school with no service charge. Student pays for the application fees to school only.</li>
            </div>
                <div class="col-sm-3">
                    <h3>Service</h3>
                    <div class="list-group">
                        <a href="/visit" role="button" type="button" class="list-group-item list-group-item-action">
                            Visit Canada
                        </a>
                        <a href="/immigration" role="button" type="button" class="list-group-item list-group-item-action">Immigrate to Canada</a>
                        <a href="/work" role="button" type="button" class="list-group-item list-group-item-action">Work in Canada</a>
                        <a href="/study" role="button" type="button" class="list-group-item list-group-item-action active">Study in Canada</a>
                        <a href="/other" role="button" type="button" class="list-group-item list-group-item-action">Other Applications</a>
                    </div>
                </div>
            </div>
        </div>
    </Layout>
);

export default study;