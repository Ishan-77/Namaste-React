// class based component implementation of User.js
import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props); // super hona compulsorY hai

    //console.log(props);

    this.state = {
      // states variable  in class component
      count: 0,
      count2: 2,
    };
  }
  render() {
    // returns a piece of jsx
    // to take props constructor aayega
    const { name, location } = this.props;

    const { count } = this.state;

    return (
      <div className="user-card">
        <h2> count : {count}</h2>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Count increase
        </button>
        <h2>{name}</h2>
        <h2>Location: {location}</h2>
      </div>
    );
  }
}

export default UserClass;
