import React from "react";
import { Link } from 'gatsby'
import { navigateTo } from "gatsby-link";
import Layout from '../../components/Layout'
import { cdn_img_thumbnail,contact_email } from '../../utils'

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

export default class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isValidated: false,
      p_model: '',
      p_img: cdn_img_thumbnail,
      from_url: '',
      sending: false,
      showThanks: false
    };
  }
  componentDidMount() {
    let obj={}
    let model = localStorage.getItem('model')
    if(model){
      obj.p_model = model;
    }
    let from_url = localStorage.getItem("from_url")
    if(from_url){
      obj.from_url = from_url;
    }
    let p_img = localStorage.getItem("p_img")
    if(p_img){
      obj.p_img = p_img;
    }
    this.setState(obj)
    document.getElementById("name").focus();
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    this.setState({ sending: true });
    var _this = this
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...this.state
      })
    })
    .then(() => {
      _this.setState({ 
        sending: false,
        showThanks: true
       });
       document.documentElement.scrollTop += 300
      // navigateTo(form.getAttribute("action"));
    })
    .catch(error => alert(error));
  };

  render() {
    return (
      <Layout>
        <section className="section">
          <div className="container-fluid">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb bg-white my-2">
                <li className="breadcrumb-item">
                  <Link to="/">
                    Home
                  </Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">Contact</li>
              </ol>
            </nav>
            <div className="content p-3 bg-white">
              <h1 className="h4">Contact us & Inquiry <span className="text-danger">(MOQ:300)</span></h1>
              <div className="row">
                <div className="col-md-6">
                  <form
                    name="contact"
                    method="post"
                    action="/contact/thanks/?no-cache=1"
                    data-netlify="true"
                    data-netlify-honeypot="bot-field"
                    onSubmit={this.handleSubmit}
                    className="contact-us"
                  >
                    {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
                    <input type="hidden" name="form-name" value="contact" />
                    <div hidden>
                      <label>
                        Don’t fill this out:{" "}
                        <input name="bot-field" onChange={this.handleChange} />
                      </label>
                    </div>
                    <div className="field form-group mb-1">
                      <label className="label" htmlFor={"name"} >Your name</label>
                      <div className="control">
                        <input className="input form-control" type={"text"} name={"name"} onChange={this.handleChange} id={"name"} required={true} />
                      </div>
                    </div>
                    <div className="field form-group mb-1">
                      <label className="label" htmlFor={"email"}>Email</label>
                        <div className="control">
                          <input className="input form-control" type={"email"} name={"email"} onChange={this.handleChange} id={"email"} required={true} />
                        </div>
                    </div>
                    <div className="field form-group mb-1">
                      <label className="label" htmlFor={"p_model"}>Product model</label>
                        <div className="control">
                          <input className="input form-control" value={this.state.p_model} placeholder="The product you want to buy" type={"text"} name={"p_model"} onChange={this.handleChange} id={"p_model"} required={true} />
                        </div>
                    </div>
                    <div className="field form-group mb-1">
                      <label className="label" htmlFor={"p_quantity"}>Product quantity</label>
                        <div className="control">
                          <input className="input form-control" placeholder="MOQ:300" type={"text"} name={"p_quantity"} onChange={this.handleChange} id={"p_quantity"} required={true} />
                        </div>
                    </div>
                    <div className="field form-group mb-1">
                      <label className="label" htmlFor={"message"}>Message</label>
                      <div className="control">
                        <textarea className="textarea form-control message-detail" placeholder="Please tell us product details and your requirements" name={"message"} onChange={this.handleChange} id={"message"} required={true} />
                      </div>
                    </div>
                    <div className="field form-group mb-1 d-none">
                      <label className="label" htmlFor={"from_url"}>From url</label>
                      <div className="control">
                        <input className="input form-control" value={this.state.from_url}  type={"text"} name={"from_url"} onChange={this.handleChange} id={"from_url"} required={false} />
                      </div>
                    </div>
                    <div className="field form-group">
                      <button className="button btn btn-danger btn-lg is-link" type="submit">{this.state.sending?'Processing':'Send'}</button>
                    </div>
                  </form>
                  {this.state.showThanks &&(
                    <div className="mt-1 p-3 bg-light rounded shadow-lg">
                      <div className="content">
                          <h4>Thank you!</h4>
                          <p className="mb-1">Email had been sent to <span className="font-weight-bold">{contact_email || 'seller006@joinplastic.com'}</span></p>
                          <p>We will check the email and come back to you as soon as possible!</p>
                          <button type="button" onClick={()=>window.history.go(-1)} class="btn btn-danger mr-3">Back to product</button>
                          <button type="button" onClick={()=>navigateTo('/')} class="btn btn-outline-danger">Back To Homepage</button>
                      </div>
                    </div>
                  )}
                </div>
                <div className="col-md-6">
                  <div className="row py-2 border mx-0 my-1">
                    <div className="col-sm-4 text-center">
                      <img className="img-fluid" src={this.state.p_img} />
                    </div>
                    <div className="col-sm-8">
                      <h6>Product model: {this.state.p_model}</h6>
                      <p>Lead time: 7~15 working days</p>
                      <p>Payment method:  T/T, L/C at sight and Paypal for sample</p>
                    </div>
                  </div>
                  <h5>Our location:</h5>
                  <div className="alert alert-secondary" role="alert">
                    <p className="mb-0">Room 1405, No.28 Moyu Road</p>
                    <p className="mb-0">Anting county,Jiading District, Shanghai, China</p>
                  </div>
                  
                  <h5>Call us: </h5>
                  <div className="alert alert-secondary" role="alert">
                    <p className="mb-0">(+86)021-59117621</p>
                    <p className="mb-0">(+86)18217103917</p>
                  </div>
                  
                  
                  <h5>Email: </h5>
                  <p>
                    <a className="btn btn-secondary" href={`mailto:${contact_email}?subject=Inquiry about your plastic crate`}>{contact_email}</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}