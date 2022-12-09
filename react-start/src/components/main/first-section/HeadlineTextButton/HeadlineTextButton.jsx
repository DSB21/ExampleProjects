import { useState, useEffect } from 'react';
import HeadlineText from '../../../global/headline-text/HeadlineText';
import './HeadlineTextButton.css';
const HeadlineTextButton = ({ headline, text, buttonText }) => {
  //Use useState to make sure to save this value after rendering
  let [count, setCount] = useState(0);
  //react to change of count, executed after rerendering
  useEffect(() => {
    return () => {
      console.log(count);
    };
  }, [count]);

  return (
    <div className='element'>
      <HeadlineText headline={headline} text={text} />
      <div>{count}</div>
      <button onClick={() => setCount((count = count + 1))}>
        {buttonText}
      </button>
    </div>
  );
};
export default HeadlineTextButton;
