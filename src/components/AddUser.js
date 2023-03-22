import React, { useState } from "react";
import  'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap'
import axios from "axios";
import { useNavigate } from "react-router-dom";
 
const AddUser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("Male");
  const navigate = useNavigate();
 
  const saveUser = async (e) => {
    e.preventDefault();
    try {
      await axios.post("https://kinmatcrudappserver.onrender.com/users", {
        name,
        email,
        gender,
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
 
  return (
    <Container>
      <Row>
          <div className="column is-half">
        <form onSubmit={saveUser}>
          <Col md>
            <label className="label">Name</label>
            <div className="control">
              <input
                type="text" placeholder="Emter Name:"
                className="input"
                value={name}
                onChange={(e) => setName(e.target.value)}
                />
            </div>
            </Col>
          <Col>
            <label className="label">Email</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter Email:"
              />
            </div>
          </Col>
          <Col md>
            <label className="label">Gender</label>
            <div className="control">
              <div className="select is-fullwidth">
                <select
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                >
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>
            </div>
             </Col>    
          <Col>
            <div className="control">
              <button type="submit" className="button is-success">
                Save
              </button>
            </div>
          </Col>
        </form>
      </div>
    </Row>
    </Container>
  );
};
 
export default AddUser;
