import { useState, } from "react"
import { NavLink, useHistory } from "react-router-dom"
import { supabase } from "../../lib/supabase/authClient"
import "./base.css"

function SignUp(){
  const [formState, setFormState] = useState({
    email: "",
    password: "",
    passwordConfirm: "",
  })

  const history = useHistory();

  function handleChange(e){
    setFormState({...formState, [e.target.name]: e.target.value})
  }

  async function handleSubmit(e){
    e.preventDefault()
    console.log(formState)

    if(formState.password !== formState.passwordConfirm){
      alert("Passwords do not match")
      return
    }

    try {
      let { error } = await supabase.auth.signUp({
        email: formState.email,
        password: formState.password
      })

      if(error)
        throw error;

      history.push("/")
      
    }
    catch(error){
      alert(error.error_description || error.message)
    }

    
    
  }

  return(
    <div className="container">
      <div className="form-wrapper">
        <form className="signup-form" onSubmit={handleSubmit}>
          <h2 style={{textAlign: "center", marginBottom: "2rem"}}>Create A New Account</h2>

          <div className="form-group">
            <label className="form-label" htmlFor="email">Email</label>
            <input onChange={handleChange} name="email" id="email" type="text" placeholder="Email"/>
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="password">Password</label>
            <input onChange={handleChange} name="password" id="password" type="password" placeholder="Password"/>
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="passwordConfirm">Confirm Password</label>
            <input onChange={handleChange} name="passwordConfirm" id="passwordConfirm" type="password" placeholder="Confirm Password"/>
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