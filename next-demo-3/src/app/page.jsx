import { getProducts } from "./services/product.service";
import {Link} from 'next/link';
export default async function Home() {
  const data = await getProducts({ page: 1});

  return (
    <main>
      <h1>Welcome to Next.js</h1>

      {data.products.map((product) => (
          <article key = {product.id}>
            <Link href ={`/products/${product.id}`}>
            <img src={product.thumbnail} alt = {product.title}>
              <h3>{product.title}</h3>
            </img>
            </Link>
          </article>
      ))}
    </main>  
  )
}
