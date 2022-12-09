const headlineStyle = {
  color: 'blue',
  padding: '8px',
  fontSize: '2em',
};
const HeadlineText = ({ headline, text }) => {
  return (
    <div>
      <h5 style={headlineStyle}>{headline}</h5>
      <p>{text}</p>
    </div>
  );
};
export default HeadlineText;
