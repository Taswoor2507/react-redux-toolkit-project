import { useDispatch, useSelector } from "react-redux";
import { RxCrossCircled } from "react-icons/rx";
import { remove } from "../store/CartSlice.js";
import { useNavigate } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";

const Cart = () => {
  const products = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  function handleRemove(product) {
    dispatch(remove(product.id));
  }

  // use navigate
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate("/");
  };

  return (
    <div className="flex max-w-[1140px] md:flex-row flex-col flex-wrap py-2 mx-auto px-2 sm:px-4 gap-4 ">
      <div className="md:w-[80%] flex-1">
        {products.length > 0 ? (
          products.map((product) => {
            const titleToShow =
              window.innerWidth < 600
                ? product.title.split(" ").slice(0, 6).join(" ")
                : product.title.split(" ").slice(0, 10).join(" ");

            return (
              <div
                key={product.id}
                className="flex justify-between py-2 px-2 gap-4 mt-3 bg-slate-50 relative items-center"
              >
                <button
                  onClick={() => {
                    handleRemove(product);
                  }}
                >
                  <RxCrossCircled className="text-[22px] text-red-600 absolute right-0 top-1" />
                </button>
                <div className="w-[60px] h-[60px]">
                  <div className="absolute left-0">
                    <img
                      src={product.image}
                      className="w-[60px] h-[60px] bg-black"
                      alt={product.title}
                    />
                  </div>
                </div>
                <p className="sm:text-[18px] text-[15px]">{titleToShow}...</p>
                <p className="sm:text-[20px] self-end text-[16px]">
                  {product.price}/PKR
                </p>
              </div>
            );
          })
        ) : (
          <h1>No Item in cart</h1>
        )}
        <button onClick={handleGoBack} className="mt-4">
          <IoArrowBack className="text-2xl" />
          Back
        </button>
      </div>
      <div className="md:w-[20%] flex-1 bg-slate-500 h-[500px]  static md:sticky md:top-16"></div>
    </div>
  );
};

export default Cart;
