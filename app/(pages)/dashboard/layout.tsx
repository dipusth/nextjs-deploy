import { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Admin Page",
  description: "OnlineShopping are passionate about delivering",
};
function layout({ children }: { children: React.ReactElement }) {
  return (
    <div className="container">
      <div className="py-5">{children} </div>
    </div>
  );
}

export default layout;
