import React, { useState } from 'react';
// import Sidebar from '../Sidebar';
import Table from 'react-bootstrap/Table';
import { Button } from "react-bootstrap"
import { useEffect } from 'react';
import CompanyCollection from "../../Add/Add.service"
import { Link } from '@mui/material';
import Sidebar from '../Sidebar';


const ApplicationList = () => {
    const [companies, setCompany] = useState([])

    useEffect(() => {
        getCompany();
    }, [])

    const getCompany = async () => {
        const data = await CompanyCollection.getAllCompany();
        console.log(data.docs);

        setCompany(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    }



    return (

        <>
        <Sidebar>
             <h1>Application List</h1>

            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>S.No</th>
                        <th>Company Name</th>
                        <th>Company Details</th>
                        <th>hello</th>
                        <th> where</th>
                    </tr>
                </thead>
                <tbody>

                    {companies.map((doc, index) => {
                        return (

                            <tr key={doc.id}>
                                <td> {index + 1} </td>
                                <td> {doc.companyname} </td>
                                <td> {doc.email} </td>
                                <td>

                                    &nbsp;
                                    &nbsp;
                                    <Link to={"/view/ $ {id}"} >
                                        <Button
                                            variant="dark"
                                            className="delete"
                                        >
                                            Open
                                        </Button>
                                    </Link>
                                </td>
                                <td>

                                    &nbsp;
                                    &nbsp;

                                    <Button
                                        variant="warning"
                                        className="delete"
                                    >
                                        Pending
                                    </Button>
                                </td>
                            </tr>
                        )
                    })}

                </tbody>
            </Table> 
            </Sidebar>

        </>
    );
}




export default ApplicationList