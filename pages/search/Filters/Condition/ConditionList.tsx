const ConditionList = () => {
  return (
    <ul>
      {['New', 'Good', 'Like new', 'Fair', 'Poor'].map((condition) => (
        <li>{condition}</li>
      ))}
    </ul>
  );
};

export default ConditionList;
