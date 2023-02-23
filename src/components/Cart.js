import '../styles/Cart.css'
import { useState, useEffect } from 'react'

function Cart({ cart, updateCart }) {
    const [isOpen, setIsOpen] = useState(true)
    const total = cart.reduce(
        (acc, plantType) => acc + plantType.amount * plantType.price,
            0
        )
    useEffect(() => {
        document.title = `LMJ: ${total}€ d'achats`
    }, [total])	


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


	function removeToCart(name, price) {
		const plantToRemove = cart.find((plant) => plant.name === name)
		const cartFilteredCurrentPlant = cart.filter(
			(plant) => plant.name !== name
		)
		if(plantToRemove.amount > 1) {
			updateCart([
                ...cartFilteredCurrentPlant, 
                { name, price, amount: plantToRemove.amount - 1}
            ]) 
		}else {
			updateCart(cartFilteredCurrentPlant)
		}
	}

    return isOpen ? (
        <div className='lmj-cart'>
            <button
                className='lmj-cart-toggle-button'
                onClick={() => setIsOpen(false)}
            >
                Fermer
            </button>
            {cart.length > 0 ? (
                <div>
                    <h2>Panier</h2>
                    <ul>
                        {cart.map(({ name, price, amount }, index) => (
                            <div key={`${name}-${index}`}>
                                {name} {price}€ x {amount}
								<button onClick={() => addToCart(name, price)}>plus</button>
								<button onClick={ () => removeToCart(name, price)}>moins</button>
                            </div>
                        ))}
                    </ul>
                    <h3>Total :{total}€</h3>
                    <button onClick={() => updateCart([])}>Vider le panier</button>
                </div>
            ) : (
                <div>Votre panier est vide</div>
            )}
        </div>
    ) : (
        <div className='lmj-cart-closed'>
            <button
                className='lmj-cart-toggle-button'
                onClick={() => setIsOpen(true)}
            >
                Ouvrir le Panier
            </button>
        </div>
    )
}


  export default Cart