import axios from 'axios'
import React, {useState, useEffect} from 'react'
import { Table } from 'react-bootstrap'
import { Button } from '@mui/material';
import httpClient from '../../httpClient';



const AllServices = () => {

    const [services, setServices] = useState([])
    const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Fetch services from your API
    httpClient.get("/api/v1/stylings")
      .then(res => setServices(res.data))
      .catch(err => console.error(err));
  }, []);

  const handleDelete = async (id) => {
    try {
      await httpClient.delete(`/api/v1/stylings/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      });
      setServices(services.filter(service => service.id !== id));
      alert('Service deleted!');
    } catch (err) {
      alert('Delete failed!');
    }
  };

  return (
    <table
      style={{
        borderCollapse: "collapse",
        width: "100%",
        marginTop: "24px",
        marginBottom: "24px",
        background: "#fff",
        boxShadow: "0 2px 8px rgba(0,0,0,0.05)"
      }}
    >
      <thead>
        <tr>
          <th style={{ border: "1px solid #dee2e6", padding: "12px" }}>Style</th>
          <th style={{ border: "1px solid #dee2e6", padding: "12px" }}>Cost</th>
          <th style={{ border: "1px solid #dee2e6", padding: "12px" }}>Duration</th>
          <th style={{ border: "1px solid #dee2e6", padding: "12px" }}>Description</th>
          <th style={{ border: "1px solid #dee2e6", padding: "12px" }}>Action</th>
        </tr>
      </thead>
      <tbody>
        {services.map(service => (
          <tr key={service.id}>
            <td style={{ border: "1px solid #dee2e6", padding: "12px" }}>{service.style}</td>
            <td style={{ border: "1px solid #dee2e6", padding: "12px" }}>{service.cost}</td>
            <td style={{ border: "1px solid #dee2e6", padding: "12px" }}>{service.duration}</td>
            <td style={{ border: "1px solid #dee2e6", padding: "12px" }}>{service.description}</td>
            <td style={{ border: "1px solid #dee2e6", padding: "12px" }}>
              <Button
                variant="contained"
                color="error"
                onClick={() => handleDelete(service.id)}
              >
                Delete
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default AllServices;