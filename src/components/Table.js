import React from 'react'


function Table(props) {
    const {users,query} =props;

  return (
    <div className='flex flex-col'>
       <table >
           <thead>
            {query !=='query5'? <tr className=''>
                <th>ID</th>
                <th>FIRST NAME</th>
                <th>LAST NAME</th>
                <th>EMAIL</th>
                <th>GENDER</th>
                <th>INCOME</th>
                <th>CITY</th>
                <th>CAR</th>
                <th>QUOTE</th>
                <th>PHONE PRICE</th>
            </tr>:<tr>
                <th>CITY</th>
                <th>TOTAL USERS</th>
                <th>AVERAGE INCOME</th>
              </tr>}
            </thead>
            <tbody>

           
            {
                users.length>0 && users.map((element ,i)=>{
                     return query !=='query5'? <tr key={element.id} className={` ${i%2===0 && 'bg-[rgb(81,175,234)]'}`}>
                          <td>{element.id}</td>
                          <td>{element.first_name}</td>
                          <td>{element.last_name}</td>
                          <td>{element.email}</td>
                          <td>{element.gender}</td>
                          <td>{element.income}</td>
                          <td>{element.city}</td>
                          <td>{element.car}</td>
                          <td>{element.quote}</td>
                          <td>{element.phone_price}</td>
                     </tr> : 
                     <tr  className={` ${i%2===0 && 'bg-[rgb(81,175,234)]'}`}>
                        
                        <td>{element._id}</td>
                        <td>{element.count}</td>
                        <td>{element.avgIncome}</td>

                     </tr>
                })
            }
             </tbody>
       </table>
      
    </div>
  )
}

export default Table