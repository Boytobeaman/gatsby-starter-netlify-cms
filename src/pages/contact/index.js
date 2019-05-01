import React from "react";
import { Link } from 'gatsby'
import { navigateTo } from "gatsby-link";
import Layout from '../../components/Layout'

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

export default class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isValidated: false };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...this.state
      })
    })
      .then(() => navigateTo(form.getAttribute("action")))
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
              <h1 className="h4">Contact us <span className="text-danger">(MOQ:300)</span></h1>
              <div className="row">
                <div className="col-md-6">
                  <form
                    name="contact"
                    method="post"
                    action="/contact/thanks/?no-cache=1"
                    data-netlify="true"
                    data-netlify-honeypot="bot-field"
                    onSubmit={this.handleSubmit}
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
                          <input className="input form-control" placeholder="The product you want to buy" type={"text"} name={"p_model"} onChange={this.handleChange} id={"p_model"} required={true} />
                        </div>
                    </div>
                    <div className="field form-group mb-1">
                      <label className="label" htmlFor={"message"}>Message</label>
                      <div className="control">
                        <textarea className="textarea form-control" placeholder="Please tell us product details and your requirements" name={"message"} onChange={this.handleChange} id={"email"} required={true} />
                      </div>
                    </div>
                    <div className="field form-group">
                      <button className="button btn btn-danger is-link" type="submit">Send</button>
                    </div>
                  </form>
                </div>
                <div className="col-md-6">
                  <h5>Location:</h5>
                  <div className="alert alert-secondary" role="alert">
                    <p className="mb-0">Room 1405, No.28 Moyu Road</p>
                    <p className="mb-0">Anting county,Jiading District, Shanghai, China</p>
                  </div>
                  
                  <h5>Call: </h5>
                  <div className="alert alert-secondary" role="alert">
                    <p className="mb-0">(+86)021-59117621</p>
                    <p className="mb-0">(+86)18217103917</p>
                  </div>
                  
                  
                  <h5>Email: </h5>
                  <p>
                    <a className="btn btn-danger" href="mailto:seller006@joinplastic.com?subject=Inquiry about your plastic crate">seller006@joinplastic.com</a>
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