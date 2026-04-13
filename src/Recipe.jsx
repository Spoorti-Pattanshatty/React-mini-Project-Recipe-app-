import React from "react";

export default function RecipeCard(props) {
  return (
    <div className="recipe-container">
      <header className="recipe-header">
        <h2>{props.item.RecipeName}</h2>
        <p>{props.item.Time}</p>
      </header>
      <section className="recipe-details">
        <div>
        <p>{props.item.Serving}</p>
        <p>{props.item.Difficulty}</p>
        <p>{props.item.Type}</p>
        </div>
        <img className="foodimg" src={props.item.Img} alt={props.item.RecipeName} />
      </section>  
        <footer className="recipe-footer">
            <p>{props.item.Chefname}</p>
        </footer>

    </div>
  );
}