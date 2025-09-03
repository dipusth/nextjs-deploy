"use client";
import {
  deleteActiveUser,
  getActiveUser,
  type IuserType,
} from "@/utils/LocalStorage";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";

const Dashboard = () => {
  const [activeser, setActiveUser] = useState<IuserType>();

  useEffect(() => {
    const data = getActiveUser();
    if (data == null) {
      redirect("/login");
    }
    setActiveUser(data);
  }, []);

  console.log("activeser", activeser);
  return (
    <div className="container">
      <div className="dark:text-white h-full p-5">
        <div className="flex justify-between w-full">
          <div>
            <h1 className="text-2xl font-bold"> Welcome! {activeser?.name}</h1>
          </div>
        </div>

        <div className="card-list flex flex-wrap gap-5 mt-10">
          <div className="card border rounded-lg border-slate-300 item-center">
            <h4>Cards</h4>
          </div>
          <div className="card border rounded-lg border-slate-300 item-center">
            <h4>Cards</h4>
          </div>
          <div className="card border rounded-lg border-slate-300 item-center">
            <h4>Cards</h4>
          </div>
          <div className="card border rounded-lg border-slate-300 item-center">
            <h4>Cards</h4>
          </div>
        </div>
        <div className="card border rounded-lg border-slate-300 item-center min-h-1.5 mt-5">
          Analytics
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
