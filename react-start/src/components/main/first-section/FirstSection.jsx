import HeadlineTextButton from './HeadlineTextButton/HeadlineTextButton';
import './FirstSection.css';
import { useState } from 'react';
const FirstSection = ({ headline, children }) => {
  let [show, setShow] = useState(false);
  let showHalf = null;
  if (show) {
    showHalf = (
      <>
        <HeadlineTextButton headline='one' text='One' buttonText='Button one' />

        <HeadlineTextButton headline='two' text='Two' buttonText='Button two' />
      </>
    );
  }

  return (
    <div className='flex'>
      <h2 style={{ width: '100%' }}>{headline}</h2>
      {showHalf}
      {show ? (
        <HeadlineTextButton
          headline='three'
          text='Three'
          buttonText='Button three'
        />
      ) : null}
      <HeadlineTextButton
        headline='four'
        text='Four'
        buttonText='Button four'
      />
    </div>
  );
};
export default FirstSection;
