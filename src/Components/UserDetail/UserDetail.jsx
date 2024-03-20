import { useLoaderData } from "react-router-dom";


const UserDetail = () => {
    const user = useLoaderData();
    const {name , email} = user;
    console.log(user)
    return (
        <div>
            <h2>Details About User: {name}</h2>
            <p>Email : {email}</p>
        </div>
    );
};

export default UserDetail;