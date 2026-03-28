import Image from 'next/image'

export default function ProductCard({ product, addToCart }) {
  return (
    <div className="card">
      <Image
        src={product.image}
        alt={`Image of ${product.title}`}
        width={200}
        height={200}
      />

      <h2>{product.title}</h2>

      <p className="category">{product.category}</p>

      <p className="price">${product.price}</p>

      <p className="rating">
        ⭐ {product.rating.rate} ({product.rating.count})
      </p>

      <button onClick={() => addToCart(product)}>
        Add to Cart
      </button>
    </div>
  )
}