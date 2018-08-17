import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Segment } from 'semantic-ui-react';
//<Link to="/about">About</Link>

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
        </Menu>
      </Segment>
    );
  }
}
