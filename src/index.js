import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar.js';
import VideoList from './components/video_list.js';
import VideoDetail from './components/video_detail.js';
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
      videos: [],
      selectedVideo: null,
    };
    this.videoSearch('surfboards');
  }

  videoSearch(term) {
    YTSearch({ key: API_KEY, term: term }, (videos) => {
      this.setState({
        videos,
        selectedVideo: videos[0],
      });
    });
  }
  render() {
    const videoSearch = _.debounce((term) => { this.videoSearch(term); }, 300);
    return (
      <div>
        <SearchBar onSearchTermChange={ videoSearch } />
        <VideoDetail video={ this.state.selectedVideo } />
        <VideoList
          onVideoSelect={ selectedVideo => this.setState({ selectedVideo }) }
          videos={ this.state.videos }
        />
      </div>
  );
  }
}

// Takes this component's generate html and put it
// on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
