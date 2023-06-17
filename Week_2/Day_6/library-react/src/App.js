import './App.css';

import {useState} from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import BookForm from './components/BookForm';
import BookTable from './components/BookTable';

function App() {

  const [books, setBooks] = useState([])

  function onBookCreated(book){
    setBooks([...books, book]);
  }
  return (
    <div className=" text-center m-5">
      <div className="card p-4">
        <BookForm onBookCreated={onBookCreated}></BookForm>
        <BookTable></BookTable>
    </div>
  </div>
  );
}

export default App;
