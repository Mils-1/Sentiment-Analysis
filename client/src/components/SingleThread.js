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
  const { id, thumbnail, url, title, subreddit, permalink } = props;
  const normalizedThumbnail = normalizeThumbnailLinks(thumbnail);
  return (
    <Item>
      <a href={url}>
        <Item.Image size="small" src={normalizedThumbnail} />
      </a>

      <Item.Content>
        <Item.Header as={Link} to={`/submissions/${id}`}>
          {title}
        </Item.Header>
        <Item.Description>
          <p>{`/r/${subreddit}`}</p>
          <a href={`http://reddit.com${permalink}`}>permalink</a>
        </Item.Description>
      </Item.Content>
    </Item>
  );
};

export default SingleThread;
