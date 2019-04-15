import React, {Component} from 'react';

export default class Film extends Component {
  render() {
    return(
      <div className="film">
        <p></p>
        <a href={this.props.url}>{this.props.name}</a>
      </div>
    )
  }
}
