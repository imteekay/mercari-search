const PriceList = () => {
  return (
    <ul>
      {[
        'Under $25',
        '$25 to $50',
        '$50 to $100',
        '$100 to $200',
        '$200 and up',
      ].map((price) => (
        <li>{price}</li>
      ))}
    </ul>
  );
};

export default PriceList;
