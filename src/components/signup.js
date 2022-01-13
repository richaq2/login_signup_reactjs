import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';




const signup = () => {
    return (
        <>
        <section className="signup"style={{display:'flex',justifyContent:'center',alignItems:'center',height:'auto',marginLeft:'auto',marginRight:'auto'}}>
            <div className="container shadow-lg mt-5" style={{height:'auto',marginLeft:'auto',marginRight:'auto'}} >
                <div className="signup-content">
                    <div className="signup-form">
                        <h2 >Sign Up</h2>
                        <form >
  <div class="form-group">
    <label for="exampleInputEmail1">Full Name</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Full Name"/>
  </div>
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Confirm Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Confirm Password"/>
  </div>
  <button type="submit" style={{display:'flex',marginTop:'20px'}} class="btn btn-success">Signup</button>
  <span style={{float:'right'}}>Already User? <a style={{color:'red'}} href="#">Login</a></span>           
</form>

                    </div>
                   
                </div>

            </div>

        </section>
        </>
    )
}

export default signup
