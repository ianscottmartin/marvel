import React from 'react'
import { Card } from './Card'

export const Main = () => {
    return (
        <>
            <div className="header">
                <div className="group">
                    <img src="./Images/group.png" alt="" />
                </div>
                <div className="search-bar">
                    <img src='Images/logo.png' alt="logo" />
                    <input type="search" placeholder='Search'
                        className="search" />
                </div>
            </div>

            <div className="content">
                <Card/>
            </div>


        </>
    )
}
