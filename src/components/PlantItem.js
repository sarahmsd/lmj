import '../styles/PlantItem.css'
import CareScale from './CareScale'

function PlantItem ({name, id, cover, light, water, category, price}){
    return (
        <li key={id} className='lmj-plant-item'>
			<span className='lmj-plant-item-price'>{price}€</span>
			<span className='lmj-plant-item-cat'>{category}</span>
			<img className='lmj-plant-item-cover' src={cover} alt={`${name} cover`} />
			{name}
			<div>
				<CareScale careType='water' scaleValue={water} />
				<CareScale careType='light' scaleValue={light} />
			</div>			
		</li>
    )
}

export default PlantItem