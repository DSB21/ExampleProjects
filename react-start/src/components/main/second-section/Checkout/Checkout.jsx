const Checkout = ({ activeValue, changeValue }) => {
  return (
    <input
      type='text'
      value={activeValue}
      onChange={(event) => changeValue(event.target.value)}></input>
  );
};
export default Checkout;
