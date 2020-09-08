import React, { Component } from "react";
import { connect } from "react-redux";
import Input from "../htmlElements/Input";
import { updateUser } from "../../actions/userAction";
import { withRouter } from "react-router-dom";

class EditAccount extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      age: "",
      mobile: "",
      address: "",
      email: "",
    };

    this.onInput = this.onInput.bind(this);
    this.updateUser = this.updateUser.bind(this);
  }

  onInput(ev) {
    this.setState({
      [ev.target.name]: ev.target.value,
    });
  }

  updateUser(ev) {
    ev.preventDefault();
    const userObject = {
      name: this.state.name,
      age: this.state.age,
      mobile: this.state.mobile,
      address: this.state.address,
      email: this.state.email,
    };
    this.props.updateUser(userObject, this.props.history);
  }

  componentDidMount() {
    const { isAuthenticated, user } = this.props.auth;
    if (isAuthenticated) {
      this.setState({
        name: user.name || "",
        age: user.age || "",
        mobile: user.mobile || "",
        address: user.address || "",
        email: user.email || "",
      });
    }
  }

  render() {
    const { errors } = this.props.error;
    return (
      <div>
        <div className="user-background mb-5">
          <img src={this.props.auth.user.image} className="user-image" alt={this.state.name} />
          <div className="user-image"></div>
        </div>

        <div className="d-flex mt-4">
          <div className="col-md-3">
            {
              //side bar Block
            }
          </div>
          <div className="d-flex flex-column col-md-6">
            <div className="title-all text-center mb-3">
              <h1>Personnel Details</h1>
            </div>
            <div className="d-flex col-sm-10 mb-3">
              <div className="col-sm-5">
                <h3>Full Name</h3>
              </div>
              <div className="col-sm-6 text-left">
                <Input
                  placeholder="Full Name"
                  name="name"
                  error={errors.name}
                  value={this.state.name}
                  handler={this.onInput}
                />
              </div>
            </div>
            <div className="d-flex col-sm-10 mb-3">
              <div className="col-sm-5">
                <h3>Email Address</h3>
              </div>
              <div className="col-sm-6 text-left">
                <Input
                  placeholder="Email"
                  name="email"
                  error={errors.email}
                  value={this.state.email}
                  handler={this.onInput}
                />
              </div>
            </div>
            <div className="d-flex col-sm-10 mb-3">
              <div className="col-sm-5">
                <h3>Age</h3>
              </div>
              <div className="col-sm-6 text-left">
                <Input
                  type="number"
                  name="age"
                  placeholder="Age"
                  error={errors.age}
                  value={this.state.age}
                  handler={this.onInput}
                />
              </div>
            </div>
            <div className="d-flex col-sm-10 mb-3">
              <div className="col-sm-5">
                <h3>Mobile No.</h3>
              </div>
              <div className="col-sm-6 text-left">
                <Input
                  type="number"
                  name="mobile"
                  placeholder="Mobile"
                  error={errors.mobile}
                  value={this.state.mobile}
                  handler={this.onInput}
                />
              </div>
            </div>
            <div className="d-flex col-sm-10 mb-3">
              <div className="col-sm-5">
                <h3>Address</h3>
              </div>
              <div className="col-sm-6 text-left">
                <Input
                  type="text"
                  name="address"
                  placeholder="Address"
                  error={errors.address}
                  value={this.state.address}
                  handler={this.onInput}
                />
              </div>
            </div>
            <div className="col-sm-10 mb-3 text-center">
              <button className="btn btn-primary" onClick={this.updateUser}>
                Update
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
    error: state.error,
  };
};

export default connect(mapStateToProps, { updateUser })(
  withRouter(EditAccount)
);
