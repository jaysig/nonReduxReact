import React,{ Component } from 'react';

// const SearchBar = () => <input />

class SearchBar extends Component {
  // onInputChange(event) {
  //   console.log(event.target.value)
  // }
  //NOTE: This creates state
  constructor(props){
    super(props);

    this.state = { term: ''};
  }
  render() {
    return (
      <div>
        <input
        value={this.state.term}
        onChange={ event => this.setState({ term: event.target.value }) } />
      </div>
    );
  }
}


export default SearchBar;
