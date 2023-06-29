import React, { useEffect, useState } from 'react'
import { Card } from './Card'
import axios from 'axios'



export const Main = () => {

    const [url, setUrl] = useState("http://localhost:3000")
    const [item, setItem] = useState();
    const [search, setSearch] = useState("");
    useEffect(() => {
        const fetch = async () => {
            const res = await axios.get(url)
            setItem(res.data.data.results);
        }
        fetch();
    }, [url])
    const searchMarvel = () => {
        setUrl(`http://localhost:3000`)
    }
    return (
        <>
            <div className="header">
                <div className="bg">
                    <img src="./Images/group.png" alt="" />
                </div>
                <div className="search-bar">
                    <img src="./Images/logo.png" alt="logo" />
                    <input type="search" placeholder='Search Here'
                        className='search'
                        onChange={e => setSearch(e.target.value)}
                        onKeyPress={searchMarvel} />
                </div>
            </div>
            <div className="content">

                {
                    (!item) ? <p>Not Found</p> : <Card data={item} />
                }
            </div>


        </>
    )
}
