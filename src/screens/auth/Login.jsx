import { useState } from "react"
import { NavLink, useHistory } from "react-router-dom"
import { supabase } from "../../lib/supabase/authClient"

function Login(){
  const [formState, setFormState] = useState({
    email: "",
    password: "",
  })

  const history = useHistory()

  function handleChange(e){
    setFormState({...formState, [e.target.name]: e.target.value})
  }

  async function handleSubmit(e){
    e.preventDefault()
    
    try {
      const { error } = await supabase.auth.signIn({
        email: formState.email,
        password: formState.password
      })

      if(error)
        throw error;
      
      history.push("/")

    } catch(error) {
      alert(error.error_description || error.message)
    }
  }

  return(
    <div className="container">
      <div className="form-wrapper">
        <form className="signup-form" onSubmit={handleSubmit}>
          <h2 style={{textAlign: "center", marginBottom: "2rem"}}>Sign In</h2>

          <div className="form-group">
            <label className="form-label" htmlFor="email">Email</label>
            <input onChange={handleChange} name="email" id="email" type="text" placeholder="Email"/>
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="password">Password</label>
            <input onChange={handleChange} name="password" id="password" type="password" placeholder="Password"/>
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