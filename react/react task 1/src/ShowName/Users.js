import axios from "axios";
import { useEffect } from "react";

const url = `http://jsonplaceholder.typicode.com/users`
const Users = () => {
    const [users, setUsers] = usesState([])

    useEffect(() => {
        axios.get(url).then((resp) => {
            setUsers(resp.data)
        })
    }, [])

    return (
        <>
            {

                users.map((user) => {
                    return <p key={user.id}>{user.name}</p>
                })
            }
        </>
    )
        }

    export default Users;