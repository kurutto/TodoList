const Radio = ({ label, ...props }) => {
  return (
    <>
      <label><input type="radio" {...props} /> {label}</label>
    </>
  );
};

export default Radio;
