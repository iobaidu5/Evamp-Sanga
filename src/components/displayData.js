import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Actions } from "../store/reducer";
import Table from "react-bootstrap/Table";
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

const DisplayData = (props) => {
  let navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <Container className="my-5">
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {props.items &&
          props.items.map((item) => {
            return (
                <tr>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.phone}</td>
                  <td>
                  <Button variant="info" onClick={() => {
                          navigate(`update-item/${item.id}`)
                      }} >Update</Button>{' '}
                  <Button variant="danger" onClick={() => {
                              dispatch(Actions.remove_item(item.id))
                          }}>Delete</Button>{' '}
                  </td>
                </tr>
              
            );
          })}
      </tbody>
    </Table>
    </Container>
  );
};

export default DisplayData;
