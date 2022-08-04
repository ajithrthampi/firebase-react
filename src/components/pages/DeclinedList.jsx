import React, { useEffect, useState } from 'react'
import { Button, Table } from 'react-bootstrap'
// import Login from '../Login'
import Sidebar from '../Sidebar'
import DeclinedCollection from "../../Add/Declined"

function DeclinedList() {

  const [declined, setDeclined] = useState([])

  useEffect(() => {
    getAll();
  }, [])

  const getAll = async () => {
    const data = await DeclinedCollection.getAllDeclined();
    console.log(data.docs);

    setDeclined(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
  }


  return (
    <div>
      <Sidebar>


        <h1>Declined List</h1>
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

            {declined.map((doc, index) => {
              return (
                <tr key={doc.id} >
                  <td> {index + 1}</td>
                  <td>  {(doc.name.stringValue)} </td>
                  <td> {(doc.companyname.stringValue)} </td>
                  <td>@mdo</td>
                
                  <td>

                    <Button
                      variant="danger"
                      className="delete"
                    // onClick={(e) => approvedHandler(doc.id)}
                    >
                      Declined
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
    </div>
  )
}

export default DeclinedList