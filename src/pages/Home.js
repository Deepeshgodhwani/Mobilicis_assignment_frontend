import React, { useEffect, useState } from "react";
import Table from "../components/Table";
import { request } from "../api/request";
import Pagination from "../components/Pagination";
import Header from "../components/Header";

function Home(props) {
  const { loading, setloading } = props;
  const [data, setdata] = useState([]);
  const [users, setusers] = useState([]);
  const [query, setquery] = useState("query1");

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
    <div className="py-4 text-white px-4  h-full min-h-[100vh] flex gap-y-4  flex-col ">
      <Header setquery={setquery} />
      <Table users={users} query={query} loading={loading} />
      {data.length > 0 && <Pagination data={data} setusers={setusers} />}
    </div>
  );
}

export default Home;
