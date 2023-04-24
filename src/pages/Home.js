import React, { useEffect, useState } from 'react'
import Table from '../components/Table'
import { request } from '../api/request';
import { Pagination } from '@mui/material';

function Home() {
    const [data, setdata] = useState([]);
    const [loading, setloading] = useState(true);
    const [count, setcount] = useState(0)

    

    useEffect(() => {
        const  fetchData = async ()=>{
            let response=await request('/api/users/query1',setloading);
            if(response.success){
                 let roundoff=Math.floor(response.data.length/11)
                 let points=Math.abs(response.data.length/11)
                 if(points>0){ roundoff+=1};
                 setcount(roundoff);
                 setdata(response.data.slice(0,11));
            }
        }
        fetchData();
    }, [])

  
    const changePage =(e)=>{
         console.log(e)
    }
    
      

  return (
    <div className='   text-white border-[1px] rounded-lg flex gap-y-4 p-2 flex-col '> 
        <Table data={data}/>
        <div className='flex justify-end text-white pr-4'>

        <Pagination onChange={changePage}  count={count} color="primary" />
        </div>
    </div>
  )
}

export default Home