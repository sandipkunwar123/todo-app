// export default function Search() {
//   return <input type="text" className="border rounded py-2 px-3" />;
// }


import {useState} from "react"


export default function Search() {

  const [search,setSearch] =useState('')
  const handleChange = (e)=>{
    console.log(e.target.value)
    setSearch(e.target.value)

  }
  return(
    <div>
      <input type="text"  className="border rounded py -2 px-3" value={search} onChange={handleChange}/>
      <h1>Search Result:{search}</h1>
    </div>
  )
}