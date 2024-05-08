import { IoMdContact } from "react-icons/io";
import { RiHome4Fill } from "react-icons/ri";

const navitems = [
  {
    icon: <RiHome4Fill className="text-2xl" />,
    name: "Home",
    to: "/",
  },
  {
    icon: <IoMdContact className="text-2xl" />,
    name: "Contact",
    to: "/contact",
  },
];
function Navbar() {
  return (
    <div className="h-20 bg-white w-full rounded-xl rounded-b-none">
      <ul className="flex justify-around">
        {navitems.map((item) => (
          <div key={item.to} className="flex flex-col items-center  ">
            {item.icon}
            <p>{item.name}</p>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default Navbar;
