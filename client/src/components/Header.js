import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Payments from './Payments';

class Header extends Component {
  renderContent() {
    const {auth} = this.props;
    if (auth === null) {
      return;
    }
    if (auth === false) {
      return [
          <li key="1"><a href="/">Login</a></li>,
          <li key="2"><a href="/auth/google">Login with Google</a></li>,
          <li key="3"><a href="/auth/facebook">Login with Facebook</a></li>
      ];
    }
    return [
        <li key="1"><Payments /></li>,
        <li key="2">{auth.firstName} {auth.lastName}</li>,
        <li key="3"><a href="/auth/logout">Logout</a></li>
    ];
  }

  render() {
    return (
      <nav className="teal lighten-2">
        <div className="nav-wrapper row">
          <div className="col m6">
            <Link to={this.props.auth ? '/surveys' : '/'}
                  className="brand-logo">
              <i className="material-icons">email</i>Emaily
            </Link>
          </div>
          <div className="col m6 right">
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              { this.renderContent() }
            </ul>
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
