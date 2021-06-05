const CategoriesList = () => {
  return (
    <ul>
      {['category1', 'category2'].map((category) => (
        <li>{category}</li>
      ))}
    </ul>
  );
};

export default CategoriesList;
