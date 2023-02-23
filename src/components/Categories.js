import '../styles/Categories.css'

function Categories ({categories, activeCategory, filterCat}) {    

    function filter(cat) {
        let c = []; 
       
        if(cat !== '') {
            if(!activeCategory.includes(cat)){
                c = [...[cat], ...activeCategory]
            }else{
                c = [...activeCategory.filter(cf => cf !== cat)]
            }
        }else{
            
        }

        filterCat(c)
    }
    return (
        <div className="lmj-categories">
            {
                categories.map((cat, index) => (
                    <span key={`${cat}-${index}`}>
                    <input                        
                        type='checkbox'
                        onChange={() => filter(cat)}
                        value={cat}
                    />
                    {cat}
                    </span>                                  
                ))
            }
            <button onClick={() => filter('')}>Reinitialiser</button>      
        </div>    
    )
}

export default Categories