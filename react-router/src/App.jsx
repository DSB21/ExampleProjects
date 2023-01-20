import './App.css';
import { Link, Routes, Route } from 'react-router-dom';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';
import { useState } from 'react';
const App = () => {
  const [state, setState] = useState('TestState');
  const changeValue = (value) => {
    setState(value);
  };
  return (
    <div>
      <Link to='/'>Startseite</Link>
      <Link to='/page1'>Seite 1</Link>
      <Link to='/page2'>Seite 2</Link>

      <Routes>
        <Route path='/' element={<div>Ich bin die Startseite</div>} />
        <Route
          path='page1'
          element={
            <Page1
              title='Title'
              content='Ich bin der Content'
              stateValue={state}
              changeValue={changeValue}
            />
          }>
          <Route path='1234' element={<div>We have a userId</div>}></Route>
          <Route path=':id' element={<div>We have a userId</div>}></Route>
        </Route>
        <Route path='page2' element={<Page2 stateValue={state} />} />
        <Route path='*' element={<div>404 Page not Found</div>} />
      </Routes>
    </div>
  );
};

export default App;
