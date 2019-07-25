import Fetch from 'isomorphic-unfetch';
import Layout from '../components/layout';

const Home = () => (
    <Layout>
        <div>
            <h1>EllenSun Immigration Corp.</h1>
            {props.bpi.time.updated}
        </div>
    </Layout>
);

Index.getInitialProps = async function() {
    const res = await fetch
    ('https://api.coindesk.com/vi/bpi/currentprice.json');
    const data = await res.json();
    
    return {
        bpi: data
    }
}
  
  export default Home;