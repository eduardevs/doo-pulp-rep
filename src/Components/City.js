import React, { useEffect, useState } from 'react'

export function City({ data }) {


    useEffect(() => {
        console.log('ça marche')
    }, [data])

    return (
        <div className='container mt-3'>

            <p>À {data.name}, in {data.sys.country} </p>
            <p>Il fait {data.main.temp} degrée</p>
            <p>Il y a une sensation de {data.main.feels_like}.</p>
            <p>La temperature minima est de {data.main.temp_min}</p>
            <p>La temperature maxima est de {data.main.temp_max}</p>
            <p>{data.weather[0].main}</p>
            <img id="wicon" src={`http://openweathermap.org/img/w/${data.weather[0].icon}.png`} alt="Weather icon" />



        </div >
    )
}
