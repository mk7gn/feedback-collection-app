import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Header extends Component {
  renderContent() {
    const {auth} = this.props;
    if (auth === null) {
      return;
    }
    if (auth === false) {
      return (
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li><a href="/auth/google">Login with Google</a></li>
        </ul>
      );
    }
    return (
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li>{auth.firstName} {auth.lastName}</li>
        <li><a href="/auth/logout">Logout</a></li>
      </ul>
    );
  }

  render() {
    console.log(this.props);
    return (
      <nav>
        <div className="nav-wrapper">
          <Link to={this.props.auth ? '/surveys' : '/'}
                className="brand-logo">
                Emaily
          </Link>
          { this.renderContent() }
        </div>
      </nav>
    );
  }
}

function mapStateToProps({auth}) {
  return { auth };
};

export default connect(mapStateToProps)(Header);
