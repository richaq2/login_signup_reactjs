import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';




const login = () => {
    return (
        <>
        <section className="signup"style={{display:'flex',justifyContent:'center',alignItems:'center',height:'auto',marginLeft:'auto',marginRight:'auto'}}>
            <div className="container shadow-lg mt-5" style={{height:'auto',marginLeft:'auto',marginRight:'auto'}} >
                <div className="signup-content">
                    <div className="signup-form">
                        <h2 >Login</h2>
                        <form >
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
  </div>
  <div class="form-group form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" for="exampleCheck1">Remember Me</label>
  </div>
  <button type="submit" style={{display:'flex',marginTop:'20px'}} class="btn btn-success">Login</button>
  <span style={{float:'right'}}>Don't have account? <a style={{color:'red'}} href="#">SignUp</a></span>  
</form>

                    </div>
                </div>

            </div>

        </section>
        </>
    )
}

export default login
