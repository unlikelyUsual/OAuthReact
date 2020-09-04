import React from 'react'

export default function GoogleLogin({clickHanlder}) {
    return (
        <div className="user-login">
        <div className="col-sm-8 mx-auto p-5">
               <h2 className="mb-3">Login</h2>
               <p className="mb-3">Login Or Create Account with Google</p>
               <form id="contactForm">
                   <div className="row">
                       <div className="col-md-12">
                           <div className="submit-button text-center">
                               <button className="btn hvr-hover p-4" id="submit" type="submit" onClick={clickHanlder}> <i className="fab fa-lg fa-google-plus-g"></i> Google Plus</button>
                           </div>
                       </div>
                   </div>
               </form>
           </div>
   </div>
    )
}
