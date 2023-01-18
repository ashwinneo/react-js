import { useState } from "react"

type AuthUser = {
    name: string,
    email: string
};

export const User = () => {
    // const [user, setUser] = useState<AuthUser|null>();
    const [user, setUser] = useState<AuthUser>({} as AuthUser);

    const handleLogin = () => {
        setUser({
            name: 'Ashwin',
            email: 'ashwinneo@gmail.com'
        })
    };
    // const handleLogout = () => {
    //     setUser(null);
    // };

    return (
        <div>
            <button onClick={handleLogin}>Login</button>
            {/* <button onClick={handleLogout}>Logout</button> */}
            <div>User name is {user?.name}</div>
            <div>User emailId is {user?.email} </div>
        </div>
    )
}