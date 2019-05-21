import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import TweetNotFound from './TweetNotFound';

const Tweet = ({ tweet, onDelete }) => {
  if (!tweet) return <TweetNotFound />;

  return (
    <div className="tweetContainer">
      <h2>
       
        <Link to={`/tweets/${tweet.id}/edit`}>Edit</Link>
        <button className="delete" type="button" onClick={() => onDelete(tweet.id)}>
          Delete
        </button>
      </h2>
      <ul>
       
        <li>
          <strong>Content:</strong>
          {' '}
          {tweet.title}
        </li>
        
      </ul>
    </div>
  );
};

Tweet.propTypes = {
  tweet: PropTypes.shape(),
  onDelete: PropTypes.func.isRequired,
};

Tweet.defaultProps = {
  tweet: undefined,
};

export default Tweet;
