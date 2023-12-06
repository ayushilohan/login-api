import React, {useState, useEffect} from "react"

const Form = () => {
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()
    const [details, setDetails] = useState([])

    useEffect(()=>{
        fetch('https://dummyjson.com/users')
        .then(response => response.json())
        .then(responseData => {
            try{
                setDetails(responseData.users);
            }
            catch{
                console.log("error while fetching users details");
            }
        })
        .catch(error => console.log('Error:',error))
        },[])

    const userHandler = (event) => setUsername(event.target.value)
    const passHandler = (event) => setPassword(event.target.value)
    const submitHandler = (event) => {
        event.preventDefault()
        details.map((item)=>{
            if(item.username == username && item.password == password){
                console.log("true")
            }
        })
    }


    return(
        <div>
            <form onSubmit={submitHandler}>
                <input 
                type='text'
                placeholder="username"
                value={username}
                onChange={userHandler}
                />
                <input 
                type='text'
                placeholder="password"
                value={password}
                onChange={passHandler}
                />
                <button type="submit">submit</button>
            </form>
        </div>
    )
}
export default Form