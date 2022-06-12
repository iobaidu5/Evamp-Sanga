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

    const handleChange = (e) => {
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
        <div className='container mx-auto flex justify-center  mb-10'>
            <div className='w-full md:w-96 border p-4 rounded shadow-md text-gray-800 mx-2 my-2'>
                <p className='text-center font-bold text-2xl mb-4'>Update Item</p>
                <form onSubmit={updateItemHandler}>
                    <div className='flex flex-col'>
                        <label htmlFor='name' className='text-xs mb-2 font-bold'>Name</label>
                        <input
                            id='name'
                            placeholder='Enter name'
                            name="name"
                            className='border rounded p-1 focus:outline-none'
                            value={item.name}
                            onChange={(handleChange)} />
                    </div>
                    <div className='flex flex-col my-2'>
                        <label htmlFor='userName' className='text-xs mb-2 font-bold'>Item Name</label>
                        <input
                            id='userName'
                            placeholder='Enter item name'
                            name='username'
                            className='border rounded p-1 focus:outline-none'
                            value={item.username}
                            onChange={handleChange} />
                    </div>
                    <div className='flex flex-col my-2'>
                        <label htmlFor='email' className='text-xs mb-2 font-bold'>Email</label>
                        <input
                            id='email'
                            placeholder='Enter email'
                            name='email'
                            className='border rounded p-1 focus:outline-none'
                            value={item.email}
                            onChange={handleChange} />
                    </div>
                    <div className='flex flex-col my-2'>
                        <label htmlFor='phone' className='text-xs mb-2 font-bold'>Phone</label>
                        <input
                            id='phone'
                            placeholder='Enter phone'
                            name='phone'
                            className='border rounded p-1 focus:outline-none'
                            value={item.phone}
                            onChange={handleChange} />
                    </div>
                    <div className='flex flex-col my-2'>
                        <label htmlFor='website' className='text-xs mb-2 font-bold'>Website</label>
                        <input
                            id='website'
                            placeholder='Enter website name'
                            name='website'
                            className='border rounded p-1 focus:outline-none'
                            value={item.website}
                            onChange={handleChange} />
                    </div>
                    <button type='submit' className='bg-blue-500 rounded-lg w-full text-white p-2 mt-8'>Update Item</button>
                </form>
            </div>
        </div>
    )
}

export default UpdateData