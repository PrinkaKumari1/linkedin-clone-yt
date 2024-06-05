import React, { useState } from 'react';
import './Login.css';
import { auth } from './firebase';
import { useDispatch } from 'react-redux';
import { login } from './features/counter/userSlice';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import logo from './logo.png';


function Login() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [profilePic, setProfilePic] = useState('');
    const dispatch = useDispatch();

    const loginToApp = (e) => {
        e.preventDefault();

        auth.signInWithEmailAndPassword(email, password)
            .then(userAuth => {
                dispatch(login({
                    email: userAuth.user.email,
                    uid: userAuth.user.uid,
                    displayName: userAuth.user.displayName,
                    photoURL: userAuth.user.photoURL,
                }))
            }).catch((error) => alert(error));

    };

    const register = () => {
        if (!name) {
            return alert('Please enter a full name!');
        }
        createUserWithEmailAndPassword(auth, email, password)
            .then((userAuth) => {
                return updateProfile(userAuth.user, {
                    displayName: name,
                    photoURL: profilePic,
                });
            })
            .then(() => {
                dispatch(
                    login({
                        email: auth.currentUser.email,
                        uid: auth.currentUser.uid,
                        displayName: name,
                        photoURL: profilePic,
                    })
                );
            })
            .catch((error) => alert(error));
    };

    return (
        <div className='login'>
            <img src={logo} alt="img" />

            <form>
                <input
                    type='text'
                    placeholder='Full name (required if registering)'
                    value={name}
                    onChange={e => setName(e.target.value)}
                />

                <input
                    type='text'
                    placeholder='Profile Picture URL (Optional)'
                    value={profilePic}
                    onChange={e => setProfilePic(e.target.value)}
                />

                <input
                    type='email'
                    placeholder='Email'
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />

                <input
                    type='password'
                    placeholder='Password'
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />

                <button type='submit' onClick={loginToApp}>Sign in</button>
                <p>Not a member?{' '}
                    <span className='login__register' onClick={register}>Register Now</span>
                </p>
            </form>
        </div>
    );
}

export default Login;
