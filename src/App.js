import React, { useEffect } from 'react';
import './App.css';
import './Header'
import Header from './Header';
import Sidebar from './Sidebar';
import Feed from './Feed';
import { useSelector } from 'react-redux';
import { selectUser } from './features/counter/userSlice';
import Login from './Login';
import { useDispatch } from 'react-redux';
import { auth } from './firebase';
import { login, logout } from './features/counter/userSlice';
import Widgets from './Widgets';



function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      if (userAuth) {
        // user is logged in
        dispatch(login({
          email: userAuth.email,
          uid: userAuth.uid,
          displayName: userAuth.displayName,
          photoURL: userAuth.photoURL,
        }));
      } else {
        // user is logged out
        dispatch(logout());
      }
    });

    // Clean up the subscription on unmount
    return unsubscribe;
  }, [ dispatch]);

  return (
    <div className="app">
      {/* header */}
      <Header />

      {!user ? (
        <Login />
      ) : (
        <div className="app__body">
          <Sidebar />
          <Feed />
          <Widgets/>
        </div>)}


    </div>
  );
}

export default App;
