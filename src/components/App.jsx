//Refactor to es6 React component.
import exampleVideoData from '../data/exampleVideoData.js';
import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';
import { API_KEY, YOUTUBE_API_KEY } from '../config/config.js';

//console.log(exampleVideoData);
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: exampleVideoData,
    }; // unknown state as of writing
    this.handleClick = this.handleClick.bind(this);
  }

  // define handleClick function
  handleClick(event) {
    event.preventDefault();
    var targ2 = JSON.stringify(event.target.innerHTML);
    for ( let i = 0; i < this.state.videos.length; i++) {
      var targ = JSON.stringify(this.state.videos[i].snippet.title);
      if (targ === targ2) {
        this.setState({currentVideo: this.state.videos[i]});
      }
    }

    // loop through state data
    // find state.title, once found,
    //video id, id
    // call video player on that video
    // update videoPlayer
    console.log(this.state);
    console.log(event.target.innerHTML);
  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div><h5><em>search</em> view goes here</h5></div>
          </div>
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
}

// {/* <div><h5><em>videoList</em> view goes here</h5></div> */}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
