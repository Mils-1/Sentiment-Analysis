import React, { Component } from 'react';
import { Item } from 'semantic-ui-react';
import { Container, Divider } from 'semantic-ui-react';

const handleThumbnailData = source => {
  if (source === 'self' || source === 'default') {
    return '';
  } else {
    return source;
  }
};

const SingleThread = props => {
  const thumbnail = handleThumbnailData(props.thumbnail);
  return (
    <Item>
      {console.log(props)}
      <Item.Image size="small" src={thumbnail} />

      <Item.Content>
        <Item.Header as="a">{props.title}</Item.Header>
        <Item.Description>
          <p>{`/r/${props.subreddit}`}</p>
          <p>{}</p>
        </Item.Description>
      </Item.Content>
    </Item>
  );
};

export default SingleThread;


