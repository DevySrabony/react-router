import { Link, Navigate, useNavigate } from "react-router-dom";

const Post = ({post}) => {
    const {id , title} =post ;
    const postStyle = {
        border: '2px solid purple' ,
        padding : '5px' ,
        borderRadius :'20px' ,
        marginBottom : '10px'
    }
    const navigate = useNavigate();

    const handleShowDetail =() =>{
        navigate(`/post/${id}`);
    }
    return (
        <div style={postStyle}>
            <h4>post of id :{id}</h4>
            <p>{title}</p>
            <Link to={`/post/${id}`}>Post Detail</Link>
            <button onClick={handleShowDetail}>Show Details</button>
        </div>
    );
};

export default Post;