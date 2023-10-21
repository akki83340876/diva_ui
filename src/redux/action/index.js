
// add item to cart
export const addCart = (product) => {
    return{
        type : "ADDITEM",
        payload : product
    }
}


// delete item to cart
export const delCart = (product) => {
    return{
        type : "DELITEM",
        payload : product
    }
}