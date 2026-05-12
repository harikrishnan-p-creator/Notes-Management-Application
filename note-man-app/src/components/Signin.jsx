import {Link} from "react-router-dom"

function SignIn(){
  return(
    <section className="signin">
      <h1>Sign In</h1>
      <form action="signin" method="post">
        <label htmlFor="">Username</label><br />
        <input type="text" name="" id="" />
        <br />
        <label htmlFor="">Email ID</label><br />
        <input type="email" name="" id="" />
        <br />
        <label htmlFor="">Password</label><br />
        <input type="password" name="" id="" />
        <br />
        <a href="">Forgot Password?</a>
        <br />
        <button type="submit"><Link to="/">Sign in</Link></button>
        <button type="reset">Clear</button>
      </form>
    </section>
  );
}

export default SignIn;