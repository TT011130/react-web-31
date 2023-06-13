export const getProducts = async (page) => {
    const res = await fetch("https://dummyjson.com/products", {
        next:{
            revalidate: 5,
        }});
    const json = await res.json();

    return json;
}