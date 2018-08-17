import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Segment, Icon } from 'semantic-ui-react';

export default class Navbar extends Component {
  state = { activeItem: 'home' };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <Segment inverted>
        <Menu inverted secondary>
          <Menu.Item
            as={Link}
            to="/home"
            name="home"
            active={activeItem === 'home'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            as={Link}
            to="/about"
            name="About"
            active={activeItem === 'About'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            as={Link}
            to="/search"
            name="Search"
            active={activeItem === 'Search'}
            onClick={this.handleItemClick}
          />
          <Menu.Item>
            <a
              href="https://github.com/Mils-1/Sentiment-Analysis"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon link name="github" size="big" />
            </a>
          </Menu.Item>
        </Menu>
      </Segment>
    );
  }
}
