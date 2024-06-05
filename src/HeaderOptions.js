import React from 'react'
import "./HeaderOption.css"
import { Avatar } from '@mui/material'
import { useSelector } from 'react-redux'
import { selectUser } from './features/counter/userSlice';


function HeaderOptions({ avatar, Icon, title, onClick }) {
    const user = useSelector(selectUser);

    return (
        <div onClick={onClick} className='headerOption'>
            {Icon && <Icon className="headerOption__icon" />}
            {avatar &&
                <Avatar className="headerOption__avatar" alt='img' >
                    {user?.email[0]}
                </Avatar>}
            <h3 className="headerOption__title">{title}</h3>
        </div>
    )
}

export default HeaderOptions