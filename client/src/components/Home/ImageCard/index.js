import React from 'react'
import { MdFavorite } from "react-icons/md";
import axios from 'axios';
import { useHistory } from "react-router-dom";
import get from 'lodash/get';

const blockName = 'image-card';

const getFormattedTags = tags => (tags.split(",").map(tag => (`#${tag} `)));


export default function ImageCard({ postImage, username, title, description, picture, price, likes, tags, id }) {

  const history = useHistory();

  async function unlikePost({ id }) {
    const response = await axios.post("/api/update-like", { id, action: true});
    console.log('response', response);
    const { status } = get(response, 'data');
    if (status === 204) history.push("/liked")
  }

  return (
    <div className={`${blockName}__container`}>
      <div className={`${blockName}__head`}>
        <div className={`${blockName}__display-picture`}>
            <img src={picture} alt="" />
        </div>
        <div className={`${blockName}__username`}>
          {username}
        </div>
      </div>
      <div className={`${blockName}__image`}>
        <img src={postImage} alt="" />
        <div className={`${blockName}__overlay overlay`}>
          <div className="left-section">
            <p>{title}</p>
            <h3>AED {price}</h3>
          </div>
          <button className="like-button" onClick={() => unlikePost({ id })}><MdFavorite /></button>
        </div>
      </div>
      <div className={`${blockName}__content`}>
        <p className={`${blockName}__likes`}>
            <MdFavorite /> {likes} likes
        </p>
        <div className={`${blockName}__comments-block`}>
          <p className={`${blockName}__description`}>
            {description}
          </p>
          <p className={`${blockName}__tags`}>
              {getFormattedTags(tags)}
          </p>
          <p className={`${blockName}__comments`}>{`View ${likes} comments`}</p>
        </div>
      </div>
    </div>
  )
}
