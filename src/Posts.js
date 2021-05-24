import React from 'react'
import './Posts.css'
import {Avatar} from '@material-ui/core'

function Posts({username,caption,imageUrl}) {
    return (
        <div className='post'>
             <div className="post__header">
              <Avatar 
                className='post__avatar'
                alt='Marcos'
                src=''
              />
             <h3>{username}</h3>
             </div>

            <img className='post__image'
            src={imageUrl}
            alt="" />

            <h4 className='post__text'><strong>{username}:</strong>{caption}</h4>
            
        </div>
    )
}

export default Posts