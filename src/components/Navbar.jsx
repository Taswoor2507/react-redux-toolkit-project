import { Link } from "react-router-dom";
import { BiCartAlt } from "react-icons/bi";
import { useSelector } from "react-redux";
const Navbar = () => {
  const products = useSelector((state) => state.cart);

  return (
    <div className="bg-slate-950 text-white sticky top-0 w-[100%] z-10">
      <div className="max-w-[1140px] py-2 mx-auto px-4 flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-semibold">Eshop</h1>
        </div>
        <div className="flex items-center gap-6">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </div>
        <div>
          <Link to="/cart" className=" relative mt-1">
            <BiCartAlt className="text-[26px]" />
            <span className="absolute top-0 -right-2 text-[12px] rounded-full flex justify-center items-center bg-orange-600 w-[16px] h-[16px]">
              {products.length}
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
