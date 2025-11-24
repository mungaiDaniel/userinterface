import React, {useState, useEffect} from 'react'
import { Table } from 'react-bootstrap'



const Employee = () => {

  const [services, setServices] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetch("http://localhost:3000/api/v1/employees", {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    })
    .then(response => response.json())
    .then(data => {
      setServices(data);
      setIsLoading(false);
    })
    .catch(error => {
      console.error('Error fetching employees:', error);
      setIsLoading(false);
    });
  }, [])
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