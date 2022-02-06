import React from 'react';
import Item from'./Item/Item';

const Items = ({items,add,remove}) =>{
    const tastes = Object.keys(items);
    console.log(tastes)
    return(
        <div>
            <ul>
                {
                    tastes.map(taste=>(
                        <Item key={taste} name={taste} add={add} remove={remove}/>//The Method is object={key:value},so,the first elements would be the keys(props name) automatically
                        // <Item key={flavor} name={flavor} />
                    ))
                }
            </ul>
        </div>
    )
}

export default Items;