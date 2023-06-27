import React from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export const Marvel = () => {
    const { id } = useParams();
    const [item, setItem] = useState()
    const fetch = async () => {
        const res = await axios.get(`https://gateway.marvel.com:443/v1/public/characters/${id}?apikey=d36a1e0d71b87feacf3a52824ecfc4ca
        `)
        setItem(res.data.data.results[0])
    }
    fetch();


    return (
        <>
            {
                (!item) ? "" : (
                    <div className="box-content">
                        <div className="right-box">
                            <img src={`${item.thumbnail.path}.${item.thumbnail.extension}`} alt="" />
                        </div>
                        <div className="left-box">
                            <h1>{item.name}</h1>
                            <h4>{item.description}</h4>
                        </div>

                    </div>
                )
            }
        </>
    )
}