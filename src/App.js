import React, { useEffect, useState } from 'react';
import { City } from './Components/City';
import { SearchCity } from './Components/SearchCity'


function App() {

    const [city, setCity] = useState(null)
    const [data, setData] = useState()
    const [error, setError] = useState(null)
    const [isPending, setIsPending] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            let isDataOk = true
            try {

                const fetchApi = async () => {
                    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=984402b43af0b9ab91207b62f676bef0`;
                    const response = await fetch(url);
                    console.log(response)
                    if (!response.ok) {

                        setData(undefined)
                        setError('City not found')
                        setIsPending(false)
                        throw Error('City not found')

                    }
                    const respJson = await response.json();
                    console.log(respJson)
                    if (isDataOk) {
                        setData(respJson);
                        setIsPending(false);
                        setError(null)
                    }
                }
                if (city !== null) {

                    fetchApi()
                }
            } catch (error) {
                console.log(error)
                setIsPending(false)
                setError(error.message)

            }
            return () => isDataOk = false
        }, 1000);
    }, [city])


    return (
        <div className="m-5" style={{}}>
            <SearchCity setCity={setCity} city={city} />
            {isPending && <p>loading...</p>}
            {data && <City data={data} />}
            {error &&
                <div>{error}</div>
            }


        </div>
    );
}

export default App;


