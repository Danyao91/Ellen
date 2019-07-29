import Layout from '../components/layout';

const work = () => (
    <Layout>
        <div class="container">
            <div class="row">
            <div class="col-sm-8">
                <h2>Work in Canada</h2>
                <img src="/static/work.jpg" className="d-block w-100" alt="visit" />
                <h5></h5>
                <h4>Work Permit includes：</h4>
                    <li>Post-graduation Work Permit: applicant may apply after graduating from Canadian college or university.</li>
                    <li>Spouse Work Permit: applicant may apply if the spouse is holding a valid study permit or work permit. Conditions apply.</li>
                    <li>LMIA Work Permit: employer may apply for a LMIA which strict the employer and location, then applicant may apply for a LMIA Work Permit.</li>
                    <li>LMIA-Exempt Work Permit: issued to professionals in NAFTA or GATS, investors, visiting professors, charity and religious workers, etc.</li>
            </div>
                <div class="col-sm-3">
                    <h3>Service</h3>
                    <div class="list-group">
                        <a href="/visit" role="button" type="button" class="list-group-item list-group-item-action">
                            Visit Canada
                        </a>
                        <a href="/immigration" role="button" type="button" class="list-group-item list-group-item-action">Immigrate to Canada</a>
                        <a href="/work" role="button" type="button" class="list-group-item list-group-item-action active">Work in Canada</a>
                        <a href="/study" role="button" type="button" class="list-group-item list-group-item-action">Study in Canada</a>
                        <a href="/other" role="button" type="button" class="list-group-item list-group-item-action">Other Applications</a>
                    </div>
                </div>
            </div>
        </div>
    </Layout>
);

export default work;