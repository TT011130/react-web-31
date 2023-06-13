export const getProducts = async (page) => {
    const res = await fetch("https://dummyjson.com/products", {
        next:{
            revalidate: 5,
        }});
    const json = await res.json();

    return json;
};

export const getProductByID = async ({productId}) => {
    const res = await fetch(`https://dummyjson.com/products/{productId}`);
    const json = await res.json();

    return json;
}