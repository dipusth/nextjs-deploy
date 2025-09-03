
export type NavLink = {
    route: string;
    label: string;

}
const navLinks:NavLink[] = [
    {
        route: "/",
        label: "Home",
    },
    {
        route: "/about",
        label: "About",
    },
    {
        route: "/products",
        label: "Products",
    },

    {
        route: "/news",
        label: "News",
    },
        {
        route: "/contact",
        label: "Contact",
    },
]
export default navLinks