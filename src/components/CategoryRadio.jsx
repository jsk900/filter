import React, { Fragment } from 'react';

const CategoryRadio = ({ category, setCategory, data }) => {
  //Here we take the data file passed to us as a prop from App.jsx.
  //We want to end up with an array containing all of our categories so that we can create our radio buttons dynamically.
  //But in our data file we have duplicates. So we need to create an array with only our categories. To remove duplicates we
  //place this array into a set. Sets have limited array type methods so we then convert the set back into an array.
  //Looking at the code below we can read it better from right to left.
  //We map our data array and create a new array with only the category. This array is then inserted into a set. The set is then inserted into array categoryArray.
  const [...categoryArray] = new Set([...data].map((item) => item.category));

  return (
    <>
      <input
        type='radio'
        value='all'
        checked={category === 'all'}
        onChange={(e) => setCategory(e.target.value)}
      />
      <label>all</label>

      {/* Here we map through our categories array creating radio buttons and labels dynamically. */}
      {categoryArray.map((item) => (
        <Fragment key={item}>
          <input
            type='radio'
            value={item}
            checked={category === item}
            onChange={(e) => setCategory(e.target.value)}
          />
          <label>{item}</label>
        </Fragment>
      ))}
    </>
  );
};

export default CategoryRadio;
