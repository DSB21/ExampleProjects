import HeadlineText from '../global/headline-text/HeadlineText';

const Header = ({ headline, buttonText }) => {
  return (
    <div>
      <img />
      <h1>{headline}</h1>
      <button>{buttonText}</button>
    </div>
  );
};
export default Header;
