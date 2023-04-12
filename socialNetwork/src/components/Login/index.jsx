import { useEffect, useState } from "react";
import api from '../../api/api'
function Login() {

    const [formData, setformData] = useState({});
    const [DataUsers, setDataUsers] = useState();

    // const HandleFirst = () => {
    //     api.get('/teste').then((response) => {
    //         console.log("Get do iniciar",response)
    //         // setDataUsers(response);
    //     });
    // };
    // useEffect(() => {
    //     HandleFirst()
    // }, [])

    const TesteApi = () => {
        api.post('/testepost', {
            name: formData?.name,
            email: formData?.email,
            password: formData?.password
        }.then((response) => {
            console.log('POST teste', response)
            setDataUsers(response);
        }));
    };
    return(
        <>
            <button onClick={TesteApi}>Testando API</button>

            <input type="text" placeholder="name" onChange={(e) => setformData({...formData, name: e.target.value})}/>
            <input type="text" placeholder="password" onChange={(e) => setformData({...formData, password: e.target.value})}/>
            <input type="email" placeholder="email" name="email" id="email" onChange={(e) => setformData({...formData, email: e.target.value})}/>
        </>
    )
};
export default Login;