
// type declaration of res


const getFakeStore = async () => {
    const res = await fetch('https://fakestoreapi.com/products')
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.
   
    // Recommendation: handle errors
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data')
    }
   
    return res.json()
}

export default getFakeStore