import React from 'react'

function Header(props) {
  
     const {setquery}=props

    const updateQuery=(value)=>{
         value=value.toLowerCase().split(' ').join("");
         setquery(value);
    }

  return (
    <div className="flex justify-between px-4 ">
         <div></div>
           <select onChange={(e)=>{updateQuery(e.target.value)}} className="bg-transparent text-lg space-y-2 border-[3px] text-[white] outline-none px-6 py-2  rounded-2xl  border-[rgb(129,198,242)]">
              <option>Select Query</option>
              <option>Query 1</option>
              <option>Query 2</option>
              <option>Query 3</option>
              <option>Query 4</option>
              <option>Query 5</option>
           </select>
      </div>  
  )
}

export default Header