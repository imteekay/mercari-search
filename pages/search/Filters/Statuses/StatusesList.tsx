const StatusesList = () => {
  return (
    <ul>
      {['any', 'For sale', 'Sold'].map((status) => (
        <li>{status}</li>
      ))}
    </ul>
  );
};

export default StatusesList;
