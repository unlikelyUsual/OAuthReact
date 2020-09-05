import React, { Component } from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

 class UserDetail extends Component {

    constructor(props){
        super(props);
    }

    render() {
        const user = this.props.user;
        return (
            <div>
                <div className="user-background mb-5">
                    <img src={user.image} className="user-image" /> 
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
                            <p className="para-lead h5">{user.name}</p> 
                            </div>
                        </div>
                        <div className="d-flex col-sm-10 mb-3">
                            <div className="col-sm-5">
                            <h3>Email Address</h3>    
                            </div>
                            <div className="col-sm-6 text-left">
                                <p className="para-lead h5">{user.email}</p>
                            </div>
                        </div>
                        <div className="d-flex col-sm-10 mb-3">
                            <div className="col-sm-5">
                            <h3>Age</h3>    
                            </div>
                            <div className="col-sm-6 text-left">
                            <p className="para-lead h5">{user.age ? user.age : 'N/A'}</p>
                            </div>
                        </div>
                        <div className="d-flex col-sm-10 mb-3">
                            <div className="col-sm-5">
                            <h3>Mobile No.</h3>    
                            </div>
                            <div className="col-sm-6 text-left">
                            <p className="para-lead h5">{user.mobile ? user.mobile : 'N/A'}</p>
                            </div>
                        </div>
                        <div className="d-flex col-sm-10 mb-3">
                            <div className="col-sm-5">
                            <h3>Address</h3>    
                            </div>
                            <div className="col-sm-6 text-left">
                            <p className="para-lead h5">{user.address ? user.address : 'N/A'}</p>
                            </div>
                        </div>
                        <div className="col-sm-10 mb-3 text-center">
                           <button className="btn btn-primary"><Link to="/account/edit">Edit Profile</Link></button>  
                        </div>
                        
                    </div>
                </div> 
            </div>
        )
    }
}

const mapStateToProps = state => ({
user : this.auth.user
});

export default connect()(UserDetail);
