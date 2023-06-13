import { getProducts } from '@/service/product.service'
import { Main } from 'next/document';
import Image from 'next/image'

export default function Home() {
  const data = await getProducts({ page: 1});

  return (
    <main>
      <h1>Welcome to Next.js</h1>

      {data.products.map((product) => (
          <article key = {product.id}>
            <img src={product.thumbnail} alt = {product.title}>
              <h3></h3>
            </img>
          </article>
      ))}
    </main>  
  )
}
