async function getProduct(uid) {
    const res = await fetch(
        `https://a2-32ab6-default-rtdb.firebaseio.com/product/${uid}.json`
    );
    const data = await res.json();
    return data;
}

export { getProduct };