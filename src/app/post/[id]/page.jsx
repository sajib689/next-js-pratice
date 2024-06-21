import { getData } from "@/app/Hooks/PostsData";

export const generateMetadata =async ({params}) => {
    const data =await getData()
    const posts =await data?.find(post => post.id === parseFloat(params.id));
   
    return {
        title: `${posts.title}`,
        description: posts.body,
        keywords: posts.body.split(' ')
    }
}
const page =async ({params}) => {
  
    const data =await getData()
    const posts =await data?.find(post => post.id === parseFloat(params.id));
   
    return (
        <div>
            <h1 className="text-4xl text-red-500 font-bold">
            {
                posts.title
            }
            </h1>
            <p>{posts.body}</p>
        </div>
    );
};

export default page;