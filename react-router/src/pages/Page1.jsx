import React from 'react';
import { Outlet, useParams } from 'react-router-dom';

const Page1 = ({ title, content, stateValue, changeValue }) => {
  let { id } = useParams();
  return (
    <div>
      <Outlet />
      <h1>{title}</h1>
      <h1>Hello {id}</h1>
      <p>{content}</p>
      <div>{stateValue}</div>
      <button onClick={() => changeValue('page 1 clicked')}>Button</button>
    </div>
  );
};
export default Page1;
