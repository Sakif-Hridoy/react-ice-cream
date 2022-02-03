import React from 'react';
import Item from'./Item/Item';

const Items = ({items}) =>{
    const tastes = Object.keys(items);
    console.log(tastes)
    return(
        <div>
            <ul>
                {
                    tastes.map(taste=>(
                        <Item key={taste} name={taste}/>
                        // <Item key={flavor} name={flavor} />
                    ))
                }
            </ul>
        </div>
    )
}

export default Items;