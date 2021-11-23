import React from 'react'
import { FaPaperPlane } from 'react-icons/fa';

export default function ContactComponent() {
  return (
    <div className={'componentContainer'}>
      <p className={'title'}>Contact me at</p>
      <a className={'mailStyle'} href="mailto:oya@oyabenlioglu.com"><FaPaperPlane /></a>
    </div>
  )
}

