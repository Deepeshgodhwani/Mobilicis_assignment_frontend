import React from 'react'


function Table(props) {
    const {data} =props;

  return (
    <div className='flex flex-col'>
       <table >
           <thead>

           
            <tr className=''>
                <th>Id</th>
                <th>First name</th>
                <th>Last name</th>
                <th>Email</th>
                <th>Gender</th>
                <th>Income</th>
                <th>City</th>
                <th>Car</th>
                <th>Quote</th>
                <th>Phone price</th>
            </tr>
            </thead>
            <tbody>

           
            {
                data.length>0 && data.map((user ,i)=>{
                     return <tr key={user.id} className={` ${i%2===0 && 'bg-[rgb(81,175,234)]'}`}>
                          <td>{user.id}</td>
                          <td>{user.first_name}</td>
                          <td>{user.last_name}</td>
                          <td>{user.email}</td>
                          <td>{user.gender}</td>
                          <td>{user.income}</td>
                          <td>{user.city}</td>
                          <td>{user.car}</td>
                          <td>{user.quote}</td>
                          <td>{user.phone_price}</td>
                     </tr>
                })
            }
             </tbody>
       </table>
      
    </div>
  )
}

export default Table