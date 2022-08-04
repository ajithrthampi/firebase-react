import React from 'react'
import Sidebar from '../Sidebar'
import Table from 'react-bootstrap/Table';
import { Button } from "react-bootstrap"
import { useEffect, useState } from 'react';
import Company1Collection  from "../../Add/Add.company1"


function RecordList() {

  const [approved, setApproved] = useState([])

  useEffect(() => {
    getAll();
  }, [])

  const getAll = async () => {
    const data = await Company1Collection.getAllCompany1();
    console.log(data.docs);

    setApproved(data.docs.map((doc) => ({...doc.data(), id: doc.id })))
  }
  

  return (
    <>
       <Sidebar>
      <h1> Approved List </h1>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>S.No</th>
            <th>Company Name</th>
            <th>Company Details</th>
            <th>Username</th>
            <th>Hi there</th>
          </tr>
        </thead>
        <tbody>

          {approved.map((doc, index) => { 
            return(
                 <tr key={doc.id} >
            <td> {index + 1}</td>
            <td>  {(doc.name.stringValue)} </td>
            <td> {(doc.companyname.stringValue)} </td>
            <td>@mdo</td>
            {/* <td>
            <Button
                    variant="danger"
                    className=""
                  >
                    Open
                  </Button>

                </td> */}
                <td>

                  <Button
                    variant="success"
                    className="delete"
                    // onClick={(e) => approvedHandler(doc.id)}
                  >
                    Approved
                  </Button>
                </td>

                {/* <td>

                  <Button
                    variant="secondary"
                    className="delete"
                  >
                    Decline
                  </Button>
            </td> */}
          </tr>
            )
          })}


        

        </tbody>
      </Table>
      </Sidebar>
    </>
  )
}


export default RecordList