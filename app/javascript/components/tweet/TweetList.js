/* eslint-disable camelcase */

import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class TweetList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
    };

    this.searchInput = React.createRef();
    this.updateSearchTerm = this.updateSearchTerm.bind(this);
  }

  updateSearchTerm() {
    this.setState({ searchTerm: this.searchInput.current.value });
  }

  matchSearchTerm(obj) {
    const {
      id, published, created_at, updated_at, ...rest
    } = obj;
    const { searchTerm } = this.state;

    return Object.values(rest).some(
      value => value.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1,
    );
  }

  renderTweets() {
    const { activeId, tweets } = this.props;
    const filteredTweets = tweets
      .filter(el => this.matchSearchTerm(el))
      .sort((a, b) => new Date(b.tweet_date) - new Date(a.tweet_date));

    return filteredEvents.map(tweet => (
      <li key={tweet.id}>
        <Link to={`/tweets/${tweet.id}`} className={activeId === tweet.id ? 'active' : ''}>
          {tweet.tweet_date}
          {' - '}
          {tweet.tweet_type}
        </Link>
      </li>
    ));
  }

  render() {
    return (
      <section className="TweetList">
        <h2>
        tweets
          <Link to="/tweets/new">Say Something</Link>
        </h2>

        <input
          className="search"
          placeholder="Search"
          type="text"
          ref={this.searchInput}
          onKeyUp={this.updateSearchTerm}
        />

        <ul>{this.renderTweets()}</ul>
      </section>
    );
  }
}

TweetList.propTypes = {
  activeId: PropTypes.number,
  tweets: PropTypes.arrayOf(PropTypes.object),
};

TweetList.defaultProps = {
  activeId: undefined,
  tweets: [],
};

export default TweetList;
