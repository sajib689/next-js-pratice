
export const searchFoods =async (foodName) => {
    const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${foodName}`)
    return res.json()
}