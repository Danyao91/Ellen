import Layout from '../components/layout';

const immigration = () => (
    <Layout>
        <div className="container">
            <div className="row">
            <div className="col-sm-8">
                <h2>Immigration to Canada</h2>
                <img src="/static/immigration.jpg" className="d-block w-100" alt="visit" />
                <h5></h5>
                <h4>Immigration Programs include:</h4>
                    <li>Express Entry: applicant gets a score based on the age, education level, work experience and language level. IRCC will invite the applicant to apply for immigration from the top scores.</li>
                    <li>Provincial Nominee Programs: extra programs designed by each province to help nominees to acquire work permit and permanent residence.</li>
                    <li>Family Sponsorship: Canadian citizen or permanent resident may sponsor their spouse, children, parents or grandparents to immigrate to Canada.</li>
                    <li>Entrepreneur stream: applicant may invest a certain amount to Canada to acquire work permit and permanent residence.</li>
                    <li>Self-Employed stream: applicant who is active in cultural activities may apply to immigrate to Canada, such as world class artist or athlete.</li>
                    <li>Humanitarian & compassionate grounds: applicant who has specific situation that best to stay in Canada. This is a case-by-case ground.</li>
                    <li>Refugee: Canada helps with the refugee protection and settlement.</li>
            </div>
                <div className="col-sm-3">
                    <h3>Service</h3>
                    <div className="list-group">
                        <a href="/visit" role="button" type="button" className="list-group-item list-group-item-action">
                            Visit Canada
                        </a>
                        <a href="/immigration" role="button" type="button" className="list-group-item list-group-item-action active">Immigrate to Canada</a>
                        <a href="/work" role="button" type="button" className="list-group-item list-group-item-action">Work in Canada</a>
                        <a href="/study" role="button" type="button" className="list-group-item list-group-item-action">Study in Canada</a>
                        <a href="/other" role="button" type="button" className="list-group-item list-group-item-action">Other Applications</a>
                    </div>
                </div>
            </div>
        </div>
    </Layout>
);

export default immigration;