// Dependencies
import React, { Component } from 'react';

// Redux
import { connect } from 'redux';

class BookDetail extends Component {
  render() {
    return (
      <div>Book Details!</div>
    );
  }
}

function mapStateToProps(state) {
  return {
    book: state.activeBook
  };
}

export default connect(mapStateToProps)(BookDetail);