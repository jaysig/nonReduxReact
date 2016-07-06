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
      <div className="search-bar">
        <input
          value={ this.state.term }
          onChange={ event => this.onInputChange(event.target.value) }
        />
      </div>
    );
  }

  onInputChange(term) {
    this.setState({ term });
    this.props.onSearchTermChange(term);
  }
}


export default SearchBar;
