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
    console.log(data);
    setusers(data.slice(0, 11));
    setpage(1);
  }, [data]);

  useEffect(() => {
    let end = page * 11;
    let start = end - 11;

    setusers(data.slice(start, end));
  }, [page]);

  return (
    <div className="flex justify-end  pr-10">
      <div className="bg-[rgb(255,204,141)] px-3 py-1 rounded-xl">
        <Pagination
          onChange={(e, value) => {
            setpage(value);
          }}
          page={page}
          count={count}
          variant="outlined"
        />
      </div>
    </div>
  );
}

export default Paginationn;
