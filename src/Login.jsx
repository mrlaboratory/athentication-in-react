import React, { useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";
import app from './firebaseinit';


const Login = () => {
    const [user,setUser] = useState('')
const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider()
const githubProvider = new GithubAuthProvider()



const clickHandler = () => {
signInWithPopup(auth,googleProvider)
.then(result=> {
    const loggedUser = result.user 
    console.log(loggedUser)
    setUser(loggedUser)
})
.catch(error=> {
console.log('error' + error.message )
})
}

const clickHandleGithubSignIn = () => {
    signInWithPopup(auth,githubProvider)
    .then(result=> {
        const loggedUser = result.user 
        console.log(loggedUser)
        setUser(loggedUser)
    })
    .catch(error=> {
    console.log('error' + error.message )
    })
}


const handleSignOut = () => {
    signOut(auth)
    .then(result => {
        setUser('')
    })
    .catch(error=> {
        console.log(error)
    })
}
    return (
        <div className='mt-10 flex flex-col gap-3 justify-center items-center'>
            <h2>login info </h2>
           {!user &&  <button className='btn' onClick={clickHandler}>Login With Google</button>}
           {!user &&  <button className='btn' onClick={clickHandleGithubSignIn}>Login With Github</button>}


{user && <h3 className='text-center text-3xl font-bold'>User Name : {user?.displayName}</h3> }
{user && <h3 className='text-center text-3xl font-bold'>User Email : {user?.email}</h3> }
{user && <img src={user.photoURL} alt="" /> }


{user && <button className='btn' onClick={handleSignOut}>Logout</button>}


        </div>
    );
};

export default Login;