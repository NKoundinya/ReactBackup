import React, { useContext, useState } from 'react';
import TokenContext from '../AuthService/TokenContext';

function ShowData() {

    const tokenV = useContext(TokenContext);
    const [data, setData] = useState([])

    function Show() {
        console.log(tokenV);
        fetch('http://localhost:5000/Users',
            {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + tokenV
                }
            })
            .then(res => res.json())
            .then(res => setData(res))
    }

    return (
        <div>
            <button onClick={Show} >Show User</button>
            {data.map((element, i) => {
                return (
                    <ul key={i}>
                        <li>{element.firstName}</li>
                        <li>{element.firstName}</li>
                        <li>{element.lastName}</li>
                        <li>{element.username}</li>
                    </ul>
                )
            })}
        </div>
    )
}
export default ShowData;
