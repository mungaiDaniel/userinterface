import axios from 'axios';
import React, {useState, useEffect} from 'react';
import { Table } from 'react-bootstrap';
import { Button } from '@mui/material';



const AllServices = () => {

    const [services, setServices] = useState([])
    const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await axios.get("https://trina-overmild-cristobal.ngrok-free.dev/api/v1/stylings");
        setServices(response.data);
      } catch (err) {
        console.error("Error fetching services:", err);
        alert('Failed to load services. Please try again.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchServices();
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this service?')) return;
    
    try {
      await axios.delete(`https://trina-overmild-cristobal.ngrok-free.dev/api/v1/stylings/${id}`, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem("access_token")}`
        }
      });
      
      setServices(services.filter(service => service.id !== id));
      alert('Service deleted successfully!');
    } catch (err) {
      console.error('Delete error:', err);
      alert(err.response?.data?.message || 'Failed to delete service. Please try again.');
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