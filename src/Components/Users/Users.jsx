import { useLoaderData } from "react-router-dom";
// import User from "../User/User";
import User from "../User/User";
import "../Users/Users.css"


const Users = () => {
    const users = useLoaderData();
    // console.log(users)
    return (
        <div>
            <h2>Our respected users: {users.length}</h2>
            <p>thank you for being with us</p>
            <div  className="users">
                {
                    users.map(user => <User key={user.id} user={user}></User>)
                }
            </div>
        </div>
    );
};

export default Users;