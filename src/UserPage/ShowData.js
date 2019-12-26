import React, { useContext, useState, useEffect } from 'react';
import TokenContext from '../AuthService/TokenContext';
import CustomTable from '../CustomTags/CustomTable';
import TRow from '../CustomTags/TRow';

function ShowData() {

    const tokenV = useContext(TokenContext);
    const [data, setData] = useState([])

    function Show() {

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

    useEffect(() => {
        
    }, [tokenV])

    if (data.length !== 0) {

        return (

            <div>
                <CustomTable>
                    <TRow data={["ID", "FirstName", "LastName", "Username"]} th={true} />
                    {data.map((element, i) => {
                        return (
                            <TRow key={i} data={[element.id, element.firstName, element.lastName, element.username]} />
                        )
                    })}
                </CustomTable>
            </div>

        )
    }
    return (
        <div>
            <button onClick={Show} >Show User</button>
        </div>
    )
}
export default ShowData;
