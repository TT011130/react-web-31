import { getProductByID } from "@/app/services/product.service"

export default async function ProductDetail({params: {productId}}) {
    const data = await getProductByID({productId});

    return (
        <main>
            <h1>{data.title}</h1>
        </main>
    )
}