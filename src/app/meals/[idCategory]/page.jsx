import { getMeals } from "@/app/Hooks/getMeals";

export const generateMetaData = async ({params}) => {
    console.log(params)
    const data =await getMeals()
    const posts =await data?.categories?.find(post => post.idCategory === parseFloat(params.idCategory));
    return {
        title: `${posts?.strCategory}`,
    }
}
const page =async ({params}) => {
    const data =await getMeals()
    const posts =await data?.categories?.find(post => post.idCategory === parseFloat(params.idCategory));
    console.log(posts)
    return (
        <div>
            {/* <h1>{posts.idCategory}</h1> */}
        </div>
    );
};

export default page;