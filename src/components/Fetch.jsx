import {useEffect,useState} from 'react'


const Fetch = () => {
  const [data, setData] = useState([])
    useEffect(()=>{
      axios.get('https://jsonplaceholder.typicode.com/users').then((res)=>{
        console.log(res.data)
      })
    },[data])
  return (
    <div>
      <h1>User List</h1>

      {data.map((user) =>(
        <ul key={user.id}>
          <li>{user.name}</li>
        </ul>
      ))}
    </div>
    
  )
}

export default Fetch