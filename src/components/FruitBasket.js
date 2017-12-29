import React, { Component }  from 'react';

import Filter from './Filter';
import FilteredFruitList from './FilteredFruitList.js';

const FruitBasket = function (props) {
  return (
    <div className="fruit-basket">
      <Filter
        filters={props.filters}
        handleChange={props.onUpdateFilter} />
      <FilteredFruitList
        fruit={props.fruit}
        filter={props.currentFilter} />
    </div>
  );
};

FruitBasket.defaultProps = {
  filters: [],
  fruit: [],
  currentFilter: 'all',
  updateFilterCallback: undefined
};

export default FruitBasket;
