import React, { useEffect, useState } from "react"

const HomePage = () => {
    const [data, setData] = useState([{}])

    useEffect(() => {
        fetch("http://localhost:8080/api/mock")
            .then((response) => response.json())
            .then((data) => {
                setData(data)
            })
    })

    return (
        <div>
            <h1>Home Page</h1>
            {data.map((person) => {
                return (
                    <>
                    <h4>{person.name}</h4>
                    <p>{person.hobbies}</p>
                    </>
                )
            })}
        </div>
    )
}

export default HomePage
