import React, {useState, useEffect} from 'react'
import httpClient from '../../httpClient'
import { Table } from 'react-bootstrap'



const Employee = () => {

  const [services, setServices] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
      httpClient.get("/api/v1/employees")
      .then((response) => {
          setServices(response.data)
          setIsLoading(false)
      })
  }, [] )
  if (isLoading){
      return <h2>Loading....</h2>
  }

return (
  <div className=" p-5 p-lg-0 pt-lg-5 text-center text-sm-start " style={{
    overflow: "auto",
    whiteSpace: "nowrap"
}} >
      <h2 className='text-primary'>Assisstance</h2>
      <br/>
      <Table striped bordered hover>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>First Name</th>
                    <th>Second Name</th>
                    <th>Email</th>
                    <th>Phone Number</th>
                    <th>Location</th>
                    <th>Status</th>

                </tr>
            </thead>
            <tbody>
            {
                services.map(item => {
                    
                    return <tr>
                            <td>{item.id}</td>
                            <td>{item.firstName}</td>
                            <td>{item.lastName}</td>
                            <td>{item.email}</td>
                            <td>{item.phoneNumber}</td>
                            <td>{item.location}</td>
                            <td>{item.user_role}</td>
                        </tr>
                   
                })
            }
            </tbody>
        </Table>
  </div>
)
}

export default Employee