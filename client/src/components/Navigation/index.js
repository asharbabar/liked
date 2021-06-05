import React from 'react'
import { Link } from 'react-router-dom';
import { MdHome, MdFavorite } from "react-icons/md";


const blockName = 'navigation';

export default function Navigation() {
  return (
    <div className={`${blockName}__container`}>
      <Link className={`${blockName}__nav`} to="/"><MdHome /><h3>Home</h3></Link>
      <Link className={`${blockName}__nav`} to="/liked"><MdFavorite /><h3>Liked</h3></Link>
    </div>
  )
}
