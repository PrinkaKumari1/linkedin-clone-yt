import React from 'react'
import "./Header.css"
import SearchIcon from '@mui/icons-material/Search';
import HeaderOptions from './HeaderOptions';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useDispatch } from 'react-redux';
import { auth } from './firebase';
import { logout } from './features/counter/userSlice';
// import { useSelector } from 'react-redux';


function Header() {
    // const user = useSelector(selectUser)
    const dispatch = useDispatch();
    const logOutOfApp = ()=>{
        dispatch(logout())
        auth.signOut();
    }

    return (
        <div className='header'>
            <div className="header__left">
                <img className="" src="https://cdn1.iconfinder.com/data/icons/logotypes/32/square-linkedin-512.png" alt='img' />
                <div className="header__search">
                    {/* searchIcon */}
                    <SearchIcon />
                    <input className="" type='text' placeholder='search'/>
                </div>
            </div>
            <div className="header__right">
                <HeaderOptions Icon={HomeIcon} title="Home" />
                <HeaderOptions Icon={SupervisorAccountIcon} title="My Network" />
                <HeaderOptions Icon={BusinessCenterIcon} title="Jobs" />
                <HeaderOptions Icon={ChatIcon} title="Messaging" />
                <HeaderOptions Icon={NotificationsIcon} title="Notifications" />
                <HeaderOptions avatar={true} title='me' onClick={logOutOfApp}/>
            </div>
        </div>
    )
}

export default Header