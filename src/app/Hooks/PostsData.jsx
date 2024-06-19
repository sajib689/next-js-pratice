export const getData = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    return res.json()
}