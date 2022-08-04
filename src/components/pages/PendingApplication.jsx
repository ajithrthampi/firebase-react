import React, { useState } from 'react'
import Sidebar from '../Sidebar'
import Table from 'react-bootstrap/Table';
import { Button } from "react-bootstrap"

import { useEffect } from 'react';
import Company1Collection from "../../Add/Add.company1"
import CompanyCollection from "../../Add/Add.service"
import DeclinedCollection from "../../Add/Declined"



function PendingApplication() {

  const [companies, setCompany] = useState([])

  useEffect(() => {
    getCompany();

  }, [])

  const getCompany = async () => {
    const data = await CompanyCollection.getAllCompany();
    console.log(data.docs);

    setCompany(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
  }

  const approveHandler = async (id) => {
    console.log(id)
    const auser = await CompanyCollection.getcompany(id)
    const owner = auser._document.data.value.mapValue.fields
    console.log(owner)

    await Company1Collection.addCompany1(owner)
  }
  // useEffect(() => {
  // getDecline();
  // })

  const declineHandler = async (id) => {
    console.log(id)
    const auser = await CompanyCollection.getcompany(id)
    const newDeclined = auser._document.data.value.mapValue.fields
    console.log(newDeclined);
    await DeclinedCollection.addDeclined(newDeclined)
  }

  return (

    <>
     <Sidebar>
      <h1>Pending Applicatiion List</h1>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>S.No</th>
            <th>Company Name</th>
            <th>Company Details</th>
            <th>View Details</th>
            <th> Approved </th>
            <th> Declined </th>
          </tr>
        </thead>
        <tbody>

          {companies.map((doc, index) => {
            return (

              <tr key={doc.id} >
                <td> {index + 1} </td>
                <td> {doc.companyname} </td>
                <td> {} </td>
                <td>

                  <Button
                    variant="danger"
                    className=""
                  >
                    Open
                  </Button>

                </td>
                <td>

                  <Button
                    variant="dark"
                    className="delete"
                    onClick={(e) => approveHandler(doc.id)}
                  >
                    Approve
                  </Button>
                </td>

                <td>

                  <Button
                    variant="secondary"
                    className="delete"
                    onClick={(e) => declineHandler(doc.id)}
                  >
                    Decline
                  </Button>

                </td>
              </tr>
            )
          })}
          
        </tbody>
      </Table>
      
      </Sidebar>
    </>
  )
}

export default PendingApplication