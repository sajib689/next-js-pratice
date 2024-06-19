import { getData } from "../Hooks/PostsData";

const { default: Posts } = require("../Components/Posts/Posts")


const page = async () => {
    const f = await getData()
   
    return (
        <div>
            <h1>Posting......</h1>
            <div className="grid grid-cols-3 gap-6">
                {
                    f?.map(post => <Posts key={post.id} post={post}/>)
                }
            </div>
        </div>
    );
};

export default page;