import React, { Component } from 'react';
import { Item } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { Container, Divider } from 'semantic-ui-react';

const normalizeThumbnailLinks = source => {
  try {
    const newUrl = new URL(source);
    return newUrl;
  } catch (err) {
    return 'http://www.portofinoselecta.com/images/joomlart/demo/default.jpg';
  }
};

const SingleThread = props => {
  const thumbnail = normalizeThumbnailLinks(props.thumbnail);
  console.log(props);
  return (
    <Item>
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
