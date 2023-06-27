import React, { useEffect, useState } from 'react'
import { Card } from './Card'
import axios from 'axios'

import { useState } from 'react'

export const Main = () => {

const [url, setUrl] = useState("https://gateway.marvel.com/v1/public/characters?ts=1&apikey=d36a1e0d71b87feacf3a52824ecfc4ca&hash=fe3f7e64fa828e449ef675312b956565")

useEffect(()=> {
    const fetch=async()=>{
        const res=await axios.get(url)
    }
    fetch();
},[url])

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
                <Card />
                <Card />
                <Card />
                <Card />
            </div>


        </>
    )
}
