import { useState } from 'react';
import HeadlineText from '../../global/headline-text/HeadlineText';
import Checkout from './Checkout/Checkout';

const SecondSection = ({ headline, text, src }) => {
  let [formValue, setFormValue] = useState('Fritz');
  //use an additional Function to set Value
  const change = (event) => {
    setFormValue(event.target.value);
  };
  return (
    <div>
      <div>{formValue}</div>
      <img src={src} />
      <HeadlineText headline={headline} text={text} />
      <Checkout activeValue={formValue} changeValue={setFormValue} />
    </div>
  );
};
export default SecondSection;
