import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Actions } from "../store/reducer";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";

const AddData = () => {
  let navigate = useNavigate();
  let dispatch = useDispatch();
  
  const [item, setItem] = useState({
    id: Math.random(),
    name: "",
    email: "",
    phone: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(Actions.add_item(item));
    navigate("/");
  };
  const onChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setItem({ ...item, [name]: value });
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Your Name</Form.Label>
          <Form.Control type="text" placeholder="Your Name" id="name" name="name" value={item.name} onChange={onChange} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" id="email" name="email" value={item.email} onChange={onChange} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicphone">
          <Form.Label>Your Phone Number</Form.Label>
          <Form.Control type="text" placeholder="Phone"id="phone" name="phone" value={item.phone} onChange={onChange} />
        </Form.Group>

        <Button variant="primary" type="submit">
          Add Record
        </Button>
      </Form>
    </Container>
  );
};

export default AddData;
