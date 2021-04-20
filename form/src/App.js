import React, { Component } from "react";

import Form from "./Components/Form";
import NotesList from "./Components/NotesList";
import PopUp from "./Components/PopUp";
import View from "./Components/View";

class App extends Component {
  state = {
    firstname: "",
    lastname: "",
    phonenumber: "",
    role: "",
    message: "",

    openPopUp: false,
    notes: [],
  };

  componentDidMount() {
    fetch("http://localhost:3001/notes")
      .then((res) => res.json())
      .then((data) =>
        this.setState({
          notes: data,
        })
      );
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
    //console.log(event.target.value);
  };

  handlePopUp = (event) => {
    this.setState({
      openPopUp: true,
    });
    event.preventDefault();
  };

  render() {
    const props = {
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      phonenumber: this.state.phonenumber,
      role: this.state.role,
      message: this.state.message,
    };
    return (
      <div>
        <Form onChange={this.handleChange} onClick={this.handlePopUp} />
        <View {...props} />
        {this.state.openPopUp && <PopUp {...props} />}
        <NotesList notes={this.state.notes} />
      </div>
    );
  }
}

export default App;
