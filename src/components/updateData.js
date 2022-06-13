import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { Actions } from '../store/reducer'

const UpdateData = () => {
    const items = useSelector(state => state.reducer.items)
    let navigate = useNavigate()
    let dispatch = useDispatch()
    const { id } = useParams()
    const [item, setItem] = useState({})
    useEffect(() => {
        let itemExist = items.find((item) => {
            return item.id == id
        })
        setItem(itemExist)
    }, [])

    const onChange = (e) => {
        let name = e.target.name
        let value = e.target.value
        setItem({ ...item, [name]: value })
    }

    const updateItemHandler = (e) => {
        e.preventDefault()
        dispatch(Actions.update_item(item))
        navigate('/')
    }
    return (
        <Container>
          <Form onSubmit={updateItemHandler}>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Your Name</Form.Label>
              <Form.Control type="text" placeholder="Your Name" id="name" name="name" value={item.name} onChange={onChange} />
            </Form.Group>
    
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>New Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" id="email" name="email" value={item.email} onChange={onChange} />
            </Form.Group>
    
            <Form.Group className="mb-3" controlId="formBasicphone">
              <Form.Label>New Phone Number</Form.Label>
              <Form.Control type="text" placeholder="Phone"id="phone" name="phone" value={item.phone} onChange={onChange} />
            </Form.Group>
    
            <Button variant="primary" type="submit">
              Update Record
            </Button>
          </Form>
        </Container>
      );
}

export default UpdateData