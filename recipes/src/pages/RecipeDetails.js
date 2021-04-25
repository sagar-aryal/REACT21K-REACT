import { React, Component } from "react";
import ReactPlayer from "react-player/youtube";

class RecipeDetails extends Component {
  state = {
    viewRecipe: [],
  };

  componentDidMount() {
    const id = this.props.location.state.id;
    fetch(`http://localhost:3001/recipes/${id}`)
      .then((res) => res.json())
      .then((recipe) =>
        this.setState({
          viewRecipe: recipe,
        })
      );
  }

  render() {
    const props = this.state.viewRecipe;

    return (
      <div className="container">
        <div className="card">
          <img className="image" src={props.image} alt={props.name} />
          <p className="name">{props.name}</p>
          <p className="description">{props.description}</p>
          <ul className="ingredients">{props.ingredients}</ul>
          <ReactPlayer className="video" url={props.video} width="100%" />
        </div>
      </div>
    );
  }
}

export default RecipeDetails;
