'use client';

export default function CoffeeCards({product}) {
    return (
        <div className="coffee-cards">
            {product.image && <img src={procut.image} alt={product.name}/>}
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>{product.price}</p>
             </div>
    )
}

