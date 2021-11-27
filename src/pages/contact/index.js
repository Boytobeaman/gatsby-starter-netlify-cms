import 'core-js/es6/map';
import 'core-js/es6/set';

import React from "react";
import { Link } from 'gatsby'
import { navigateTo } from "gatsby-link";
import Layout from '../../components/Layout'
import { 
  cdn_img_thumbnail,
  contact_email,
  inquiry_handle_base_url,
  inquiry_handle_app_name,
  inquiry_handle_inquiry_url,
  inquiry_handle_email_url,
  company_name,
  remote_ip_url,
  contact_phone_one,
  contact_phone_two,
} from '../../utils'
import axios from 'axios';
import InquiryForm from "../../components/InquiryForm";

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
      product_model: '',
      product_quantity: '',
      p_img: cdn_img_thumbnail,
      from_url: '',
      sending: false,
      showThanks: false,
      to_email: contact_email,
      company_name,
      remote_ip: ''
    };
  }
  componentDidMount() {
    let obj={}
    let model = localStorage.getItem('model')
    if(model){
      obj.product_model = model;
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

    axios.get(remote_ip_url)
      .then(res => {
        if(res && res.data && res.data.ipAddress){
          this.setState({
            remote_ip: res.data.ipAddress
          })
        }
      })
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
              <h2 className="h4">Contact us & Inquiry <span className="text-danger"></span></h2>
              <div className="row">
                <div className="col-md-6">
                  <InquiryForm />
                </div>
                <div className="col-md-6">
                  <h5>Our services:</h5>
                  <div className="mb-1">
                    <ul className="list-group">
                      <li className="list-group-item">
                        Add customer logo on the crate.
                      </li>
                      <li className="list-group-item">
                        We could customize color for the crate, regular color is blue, grey.
                      </li>
                      <li className="list-group-item">
                        MOQ for bulk order: Normally 300 pcs, but could be negotiated in circumstance
                      </li>
                    </ul>
                  
                  </div>
                  <h5>Our location:</h5>
                  <div className="alert alert-secondary" role="alert">
                    <p className="mb-0">Room 1405, No.28 Moyu Road</p>
                    <p className="mb-0">Anting county,Jiading District, Shanghai, China</p>
                  </div>
                  
                  <h5>Call us: </h5>
                  <div className="alert alert-secondary" role="alert">
                    <p className="mb-0">{contact_phone_one}</p>
                    <p className="mb-0">{contact_phone_two}</p>
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