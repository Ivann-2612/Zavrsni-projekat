import React from 'react'
import { useState, useEffect } from 'react'
import { getAllRecipes } from '../service'
import {StyledRecipeItem} from '../styledComponents/StyledRecipeItem'


const RecipeItem = () => {
    const [recipes,setRecipes] = useState([])

    useEffect(() => {
        getAllRecipes().then(res => {
           console.log(res.data.recipes)
           setRecipes(res.data.recipes.slice(7,10))
        
        })
    },[])

    return (
        <StyledRecipeItem>
            {
                recipes.map(({recipe_id,image_url,publisher,source_url,title}) => {
                    return (
                    
                        <div key={recipe_id}>
                            <h3>Publisher: {publisher} </h3><br/>
                            <p>{title}</p>
                            <img src={image_url} alt={title} /><br/>
                            <a href={source_url}><b>Read more .... </b></a>
                        </div>
                    )
                    })   
            }
             <h5> R <br />E <br />C <br />I <br />P <br />E <br />S</h5>
        </StyledRecipeItem>
    )
}

export default RecipeItem
