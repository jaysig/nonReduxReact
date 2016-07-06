import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar.js';
import VideoList from './components/video_list.js';
const API_KEY = 'AIzaSyAbdXj8dIcl6PdhYtwyWYRQc9Sb0fBQ6X4';

// ReactDOM.render(
//   <Provider store={createStoreWithMiddleware(reducers)}>
//     <App />
//   </Provider>
//   , document.querySelector('.container'));

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
     videos: []
    };
    YTSearch({key: API_KEY, term:'surfboards'}, (videos) => {
      this.setState({ videos });
    });
  }
  render() {
    return (
      <div>
        <SearchBar />
        <VideoList videos={this.state.videos} />
    </div>
  );
}
}

// Takes this component's generate html and put it
// on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
