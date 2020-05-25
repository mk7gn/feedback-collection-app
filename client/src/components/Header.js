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
          <li><a href="">Login</a></li>
          <li><a href="/auth/google">Login with Google</a></li>
          <li><a href="/auth/facebook">Login with Facebook</a></li>
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
    return (
      <nav className="teal lighten-2">
        <div className="nav-wrapper row">
          <Link to={this.props.auth ? '/surveys' : '/'}
                className="brand-logo col m6">
            <i className="material-icons">email</i>Emaily
          </Link>
          <div className="col m6 right">
            { this.renderContent() }
          </div>
        </div>
      </nav>
    );
  }
}

function mapStateToProps({auth}) {
  return { auth };
};

export default connect(mapStateToProps)(Header);
