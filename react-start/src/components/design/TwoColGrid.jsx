const grid = {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
};
const TwoColGrid = ({ children }) => {
  return <div style={grid}>{children}</div>;
};
