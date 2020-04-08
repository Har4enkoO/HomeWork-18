import React from 'react';
import './index.css';
import postData from './postPata';

function Post() {
  return (
    <div className="post">
      <div className="post-header">
        <img className="avatar" src={postData.author.photo} alt="avatar"></img>
        <div className="info">
          <div className="author-info">
            <div className='name'>{postData.author.name}</div>
            <div className='nickname'>{postData.author.nickname}</div>
            <div className='date'>{postData.date}</div>
          </div>
          <div className="text">{postData.content}</div>
        </div>
      </div>
      <div className="main-content">
        <img
          className="main-image"
          src={postData.image}
          alt="main-content"
        ></img>
      </div>
    </div>
  );
}

export default Post;
