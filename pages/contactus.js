import Layout from '../components/layout';

const contact = () => (
    <Layout>
            <div className="container">

            <h2 class="section-heading h1">Contact us</h2>
                <h1></h1>
            <div className="card" >

                <div className="card-body">
        <div className="container">
            <div className="row">
                <div className="col-sm-4">
                    <h4 className='text-danger'>Location: </h4>
                    <ul>95 Splinter Crescent, Ottawa</ul>
                    <ul> Ontario, Canada, K2T 0H7</ul> 
                    <div id="map-container-google-12" className="map-container-7" style={{height: 200 + 'px'}}>
                        <iframe src="https://maps.google.com/maps?q=Miami&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0"
                        style={{border:0, allowfullscreen:true}} ></iframe>
                    </div>
                </div>
                <div className="col-sm-4">
                    <h4 className="text-danger">contact info: </h4>
                    <ul>Email: Ellen25sun@gmail.com </ul>
                    <ul>Tel: +1 (613) 261-3579 </ul>
                    <ul>wechat: Canada613health </ul>
                    <ul>QR Code: </ul>
                    <img src="/static/qr_code.jpeg" className="d-block w-100" height="300" width="80"/>
                </div>
                <div className="col-sm-4">
                    <h4 className="text-danger">REACH US TODAY!</h4>
                        <form>
                    <div className="form-group">
                        <label for="name">Name:</label>
                        <input type="name" className="form-control" id="name" placeholder="Enter name" />
                        <label for="email">Email:</label>
                        <input type="email" className="form-control" id="email" placeholder="Enter email" />
                        <label for="phone">Phone number:</label>
                        <input type="phone" className="form-control" id="phone" placeholder="Enter phone number" />
                        <label for="exampleFormControlTextarea1">Message:</label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" placeholder="Enter message" rows="3"></textarea>
                    </div>
                    <button type="submit" className="btn btn-default text-white bg-dark float-right">Send Email</button>
                    </form>
                </div>
            </div>
        </div>
                <div className="column">

                </div>
 
             </div>
            </div>

            </div>
        {/* <div className ="container">
            <h2>REACH US TODAY!</h2>
            <form>
                <div className="form-group col-sm-8">
                    <label for="name">Name:</label>
                    <input type="name" className="form-control" id="name" placeholder="Enter name" />
                    <label for="email">Email:</label>
                    <input type="email" className="form-control" id="email" placeholder="Enter email" />
                    <div className="form-group">
                    <label for="phone">Phone number:</label>
                    <input type="phone" className="form-control" id="phone" placeholder="Enter phone number" />
                    <label for="exampleFormControlTextarea1">Message:</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" placeholder="Enter message" rows="3"></textarea>
                </div>
                <button type="submit" className="btn btn-default text-white bg-dark">Send Email</button>
                </div>
            </form>
        </div> */}
    </Layout>
);

export default contact;