import { data } from '../../data';

const repeat = obj => {
  const subCategories = obj?.child?.map(subCategory => {
    return (
      /*['Phones', 'Iphone', 'Iphone14', 'Iphone 14 512GB', 'Iphone 14 512GB Black', 'Iphone 14 1TB', 'Samsung', 'Laptops']*/
      <div key={subCategory.name}>
        {subCategory.name}
        {repeat(subCategory)}
      </div>
    );
  });

  return subCategories;
};

const Dropdown = () => {
  const createCategories = () => {
    const finalArray = data.map(category => {
      return (
        <div key={category.name}>
          {category.name}
          {repeat(category)}
        </div>
      );
    });
    return finalArray;
  };
  return <div>{createCategories()}</div>;
};

export default Dropdown;
