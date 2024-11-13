import LoginForm from "../../../Components/LoginForm/LoginForm"
import SignUpForm from "../../../Components/SignUpForm/SignUpForm"

function AuthPage({ setUser }) {

  return(
    <main>
      <h1>AuthPage</h1>
      <SignUpForm setUser={ setUser }/>
      <LoginForm setUser={ setUser }/>
    </main>
  )

}

export default AuthPage