import { Link } from "react-router-dom";

const User = ({user}) => {
    const {id , name , email , phone} = user;
    const userStyle = {
        border: '2px solid purple' ,
        padding : '5px' ,
        borderRadius :'20px' ,
        marginBottom : '10px'
    }
    return (
        <div style={userStyle}>
            <h2>name : {name}</h2>
            <p>Email : {email}</p>
            <p>Phone No:{phone}</p>
            <Link to={`/user/${id}`}>Show Details</Link>
            
        </div>
    );
};

export default User;