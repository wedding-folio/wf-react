import { useState } from "react"
import { NavLink } from "react-router-dom"

function Login(){
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
          <h2 style={{textAlign: "center", marginBottom: "2rem"}}>Sign In</h2>

          <div className="form-group">
            <label className="form-label" htmlFor="email">Email</label>
            <input id="email" type="text" placeholder="Email"/>
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="password">Password</label>
            <input id="password" type="password" placeholder="Password"/>
          </div>

          <button>Submit</button>
          <hr />
          <div style={{textAlign: "center"}}>
            <p>Dont have an account yet?</p>
            <NavLink to={"/signup"}>
              <p style={{color: "var(--blue-800)"}}>Sign Up</p>
            </NavLink>
          </div>
          
        </form>
      </div>
    </div>
  )
}

export default Login;