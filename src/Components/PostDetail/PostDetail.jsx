import { useLoaderData, useNavigate, useParams } from "react-router-dom";

const PostDetail = () => {
    const post =useLoaderData();
    const {id ,body ,title} =post;
    const navigate = useNavigate();
    // const params =useParams();
    const handleGoBack =() =>{
        navigate(-1);
    }
    return (
        <div>
            <h3>Post Details About :{id}</h3>
            
            <p>{title}</p>
            <p>{body}</p>
            <button onClick={handleGoBack}>Go Back</button>
        </div>
    );
};

export default PostDetail;