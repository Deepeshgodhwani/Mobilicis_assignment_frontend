import React, { useEffect, useState } from "react";

import { Pagination } from "@mui/material";
function Paginationn(props) {
  const { data, setusers } = props;
  const [count, setcount] = useState(0);
  const [page, setpage] = useState(1);

  useEffect(() => {
    if (!data.length) return;
    let roundoff = Math.floor(data.length / 11);
    let points = Math.abs(data.length / 11);
    if (points > 0) {
      roundoff += 1;
    }
    setcount(roundoff);
    setusers(data.slice(0,11))
  }, [data]);

  useEffect(() => {
     let end=page*11;
     let start=end-11;
     
     setusers(data.slice(start,end))

  }, [page]);

  return (
    <div className="flex justify-end  pr-10">
      <Pagination
        onChange={(e, value) => {
          setpage(value);
        }}
        count={count}
        color="primary"
      />
    </div>
  );
}

export default Paginationn;
