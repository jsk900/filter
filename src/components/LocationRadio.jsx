import React, { Fragment } from 'react';

const LocationRadio = ({ location, setLocation, data }) => {
  const [...locationArray] = new Set([...data].map((item) => item.location));

  return (
    <>
      <input
        type='radio'
        value='all'
        checked={location === 'all'}
        onChange={(e) => setLocation(e.target.value)}
      />
      <label>all</label>
      {locationArray.map((item) => (
        <Fragment key={item}>
          <input
            type='radio'
            value={item}
            checked={location === item}
            onChange={(e) => setLocation(e.target.value)}
          />
          <label>{item}</label>
        </Fragment>
      ))}
    </>
  );
};

export default LocationRadio;
