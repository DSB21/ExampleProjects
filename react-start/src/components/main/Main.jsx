import { useState } from 'react';

import FirstSection from './first-section/FirstSection';
import HeadlineText from '../global/headline-text/HeadlineText';
import SecondSection from './second-section/SecondSection';

const Main = (props) => {
  const [comp, setComp] = useState([
    { headline: 'one', text: 'one' },
    { headline: 'two', text: 'two' },
    { headline: 'three', text: 'three' },
    { headline: 'four', text: 'four' },
  ]);
  return (
    <div>
      <FirstSection headline='Section One Headline' />
      <SecondSection headline='Second Section' text='Second Text' />
      {comp.map((comp, index) => {
        return (
          <SecondSection
            headline={comp.headline}
            text={comp.text}
            key={index}
          />
        );
      })}
    </div>
  );
};
export default Main;
