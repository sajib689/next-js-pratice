import { getData } from "@/app/Hooks/PostsData";


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
        </div>
    );
};

export default page;