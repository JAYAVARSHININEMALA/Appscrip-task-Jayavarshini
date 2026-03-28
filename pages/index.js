import { useState } from 'react'
import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ProductCard from '../components/ProductCard'
import Filters from '../components/Filters'
import styles from '../styles/Home.module.css'

export default function Home({ products }) {
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('all')
  const [cart, setCart] = useState([])

  // 🔍 Filter Logic
  const filteredProducts = products.filter((product) => {
    return (
      product.title.toLowerCase().includes(search.toLowerCase()) &&
      (category === 'all' || product.category === category)
    )
  })

  // ✅ Add to Cart Logic (fixed)
  const addToCart = (product) => {
    const exists = cart.find((item) => item.id === product.id)

    if (exists) {
      alert("Product already in cart")
    } else {
      setCart([...cart, product])
    }
  }

  return (
    <>
      <Head>
        <title>Product Listing Page</title>
        <meta name="description" content="Explore products with filters and search" />
        <meta name="keywords" content="products, ecommerce, shopping" />
      </Head>

      {/* Header with Cart Count */}
      <Header cartCount={cart.length} />

      <main className={styles.container}>
        <h1 className={styles.title}>Discover Products</h1>

        {/* 🔍 Search */}
        <input
          type="text"
          placeholder="Search products..."
          className={styles.search}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <div className={styles.layout}>
          {/* Filters */}
          <Filters setCategory={setCategory} />

          {/* Product Grid */}
          <div className={styles.grid}>
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                addToCart={addToCart}
              />
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}

// ✅ SSR
export async function getServerSideProps() {
  const res = await fetch('https://fakestoreapi.com/products')
  const data = await res.json()

  return {
    props: { products: data },
  }
}