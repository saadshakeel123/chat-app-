import React from 'react'
import GoogleButton from 'react-google-button'
import { Firebase } from '../firebase'
import { auth } from '../firebase'
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'


const style = {
  wrapper: `flex justify-center`
}

function googleSignIn() {
  const provider = new GoogleAuthProvider()
  signInWithPopup(auth, provider)
}

const SignIn = () => {
  return (
    <div className={style.wrapper}>
      <button onClick={googleSignIn}> Sign In </button>
    </div>
  )
}

export default SignIn