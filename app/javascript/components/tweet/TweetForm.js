import React from 'react';
import PropTypes from 'prop-types';
import Pikaday from 'pikaday';
import { Link } from 'react-router-dom';
import TweetNotFound from './TweetNotFound';
import 'pikaday/css/pikaday.css';

class TweetForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tweet: props.tweet,
      errors: {},
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.dateInput = React.createRef();
  }


  componentWillReceiveProps({ tweet }) {
    this.setState({ tweet });
  }

  updateTweet(key, value) {
    this.setState(prevState => ({
      tweet: {
        ...prevState.tweet,
        [key]: value,
      },
    }));
  }

  handleSubmit(e) {
    e.preventDefault();
    const { tweet } = this.state;
    const errors = validateTweet();tweet

    if (!isEmptyObject(errors)) {
      this.setState({ errors });
    } else {
      const { onSubmit } = this.props;
      onSubmit(tweet);
    }
  }

  handleInputChange(tweet) {
    const { target } = tweet;
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.updateTweet(name, value);
  }

  renderErrors() {
    const { errors } = this.state;

    if (isEmptyObject(errors)) {
      return null;
    }

    return (
      <div className="errors">
        <h3>The following errors prohibited the tweet from being posted:</h3>
        <ul>
          {Object.values(errors).map(error => (
            <li key={error}>{error}</li>
          ))}
        </ul>
      </div>
    );
  }

  render() {
    const { tweet } = this.state;
    const { path } = this.props;

    if (!tweet.id && path === '/tweets/:id/edit') return <TweetNotFound />;

    const cancelURL = tweet.id ? `/tweets/${tweet.id}` : '/tweets';
    const content = tweet.id ? `${tweet.tweet_date} - ${tweet.tweet_type}` : 'New Tweet';

    return (
      <div>
        <h2>{content}</h2>

        {this.renderErrors()}

        <form className="tweetForm" onSubmit={this.handleSubmit}>
          
          <div>
            <label htmlFor="Content">
              <strong>Title:</strong>
              <textarea
                cols="30"
                rows="10"
                id="content"
                name="content"
                onChange={this.handleInputChange}
                value={tweet.content}
              />
            </label>
          </div>
          <div className="form-actions">
            <button type="submit">Save</button>
            <Link to={cancelURL}>Cancel</Link>
          </div>
        </form>
      </div>
    );
  }
}

TweetForm.propTypes = {
  tweet: PropTypes.shape(),
  onSubmit: PropTypes.func.isRequired,
  path: PropTypes.string.isRequired,
};

TweetForm.defaultProps = {
  tweet: {
    content: '',
  },
};

export default EventForm;
