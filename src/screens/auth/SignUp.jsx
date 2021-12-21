import { useState, } from "react"
import { NavLink } from "react-router-dom"
import "./SignUp.css"

function SignUp(){
  const [formState, setFormState] = useState({
    email: "",
    password: "",
    passwordConfirm: "",
  })

  function handleSubmit(ev){
    ev.preventDefault()
  }

  return(
    <div className="container">
      <div className="form-wrapper">
        <form className="signup-form" onSubmit={handleSubmit}>
          <h2 style={{textAlign: "center", marginBottom: "2rem"}}>Create A New Account</h2>

          <div className="form-group">
            <label className="form-label" htmlFor="email">Email</label>
            <input id="email" type="text" placeholder="Email"/>
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="password">Password</label>
            <input id="password" type="password" placeholder="Password"/>
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="passwordConfirm">Confirm Password</label>
            <input id="passwordConfirm" type="password" placeholder="Confirm Password"/>
          </div>

          <button>Submit</button>
          <hr />
          <div style={{textAlign: "center"}}>
            <p>Already have an account?</p>
            <NavLink to={"/login"}>
              <p style={{color: "var(--blue-800)"}}>Sign In</p>
            </NavLink>
          </div>

        </form>
      </div>
    </div>
  )
}

export default SignUp