import {GoogleLogin, GoogleLogout} from 'react-google-login'
import {useState} from 'react'
import React from 'react'


const GoogleAuth = ({setUser}) => {

const [showLoginButton, setShowLoginButton] = useState(true)
  const [showLogoutButton, setShowLogoutButton] = useState(false)
 
    
  const onLoginSuccess = (res) => {
    console.log("Login Success");
    console.log(res.profileObj)
    setShowLoginButton(false)
    setShowLogoutButton(true)
    setUser(res.googleId)
    
   
  }

  const onFailureSuccess = (res) => {
    console.log("Login Failed", res)
  }

  const onSignoutSuccess = () => {
    alert("You have been signed out successfuly")
    setShowLoginButton(true)
    setShowLogoutButton(false)
    setUser("")
    console.log("Logout Success");
   
  }
  return ( 
    <div>
    {showLoginButton ? 
     <GoogleLogin 
  clientId = "935505928297-dh42cl8sh57p3nq4c34rpeup2gvaco5s.apps.googleusercontent.com"
  buttonText = "Login"
  onSuccess = {onLoginSuccess}
  onFailure = {onFailureSuccess}
  cookiePolicy = {'single_host_origin'}
  isSignedIn={true}
  
  /> : null }

  { showLogoutButton ?
  <GoogleLogout 
  clientId = "935505928297-dh42cl8sh57p3nq4c34rpeup2gvaco5s.apps.googleusercontent.com"
  buttonText = "Logout"
  onLogoutSuccess = {onSignoutSuccess}
  
  /> : null }
</div>
  )
}

export default GoogleAuth