import AboutButon from "./_components/AboutButon";
import TestComponent from "./_components/TestComponent";

type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
};

async function About() {
  console.log("running about in page");
  let rawRes: Product[] = [];
  try {
    await new Promise((resolve) =>
      setTimeout(() => {
        resolve("loading time by 5s");
      }, 1000)
    );
    const raw = await fetch("https://fakestoreapi.com/products", {
      cache: "force-cache",
    });
    if (!raw.ok) throw new Error(`HTTP Error: Failed to fetch products`);
    rawRes = await raw.json();
  } catch (err) {
    return <>{err}</>;
  }

  return (
    <>
      <h1 className="font-bold text-5xl pb-5">About us</h1>
      {/* {rawRes.map((item) => {
        console.log("rawRes. map", item);
        return (
          <div key={item.id}>
            <h3>{item.title}</h3>
          </div>
        );
      })} */}
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta qui unde
        repellendus dolore tenetur quasi laboriosam, necessitatibus, error
        itaque molestias laudantium repellat esse. Voluptatibus doloribus est
        necessitatibus sint ipsum alias?
      </p>
      <AboutButon />
    </>
  );
}

export default About;
