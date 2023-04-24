import React, { useEffect, useState } from "react";
import Table from "../components/Table";
import { request } from "../api/request";
import Pagination from "../components/Pagination";
import Header from "../components/Header";

function Home() {
  const [data, setdata] = useState([]);
  const [users, setusers] = useState([]);
  const [loading, setloading] = useState(true);
  const [query, setquery] = useState('query1');
 

  useEffect(() => {
    const fetchData = async () => {
      let response = await request(`/api/users/${query}`, setloading);
      if (response.success) {
        setdata(response.data);
      }
    };

    fetchData();
  }, [query]);

  return (
    <div className="py-6 text-white  flex gap-y-4 p-2 flex-col ">
      <Header setquery={setquery}/>
      <Table users={users} query={query}/>
      <Pagination data={data} setusers={setusers} />
    </div>
  );
}

export default Home;
