import searchYouTube from '../lib/searchYouTube.js';
import exampleVideoData from '../data/exampleVideoData.js';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      onlineVideos: searchYouTube('funny dogs', value => console.log(value)),
    };
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(event);
  }

  handleInputChange(event) {
    event.preventDefault();
    console.log(event.target.value);
    // this.setState({onlineVideos: searchYouTube(event.target.value, callback)});

  }


  render() {
    return (
      <div className="search-bar form-inline">
        <input className="form-control" type="text" value={this.handleInputChange}/>
        <button className="btn hidden-sm-down" onClick={this.handleSubmit}>
          <span className="glyphicon glyphicon-search"></span>
        </button>
      </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default Search;
