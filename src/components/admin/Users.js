import React, {useState, useEffect} from 'react'
import httpClient from '../../httpClient';
import { Table } from 'react-bootstrap'
import Form from 'react-bootstrap/Form';
import { Alert, AlertTitle } from '@mui/material';


const Users = () => {
    const [services, setServices] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [superAdmin, setSuperAdmin] = useState([])
    const [success, setSuccess] = useState('')

    useEffect(() => {
        httpClient.get("/api/v1/users")
        .then((response) => {
            setServices(response.data)
            setIsLoading(false)
        })
    }, [] )

    if (isLoading){
        return <h2>Loading....</h2>
    }

   const MakesuperAdmin = (e, userId) => {
  const newRole = e.target.value;
  httpClient.put(`/api/v1/super_admin/${userId}`, 
    { role: newRole },
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("access_token")}`,
      },
    }
  )
  .then((res) => {
    setSuperAdmin(res.data);
    setSuccess('Successfully Updated');
    setTimeout(() => {
      setSuccess('');
    }, 5000);
  })
  .catch(() => {
    setSuccess('Failed to update');
    setTimeout(() => {
      setSuccess('');
    }, 5000);
  });
};

  return (
    <div className=" p-5 p-lg-0 pt-lg-5 text-center text-sm-start " style={{
        overflow: "auto",
        whiteSpace: "nowrap",
        fontSize:'0.8rem'
    }} >
        {success && <Alert severity="success">
  <AlertTitle>success</AlertTitle>
   { success } — <strong>Thank you</strong>
 </Alert>}
        
        <h2 className='text-primary mt-3'>Registered Users</h2>
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
                    <th>Promote User</th>

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
                            <td>
                            <Form.Select 
                                style={{fontSize:'0.8rem'}} 
                                className='form-control col-md-3' 
                                onChange={(e) => MakesuperAdmin(e, item.id)}
                                >
                                <option value="">--select user role--</option>
                                <option value="super_admin">super_admin</option>
                                <option value="admin">admin</option>
                            </Form.Select>
                            </td>
                        </tr>
                   
                })
            }
            </tbody>
        </Table>
    </div>
  )
}

export default Users
