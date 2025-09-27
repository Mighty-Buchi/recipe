import React from 'react'
import './Page.css'
import pic from './assets/image-omelette.jpeg'

const Page = () => {
  return (
    <div className='page'>
      <div className="pagecon">
        <img src={pic} alt="" />
        <h1>Simple Omelette Receipe</h1>
        <p>An easy and quick dish, perfect for any dish. The classic omelette combines beaten eggs cooked to perfection, optionally filled with your choice of cheese, vegetables or meats.</p>
        <div className="prep">
          <h3> Preparation time</h3>
          <ul>
            <li>Total: Approximately 10 minutes</li><br />
            <li>Preparation: 5 minutes</li><br />
            <li>Cooking: 5 minutes</li><br />
          </ul>
        </div>
        <h2>Ingredients</h2>
        <ul>
          <li>2-3 large eggs</li><br />
          <li>Salt, to taste</li><br />
          <li>pepper, to taste</li><br />
          <li>1 tablespoon of butter or oil</li><br />
          <li>Optiona fillings, cheese,diced vegetables, cooket meats, herbs.</li>
        </ul>
        <hr />
        <h2>Instructions</h2>
        <ol>
          <li>Beat the eggs: In a bowl, beat the eggs with a pinch of salt and pepper until they are
            well mixed. You can add a tablespoon of water or milk for a fluffier texture</li><br />
          <li>Heat the pan: Place a non-stick frying pan over medium heat and add butter or oil.</li><br />
          <li>Cook the omelette: Once the butter is melted and bubbling, pour in the eggs. Tilt the
            pan to ensure the eggs evenly coat the surface.</li><br />
          <li>Add fillings (optional): When the eggs begin to set at the edges but are still slightly
            runny in the middle, sprinkle your chosen fillings over one half of the omelette.</li><br />
          <li>Fold and serve: As the omelette continues to cook, carefully lift one edge and fold it
            over the fillings. Let it cook for another minute, then slide it onto a plate.</li><br />
          <li>Enjoy: Serve hot, with additional salt and pepper if needed.
            Nutrition</li>
        </ol>
        <hr />
        <h2>Nutrition</h2>
        <p>The table below shows nutritional values per serving without the additional fillings.</p>
            <div className="cal">
              <p>Calories</p>
              <p style={{color : 'hsl(14, 45%, 36%)', fontWeight : '700'}}>277kcal</p>
            </div>

            <div className="cal">
              <p>Carbs</p>
              <p style={{color : 'hsl(14, 45%, 36%)', fontWeight : '700'}}>0g</p>
            </div>

            <div className="cal">
              <p>Protein</p>
              <p style={{color : 'hsl(14, 45%, 36%)', fontWeight : '700'}}>20g</p>
            </div>
            <div className="cal">
              <p>Fat</p>
              <p style={{color : 'hsl(14, 45%, 36%)', fontWeight : '700'}}>22g</p>
            </div>

      </div>
    </div>
  )
}

export default Page
