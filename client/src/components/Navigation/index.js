import React from 'react'
import { Link } from 'react-router-dom';
import { MdHome, MdFavorite } from "react-icons/md";


const blockName = 'navigation';

export default function Navigation() {
  return (
    <div className={`${blockName}__container`}>
      <Link className={`${blockName}__nav`} to="/"><MdHome /></Link>
      <Link className={`${blockName}__nav`} to="/liked"><MdFavorite /></Link>
    </div>
  )
}
