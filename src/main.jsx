
import { createRoot } from 'react-dom/client'
import RecipeCard from "./Recipe";
import Data from "./components/Data.js";
import { useState } from "react";
import './index.css'
const root = createRoot(document.getElementById('root'));

function RecipeCards(){
    return(
      <>
      <header className="mainhead">RECIPE MENU CARD</header>
      <div className="MainParent">
        {Data.map((item, id) => (   
            <RecipeCard 
             item={item}
             id={id}
             />              
      ))}
      </div>
    </>
    );
}

function Wishlist() {
  const [liked, setLiked] = useState(false);

  return (
    <button onClick={() => setLiked(!liked)}>
      {liked ? "❤️ Added" : "🤍 Add to Wishlist"}
    </button>
  );
}


root.render(<RecipeCards/>)