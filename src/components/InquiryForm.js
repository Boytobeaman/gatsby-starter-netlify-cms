import React from "react";
import { 
  cdn_img_thumbnail,
  contact_email,
  inquiry_handle_base_url,
  inquiry_handle_app_name,
  inquiry_handle_inquiry_url,
  inquiry_handle_email_url
} from '../utils'

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

export default class InquiryForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isValidated: false,
      product_model: '',
      product_quantity: '',
      p_img: cdn_img_thumbnail,
      from_url: '',
      sending: false,
      showThanks: false,
      to_email: contact_email
    };
  }
  componentDidMount() {
    let obj={}
    let model = localStorage.getItem('model')
    if(model){
      obj.product_model = model;
    }
    let from_url = localStorage.getItem("from_url") || window.location.href
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
    fetch(`${inquiry_handle_base_url}${inquiry_handle_app_name}${inquiry_handle_email_url}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
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
      console.log(`send email successfully to ${contact_email}`)
    })
    .catch(error => alert(error));

    fetch(`${inquiry_handle_base_url}${inquiry_handle_app_name}${inquiry_handle_inquiry_url}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        "form-name": form.getAttribute("name"),
        ...this.state
      })
    })
    .then(() => {
      console.log(`saved in handle inquiry database`)
    })
    .catch(error => console.log(error));
  };

  render() {
    return (
      <div className="">
        <div className="content bg-white">
          <div className="row border mx-0 my-2">
            <div className="col-sm-4 text-center">
              <img className="img-fluid" src={this.state.p_img} />
            </div>
            <div className="col-sm-8">
              <h6>Product model: {this.state.product_model}</h6>
              <p className="mb-0">Lead time: 7~15 working days</p>
              <p>Payment method:  T/T, L/C at sight and Paypal for sample</p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
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
                <div className="row">
                  <div className="field form-group mb-1 col-sm-6">
                    <label className="label" htmlFor={"name"} >Your name</label>
                    <div className="control">
                      <input className="input form-control" type={"text"} name={"name"} onChange={this.handleChange} id={"name"} required={true} />
                    </div>
                  </div>
                  <div className="field form-group mb-1 col-sm-6">
                    <label className="label" htmlFor={"email"}>Email</label>
                      <div className="control">
                        <input className="input form-control" type={"email"} name={"email"} onChange={this.handleChange} id={"email"} required={true} />
                      </div>
                  </div>
                  <div className="field form-group mb-1 col-sm-6">
                    <label className="label" htmlFor={"product_model"}>Product model</label>
                      <div className="control">
                        <input className="input form-control" value={this.state.product_model} placeholder="The product you want to buy" type={"text"} name={"product_model"} onChange={this.handleChange} id={"product_model"} required={true} />
                      </div>
                  </div>
                  <div className="field form-group mb-1 col-sm-6">
                    <label className="label" htmlFor={"product_quantity"}>Product quantity</label>
                      <div className="control">
                        <input className="input form-control" placeholder="" type={"text"} name={"product_quantity"} onChange={this.handleChange} id={"product_quantity"} required={true} />
                      </div>
                  </div>
                  <div className="field form-group mb-1 col-sm-12">
                    <label className="label" htmlFor={"message"}>Message</label>
                    <div className="control">
                      <textarea className="textarea form-control message-detail" placeholder="Please tell us product details and your requirements" name={"message"} onChange={this.handleChange} id={"message"} required={true} />
                    </div>
                  </div>
                </div>
                <div className="field form-group mb-1 d-none">
                  <label className="label" htmlFor={"from_url"}>From url</label>
                  <div className="control">
                    <input className="input form-control" value={this.state.from_url}  type={"text"} name={"from_url"} onChange={this.handleChange} id={"from_url"} required={false} />
                  </div>
                </div>
                <div className="field form-group mb-0">
                  <button className="button btn btn-danger is-link" type="submit">{this.state.sending?'Processing':'Send'}</button>
                </div>
                <p className="small mt-1">Email will send to {contact_email}, if you get no email send successful response, you can alternatively <a className="" href={`mailto:${contact_email}?subject=Inquiry about your plastic crate`}>Send email</a> using your email client.</p>
              </form>
              {this.state.showThanks &&(
                <div className="mt-1 bg-light rounded shadow-lg">
                  <div className="alert alert-success" role="alert">
                      <h4>Thank you!</h4>
                      <p className="mb-1">Email had been sent to <span className="font-weight-bold">{contact_email || 'seller006@joinplastic.com'}</span></p>
                      <p>We will check the email and come back to you as soon as possible!</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}