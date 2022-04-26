//Refactor to es6 React component.
import exampleVideoData from '../data/exampleVideoData.js';
import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';
import Search from './Search.js';
import searchYouTube from '../lib/searchYouTube.js';

//console.log(exampleVideoData);
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
    }; // unknown state as of writing
    this.handleClick = this.handleClick.bind(this);
    this.fetchState = this.fetchState.bind(this);
  }

  // define handleClick function
  handleClick(event) {
    event.preventDefault();
    var targ2 = event.target.textContent;
    for ( let i = 0; i < this.state.videos.length; i++) {
      var targ = this.state.videos[i].snippet.title;
      if (targ === targ2) {
        this.setState({video: this.state.videos[i]});
      }
    }

  }

  fetchState() {
    this.setState({
      videos: Search.state.onlineVideos
    });
  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <Search></Search>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer currentVideo={this.state.currentVideo || this.state.videos[0]}></VideoPlayer>
          </div>
          <div className="col-md-5">
            <VideoList videos={this.state.videos} handleClick={this.handleClick}></VideoList>
          </div>
        </div>
      </div>
    );
  }

  componentDidMount() {
    this.setState({videos: });
  }
}


// {/* <div className="col-md-6 offset-md-3">
// <div><h5><em>search</em> view goes here</h5></div>
// </div> */}
// {/* <div><h5><em>videoList</em> view goes here</h5></div> */}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
