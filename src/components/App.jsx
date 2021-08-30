import React, { useState, useEffect } from 'react';
import '../css/App.css';

//Import components
import LocationRadio from './LocationRadio';
import CategoryRadio from './CategoryRadio';

//Import data file
import dataFile from '../data/data';

const App = () => {
  //setup states
  const [location, setLocation] = useState('all');
  const [category, setCategory] = useState('all');
  const [data] = useState(dataFile);
  const [filteredData, setFilteredData] = useState(data);

  //We use useEffect to re-render any new search inputs. If our category state changes or our location state changes, the effect will run again.
  useEffect(() => {
    //If both radio buttons are set to 'all' show all the data
    if (location === 'all' && category === 'all') setFilteredData(data);

    //If location buttons are not set to 'all' and category buttons are not set to 'all' filter on selected location and category
    if (location !== 'all' && category !== 'all')
      setFilteredData(
        data.filter(
          (item) => item.category === category && item.location === location
        )
      );

    //If location is not set to 'all' and category is set to 'all' filter on location only
    if (location !== 'all' && category === 'all')
      setFilteredData(data.filter((item) => item.location === location));

    //If category is not set to 'all' and location is set to 'all' filter on category only
    if (category !== 'all' && location === 'all')
      setFilteredData(data.filter((item) => item.category === category));
  }, [category, location, data]);

  return (
    <>
      <section>
        <h2>Categories</h2>
        <CategoryRadio
          category={category}
          setCategory={setCategory}
          data={data}
        />
      </section>

      <section>
        <h2>Locations</h2>
        <LocationRadio
          location={location}
          setLocation={setLocation}
          data={data}
        />
      </section>
      <aside>
        {filteredData.map((item) => (
          <div key={item.id}>
            {/* Change style dependent on search criteria.  */}
            <p
              className={
                location === 'all' && category === 'all' ? 'bold' : undefined
              }>
              {item.id}
            </p>
            <p className={category !== 'all' ? 'bold' : undefined}>
              {item.category}
            </p>
            <p className={location !== 'all' ? 'bold' : undefined}>
              {item.location}
            </p>
          </div>
        ))}
      </aside>
    </>
  );
};

export default App;
