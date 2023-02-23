const quantityLabel = {
    1:'peu',
    2:'moderement',
    3:'beaucoup'
}

const careTypeLabel = {
    'light': 'de lumière',
    'water': 'd\'arrossage',
}

function handleClick (q, c){
    alert(`Cette plante requiert ${q} ${c}`)
}

function CareScale({scaleValue, careType}) {
    const range = [1, 2, 3]
    const scaleType = 
            careType === 'light' ? 
            '☀️' :
             '💧'

    return <div onClick={() => handleClick(quantityLabel[scaleValue], careTypeLabel[careType])}>
        {range.map((rangeElem) =>
            scaleValue >= rangeElem ? 
            <span key={rangeElem.toString()}>{scaleType}</span> : 
            null
        )}        
        </div>
}
    
export default CareScale