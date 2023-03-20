"use client";
import React from "react";
import { useGetUsers } from "@/utils/firebase/useGetUsers";

type Props = {};

const page = (props: Props) => {
  // const usersQuery = useGetUsers();
  // console.log(usersQuery);
  return (
    <div>
      {/* {usersQuery?.data?.map((doc, id) => {
        return <div key={id}>{doc["email"]}</div>;
      })} */}
    </div>
  );
};

export default page;
