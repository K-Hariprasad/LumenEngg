import React from "react";
class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            form: {
                name: '',
                company: '',
                email: '',
                address: '',
                enquiry: ''
            },
            errorMessage: {
                name: '',
                company: '',
                email: '',
                address: '',
                enquiry: ''
            },
            buttonStatus: {
                name: false,
                company: false,
                email: false,
                address: false,
                enquiry: false,
                buttonActive: false,
            }
        };
    }
    handleChange = (event) => {
        let nam = event.target.name;
        let val = event.target.value;
        const { form } = this.state
        this.setState({ form: { ...form, [nam]: val } })
        this.contactFormValidation(nam, val)
    }
    contactFormValidation = (fieldName, val) => {
        const { errorMessage } = this.state
        const { buttonStatus } = this.state
        switch (fieldName) {
            case "email":
                const emailReg = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/
                if (val === "") {
                    errorMessage.email = "Email Id is Required"
                }
                else if (!val.match(emailReg)) {
                    errorMessage.email = "Enter Valid Email Id"
                }
                else {
                    errorMessage.email = "";
                    buttonStatus.email = true;
                }
                break;
            case "name":
                if (val === "") {
                    errorMessage.name = "Name is Required"
                }
                else {
                    errorMessage.name = "";
                    buttonStatus.name = true;
                }
                break;
            case "address":
                if (val === "") {
                    errorMessage.address = "Address is Required"
                }
                else {
                    errorMessage.address = "";
                    buttonStatus.address = true;
                }
                break;
            case "company":
                if (val === "") {
                    errorMessage.company = "Company Name is Required"
                }
                else {
                    errorMessage.company = "";
                    buttonStatus.company = true;
                }
                break;
            case "enquiry":
                if (val === "") {
                    errorMessage.enquiry = "Enquiry Details are Required"
                }
                else {
                    errorMessage.enquiry = "";
                    buttonStatus.enquiry = true;
                }
                break;
            default:
                break;
        }
        buttonStatus.buttonActive = buttonStatus.name && buttonStatus.email && buttonStatus.company
            && buttonStatus.address && buttonStatus.enquiry
        this.setState({ errorMessage: errorMessage, buttonStatus: buttonStatus })
    }
    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state.form);
    }
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-6 padding" style={{ backgroundColor: "bisque" }}>
                        <p>
                            "quates quate squatesqu atesqu atesqu atesq uatesqu atesquates"
                </p>
                        <h4> Contact Us!</h4>
                        <h5>Address</h5>
                        <p>LUMEN ENGINEERING
                    <br />
                    PARAPPANANGADI ROAD
                    <br />
                    THAZHE CHELARI,
                    <br />
                    VELIMUKKU, MALAPPURAM – 676 317
                    <br />
                    KERALA, INDIA
                </p>
                        <h5>Phone</h5>
                        <p>12345678920</p>
                        <h5>Mail</h5>
                        <p>bdsbshh@gmail.com</p>
                    </div>
                    <div className="col-md-6 padding-right">
                        <form onSubmit={(e) => (this.handleSubmit(e))}>
                            <div>
                                <div className="row">
                                    <div className="col">
                                        <div className="form-group">
                                            <input type="text" className="form-control border-bottom" onChange={(e) => this.handleChange(e)} placeholder="Name" id="name" name='name' />
                                            <span className="text-danger">{this.state.errorMessage.name}</span>
                                        </div>
                                        <div className="form-group">
                                            <input type="email" className="form-control border-bottom" onChange={(e) => this.handleChange(e)} placeholder="Email" id="email" name="email" />
                                            <span className="text-danger">{this.state.errorMessage.email}</span>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="form-group">
                                            <input type="text" className="form-control border-bottom" value={this.state.form.company} onChange={(e) => this.handleChange(e)} placeholder="Company" id="company" name="company" />
                                            <span className="text-danger">{this.state.errorMessage.company}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <div className="form-group">
                                            <input type="text" className="form-control border-bottom" onChange={(e) => this.handleChange(e)} placeholder="Contact Address"
                                                id="address" name="address" />
                                            <span className="text-danger">{this.state.errorMessage.address}</span>
                                        </div>
                                        <div className="form-group">
                                            <textarea name="enquiry" className="form-control border-bottom " rows="5"
                                                placeholder="Enquiry Details" onChange={(e) => this.handleChange(e)}></textarea>
                                            <span className="text-danger">{this.state.errorMessage.enquiry}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <button type="submit" className="btn btn-outline-primary" disabled={!this.state.buttonStatus.buttonActive}>SUBMIT</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
export default Contact
