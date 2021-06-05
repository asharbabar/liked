import React from 'react'
import { MdCancel, MdCheck } from "react-icons/md";

const blockName = 'modal';

export default function Modal({ text, onCancel, onProceed }) {
  return (
    <div className={`${blockName}__container`}>
      <div className={`${blockName}__body`}>
       <h3>{text}</h3>
       <div className="modal-btn">
        <button onClick={onCancel} className="cancel"><MdCancel /> Cancel</button>
        <button onClick={onProceed} className="proceed"><MdCheck /> Proceed</button>
       </div>
      </div>
    </div>
  )
}
