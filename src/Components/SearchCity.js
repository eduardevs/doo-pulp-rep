import React, { useState } from 'react'

export function SearchCity({ setCity, city }) {
    const [search, setSearch] = useState()


    const handleChange = (e) => {
        setSearch(e.target.value)
    }


    const handleSubmit = (e) => {
        e.preventDefault()

        setCity(search)
    }

    return (
        <div className='container'>
            <form onSubmit={handleSubmit}>
                <input type="text" className="form-control" id="city" aria-describedby="emailHelp" onChange={handleChange} />

                <button type="submit" className="btn btn-success mt-3" >Submit</button>
            </form>

        </div>)
}
