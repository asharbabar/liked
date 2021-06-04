import React, { Component } from 'react';
import ImageCard from '../ImageCard';
import { images } from '../../fakeData';

const blockName = 'home';

class Home extends Component {
  renderContent = () => {
    return images.map((image) => (
      <ImageCard
        postImage={image.post_url}
        picture={image.picture}
        username={image.username}
        title={image.title}
        description={image.description}
        price={image.price}
        likes={image.likes}
        tags={image.tags}
      />
    ));
  };

  render() {
    return (
      <div className={`${blockName}__container`}>{this.renderContent()}</div>
    );
  }
}

export default Home;
