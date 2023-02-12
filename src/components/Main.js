import React from 'react'
import ecom from "./ecom.PNG"
import movie from "./movie.PNG"
import footb from "./footb.PNG"
import business from "./business.PNG"
import gpt3 from "./gpt3.PNG"
import recipeimg from "./recipeimg.PNG"
import restaurantimg from "./restaurantimg.PNG"
import ecommerce2 from "./ecommerce2.PNG"
import "./main.css"

function Main() {
  return (
    <div className='main-cont'>
        <a href='https://venerable-cajeta-07eb86.netlify.app/' target="_blank" >
            <div>
                <img src={ecommerce2}/>
                <h2>Ecommerce App</h2>
            </div>
        </a>
        <a href='https://fabulous-hotteok-2cd638.netlify.app/' target="_blank" >
            <div>
                <img src={movie}/>
                <h2>Movies</h2>
            </div>
        </a>
        <a href='https://luminous-toffee-fdc367.netlify.app/' target="_blank" >
            <div>
                <img src={recipeimg}/>
                <h2>Recipe</h2>
            </div>
        </a>
        <a href='https://reliable-dusk-8d266e.netlify.app/' target="_blank" >
            <div>
                <img src={business}/>
                <h2>Business</h2>
            </div>
        </a>
        <a href='https://loquacious-pothos-da716b.netlify.app/' target="_blank" >
            <div>
                <img src={footb}/>
                <h2>Football</h2>
            </div>
        </a>
        <a href='https://aesthetic-cucurucho-8c075f.netlify.app/' target="_blank" >
            <div>
                <img src={restaurantimg}/>
                <h2>Restaurant</h2>
            </div>
        </a>
        <a href='https://reliable-dusk-8d266e.netlify.app/' target="_blank" >
            <div>
                <img src={gpt3}/>
                <h2>GPT</h2>
            </div>
        </a>

    </div>
  )
}

export default Main