import {useEffect,useState} from 'react'
import axios from 'axios'

const Fetch = () => {
  const [data, setData] = useState([])
    useEffect(()=>{
      axios.get('https://jsonplaceholder.typicode.com/users').then((res)=>{
        setData(res.data)
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