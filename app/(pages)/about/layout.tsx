import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Page",
  description: "OnlineShopping are passionate about delivering",
};
function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="container">
      <div className="py-5">{children} </div>
    </div>
  );
}

export default layout;
