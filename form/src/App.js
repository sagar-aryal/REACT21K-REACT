import React, { Component } from "react";

import Form from "./Components/Form";
import NotesList from "./Components/NotesList";
import PopUp from "./Components/PopUp";
import View from "./Components/View";

class App extends Component {
  state = {
    inputData: {
      firstname: "",
      lastname: "",
      phonenumber: "",
      role: "",
      message: "",
    },
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
      inputData: {
        ...this.state.inputData,
        [event.target.name]: event.target.value,
      },
    });
    //console.log(event.target.value);
  };

  handlePopUp = (event) => {
    this.setState({
      openPopUp: true,
    });
    event.preventDefault();
  };

  sendDataHandler = () => {
    const requestOptions = {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(this.state.inputData),
    };
    fetch("http://localhost:3001/notes", requestOptions);
    // .then((res) => res.json())
    //.then((data) => this.setState({ postId: data.id }));
    alert("Note is posted", window.location.reload());
  };

  render() {
    return (
      <div>
        <Form onChange={this.handleChange} onClick={this.handlePopUp} />
        <View {...this.state.inputData} />
        {this.state.openPopUp && (
          <PopUp {...this.state.inputData} onClick={this.sendDataHandler} />
        )}
        <NotesList notes={this.state.notes} />
      </div>
    );
  }
}

export default App;
