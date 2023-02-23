import { useState } from 'react'
import {plantList} from '../datas/plantList'
import '../styles/ShoppingList.css'
import Categories from './Categories'
import PlantItem from './PlantItem'


function ShoppingList({cart, updateCart}) {
    const [activeCategory, filterCat] = useState([])
    const categories = plantList.reduce(
		(acc, plant) =>
			acc.includes(plant.category) ? acc : acc.concat(plant.category),
		[]
	)
    
    function addToCart(name, price) {
        const currentPlantAdded = cart.find((plant) => plant.name === name)
        if(currentPlantAdded) {
            const cartFilteredCurrentPlant = cart.filter(
                (plant) => plant.name !== name
            )
            updateCart([
                ...cartFilteredCurrentPlant, 
                { name, price, amount: currentPlantAdded.amount + 1}
            ])            
        }else{
            updateCart([...cart, {name, price, amount: 1}])
        }
    }    

    return (
        <div className='lmj-shopping-list'>
            <Categories categories={categories} activeCategory={activeCategory} filterCat={filterCat} />
            <ul className='lmj-plant-list'>                
                {plantList.map(({id, name, cover, light, water, price, category}) => (
                    activeCategory.length === 0 ? 
                        (<div key={id}>
                            <PlantItem cover={cover} id={id} name={name} light={light} water={water} category={category} price={price} />  
                            <button onClick={() => addToCart(name, price)}>Ajouter</button>                  
                        </div>) :
                    (activeCategory.includes(category)) &&
                        (<div key={id}>
                            <PlantItem cover={cover} id={id} name={name} light={light} water={water} category={category} price={price} />  
                            <button onClick={() => addToCart(name, price)}>Ajouter</button>                  
                        </div>)
                ))}               
            </ul>
        </div>
    )
}

export default ShoppingList