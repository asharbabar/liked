import React, { Component } from 'react';
import isEmpty from 'lodash/isEmpty';
import axios from 'axios';
import get from 'lodash/get';

import ImageCard from './ImageCard';

const blockName = 'home';

class Home extends Component {

  state = {  posts: [] }

  async componentDidMount() {
    const response = await axios.get("/api/all-posts");
    const posts =  get(response, ['data', 'posts'], []);
    this.setState({ posts });
  }

  renderContent = () => {
    const { posts } = this.state;
    // loops through posts and render imageCard component
    return posts.map((image) => {
      const {
        _id,
        post_url,
        picture,
        username,
        title,
        description,
        price,
        likes,
        tags,
        liked
      } = image;
      return (
        <ImageCard
          key={_id}
          id={_id}
          postImage={post_url}
          picture={picture}
          username={username}
          title={title}
          description={description}
          price={price}
          likes={likes}
          tags={tags}
          liked={liked}
        />
      );
    });
  };

  render() {
    return (
      <div className={`${blockName}__container`}>{this.renderContent()}</div>
    );
  }
}

export default Home;
