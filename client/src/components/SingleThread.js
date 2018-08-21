import React, { Component } from 'react';
import { Item } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { Container, Divider } from 'semantic-ui-react';

const normalizeThumbnailData = source => {
  if (source === 'self' || source === 'default') {
    return 'http://www.portofinoselecta.com/images/joomlart/demo/default.jpg';
  } else {
    return source;
  }
};

const SingleThread = props => {
  const thumbnail = normalizeThumbnailData(props.thumbnail);
  return (
    <Item>
      {console.log(props)}
      <Item.Image size="small" src={thumbnail} />

      <Item.Content>
        <Item.Header as={Link} to={`/submissions/${props.id}`}>
          {props.title}
        </Item.Header>
        <Item.Description>
          <p>{`/r/${props.subreddit}`}</p>
          <p>{}</p>
        </Item.Description>
      </Item.Content>
    </Item>
  );
};

export default SingleThread;
