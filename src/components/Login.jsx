import Header from './Header';
import { useState } from "react";

const Login = () => {
  const [isSignInForm, setIsSignInForm]=useState(true);
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);

  };
  return (
    <div>
     <Header/>
     <div className="absolute"> 
      <img src="https://assets.nflxext.com/ffe/siteui/vlv3/8d617e19-3c3c-4c28-8998-c9b14dbc7200/web/IN-en-20250901-TRIFECTA-perspective_48d84d4e-9558-46b8-a0f3-8b2dc8478431_large.jpg" 
      alt ="Logo"/>
     </div>
     <form className = "w-3/12 absolute p-12 bg-black opacity-85 bg-shadow-50 my-42 mx-auto right-0 left-0 text-white rounded-lg">
     <h1 className="font-bold text-2xl py-4">
      {isSignInForm ? "Sign In" : "Sign Up"}
     </h1>
     {!isSignInForm && <input type="text" placeholder="Full Name" className="p-4 my-4 bg-gray-700 w-full text-black rounded-lg opacity-100" />}
      <input
       type="text" 
      placeholder="Email"
      className="p-4 my-4 bg-gray-700 w-full text-black rounded-lg"/>
     
      <input
       type="Password" 
       placeholder="Password" 
       className="p-4 my-4 bg-gray-700 w-full text-black rounded-lg"/>
      <button
       className= "p-6 my-6 bg-red-700 w-full rounded-lg cursor-pointer">
        Sign in</button>
      <p className="text-white py-4 cursor-pointer" onClick={toggleSignInForm}>
  {isSignInForm ? "New to Netflix? Sign Up Now" : "Already have an account? Sign In" }
</p>
     </form>
     
     
    </div>
  )
}

export default Login;
