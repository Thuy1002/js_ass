import instance from "./config";

export const getAll = () => {
    const url = `/products`;
    return instance.get(url);
}
export const get = (id) => {
    const url = `/products/${id}`;
    return instance.get(url);
}
export const remove = (id) => {
    const url = `/products/${id}`;
    return instance.delete(url);
}
export const add = (product) => {
    const url = `/products`;
    return instance.post(url, product);
}
export const update = (product,id) => {
    const url = `/products/${id}`;
    return instance.put(url, product);
}