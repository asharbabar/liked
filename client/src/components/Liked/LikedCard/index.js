import React, { Fragment, useState } from 'react';
import axios from 'axios';
import { useHistory } from "react-router-dom";
import { MdFavorite } from "react-icons/md";
import get from 'lodash/get';

import Modal from '../../Modal';

const blockName = 'liked-card';

export default function LikedCard({ post }) {
  const history = useHistory();
  const [showModal, setModal] = useState(false);

  async function unlikePost({ id }) {
    const response = await axios.post("/api/update-like", { id, action: false});
    const { status } = get(response, 'data');
    if (status === 204) history.push("/")
  }

  const {
    post_url,
    title,
    price,
  } = post;

  return (
    <Fragment>
    {showModal && <Modal text="Do you really want to remove this from favourites ? 💔" onCancel={() => setModal(false)} onProceed={() => unlikePost({id: post._id})} />}
    <div className={`${blockName}__container`}>
      <div className={`${blockName}__image active`} onClick={() => setModal(true)}>
        <img src={post_url} alt="" />
        <div className={`${blockName}__content overlay`}>
         <div className="left-section">
            <p>{title}</p>
            <h3>AED {price}</h3>
          </div>
          <button className="like-button active"><MdFavorite /></button>
        </div>
      </div>
    </div>
    </Fragment>
  )
}
