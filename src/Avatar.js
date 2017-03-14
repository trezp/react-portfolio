import React from 'react';
import './index.css';

var ProfileImage = React.createClass({
  render: function(){
    return <img src={this.props.imageUrl} />
  }
})

var ProfileLink = React.createClass({
  render: function(){
    return (
      <div>
        <a href={'https://www.github.com/' + this.props.username}>
          {this.props.username}
        </a>
      </div>
    )
  }
});

var ProfileName = React.createClass({
  render: function(){
    return (
      <div>
        <h1>{this.props.name}</h1>
      </div>
    )
  }
});

var Avatar = React.createClass({
  render: function(){
    return (
      <div>
        <ProfileImage imageUrl={this.props.user.imageUrl} />
        <ProfileLink username={this.props.user.username} />
        <ProfileName name={this.props.user.name}/>
      </div>
    )
  }
});

export default Avatar;
