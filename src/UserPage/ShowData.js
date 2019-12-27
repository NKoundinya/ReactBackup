import React, { useState, useEffect } from 'react';
// import TokenContext from '../AuthService/TokenContext';
import CustomTable from '../CustomTags/CustomTable';
import TRow from '../CustomTags/TRow';
import UserData from '../../src/UserData.json'

function ShowData() {

    // const tokenV = useContext(TokenContext);
    const [data, setData] = useState([])

    useEffect(() => {
        setData(UserData)
    }, [])
    // function Show() {
    //     setData(UserData)
    //     // fetch('../../src/UserData.json'
    //     //     {
    //     //         headers: {
    //     //             "Content-Type": "application/json",
    //     //             "Authorization": "Bearer " + tokenV
    //     //         }
    //     //     }
    //     // )
    //     //     .then(res => res.json())
    //     //     .then(res => setData(res))

    // }
    
    if (data.length !== 0) {

        return (
            // <h1>Show Data</h1>
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
        null
    )
}
export default ShowData;
