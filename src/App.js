import './App.css';
import NavigationBar from './components/navbar';
import { Route, Routes } from 'react-router-dom';
import Footer from './components/footer';
import { useDispatch, useSelector } from 'react-redux';
import { Actions } from './store/reducer';
import { useEffect } from 'react';
import AddData from './components/addData';
import UpdateData from './components/updateData';
import DisplayData from './components/displayData';
import api from './response/api';

function App() {
  const items = useSelector(state => state.reducer.items)
  const dispatch = useDispatch()


  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users').then((response) => {
      return response.json()
    }).then((response) => {
      dispatch(Actions.fetchallitems(response))
    }).catch(e => {
      console.log(e)
    })
  }, [])


  return (
    <div className="App">
      <NavigationBar />
      <hr className='mb-4' />
      <Routes>
        <Route path='/' element={<DisplayData items={items && items} />} />
        <Route path='add-item' element={<AddData />} />
        <Route path='update-item/:id' element={<UpdateData />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
