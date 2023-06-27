import React, { useEffect, useState } from 'react'
import { Card } from './Card'
import axios from 'axios'



export const Main = () => {

    const [url, setUrl] = useState("https://gateway.marvel.com/v1/public/characters?ts=1&apikey=d36a1e0d71b87feacf3a52824ecfc4ca&hash=fe3f7e64fa828e449ef675312b956565")
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
        setUrl(`https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${search}&apikey=d36a1e0d71b87feacf3a52824ecfc4ca`)
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
