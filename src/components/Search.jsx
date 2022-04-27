import searchYouTube from '../lib/searchYouTube.js';
import exampleVideoData from '../data/exampleVideoData.js';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      onlineVideos: searchYouTube('', value =>
        console.log(value)),
      userinput: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this);
    this.props.getVideos(this.state.userinput);
  }

  // setstate onlineVideos searchyoutube(this.userinput, cb)
  // cb sets App state with returned info from searchYoutuneVideo
  //console.log(this.state.userinput);

  handleInputChange(event) {
    event.preventDefault();
    // this.props.getVideos(event.target.value);
    this.setState({ userinput: event.target.value });
    console.log(event.target.value);
  }

  // onlineVideos: props.getVideos(event.target.value)

  render() {
    return (
      <div className="search-bar form-inline">
        <input className="form-control" type="text" value={this.state.userinput} onChange={this.handleInputChange} />
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
