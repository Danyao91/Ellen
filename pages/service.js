import Layout from '../components/layout';

const service = () => (
    <Layout>
        <div class="container">
            <div class="row">
                <div class="col-sm-3">
                    <h3>Service</h3>
                    <div class="list-group">
                        <a href="/visit" role="button" type="button" class="list-group-item list-group-item-action">
                            Visit Canada
                        </a>
                        <a href="/immigration" role="button" type="button" class="list-group-item list-group-item-action">Immigrate to Canada</a>
                        <a href="/work" role="button" type="button" class="list-group-item list-group-item-action">Work in Canada</a>
                        <a href="/study" role="button" type="button" class="list-group-item list-group-item-action">Study in Canada</a>
                        <a href="/other" role="button" type="button" class="list-group-item list-group-item-action">Other Applications</a>
                    </div>
                </div>
            </div>
        </div>
    </Layout>
);

export default service;