import Link from "next/link";


const Posts = ({post}) => {
    const {id, title,body} = post
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure><img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{body}</p>
          <div className="card-actions justify-end">
            <Link href={`/post/${id}`} className="btn btn-primary">Buy Now</Link>
          </div>
        </div>
      </div>
    );
};

export default Posts;