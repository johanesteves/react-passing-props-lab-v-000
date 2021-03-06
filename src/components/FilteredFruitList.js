import React, { Component } from 'react';

const FilteredFruitList = function (props) {
  let filter = props.filter;

  const list = !filter || filter === 'all' ? props.fruit : props.fruit.filter(i => i.fruit_type === filter);

  return(
    <ul className="fruit-list">
      {list.map((item, index) => <li key={index}>{item.char}</li>)}
    </ul>
  )
};

FilteredFruitList.defaultProps = {
  filter: 'all',
  fruit: []
};

//
// class FilteredFruitList extends Component {
//   constructor(props) {
//     super(props);
//
//     this.state = {
//       items: []
//     };
//   }
//
//   componentWillMount() {
//     fetch('/api/fruit')
//       .then(response => response.json())
//       .then(items => this.setState({ items }));
//   }
//
//   render() {
//     const list = !this.props.filter || this.props.filter === 'all' ? this.state.items : this.state.items.filter(i => i.fruit_type === this.props.filter);
//
//     return (
//       <ul className="fruit-list">
//         {list.map((item, index) => <li key={index}>{item.char}</li>)}
//       </ul>
//     );
//   }
// }

export default FilteredFruitList;
