
export const getMeals = async() => {
    const res =await fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
    return res.json()
}