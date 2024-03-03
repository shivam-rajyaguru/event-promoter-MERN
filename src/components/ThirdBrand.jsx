import React from "react";
import NavbarBrand from "./Brand/NavnarBrand";
import { useBrandGlobalContext } from "../../context/brandContext";
import Display from "./Brand/Display";
import { useNavigate, Link } from "react-router-dom";
import { TbBrandItch } from "react-icons/tb";

function ThirdBrand() {
  const { addBrand, brands, setBrands } = useBrandGlobalContext();

  const handleClick = (e) => {
    e.preventDefault();
    console.log("click");
    addBrand(brands.brandName, brands.brandCategory, brands.brandDescription);
  };

  const onChange = (e) => {
    setBrands({ ...brands, [e.target.name]: [e.target.value] });
  };

  const navigate = useNavigate();
  return (
    <>
      <NavbarBrand />

      <div className="flex">
        <div
          // className="bg-slate-200"
          className="mt-7"
          style={{ height: "100vh", width: "1000px" }}
        >
          <div className="mt-1 ml-8">
            {/* <h2 className="mb-5">KeepUsPost</h2> */}
            <h2 className="font-bold text-3xl mb-5 pt-5">
              Customize your Brand
            </h2>

            <div className="w-9/12 text-xl">
              Your brand image is one of the first Influencers see. Add your
              brand image and logo so that Influencers can easily identify with
              your brand.
            </div>

            <div className="h-52 rounded-xl p-3 w-3/4 mt-6 bg-slate-100 flex justify-center items-center">
              <label htmlFor="profile">
                <div className="flex justify-center items-center text-3xl text-gray-700">
                  Add Brand Image
                </div>
                <img src="" className="" alt="" />
              </label>
              <input
                className="h-48 hidden"
                type="file"
                name="profile"
                id="profile"
              />
            </div>

            <div className="h-52 rounded-xl p-3 w-3/4 mt-6 bg-slate-100 flex justify-center items-center">
              <label htmlFor="profile">
                <div className="flex flex-col justify-center items-center text-3xl text-gray-700">
                  <div>
                    <TbBrandItch size={40} />
                  </div>
                  <div className="text-black font-medium">Add Brand Logo</div>
                  <div className="text-base">400 x 400 (Best Fit)</div>
                </div>

                <img src="" className="" alt="" />
              </label>
              <input
                className="h-48 hidden"
                type="file"
                name="profile"
                id="profile"
              />
            </div>
            {/* <input
              className="rounded-lg p-3 w-3/4 mt-4 bg-slate-100"
              type="text"
              name="brandName"
              onChange={onChange}
              placeholder="Brand name (required)"
              id="brandName"
            />
            <div className="text-md w-5/6 mt-2 font-normal">
              use the name of your brand , business or organization that best
              identifiles with your products or services
            </div> */}

            <div className="flex justify-between" style={{ width: "725px" }}>
              <Link
                to="/secondBrand"
                className="rounded-lg px-24 py-3 w-2/5 mt-10  bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold text-lg"
              >
                Previous
              </Link>
              <Link
                className="rounded-lg px-24 py-3 w-2/5 mt-10 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold text-lg"
                to="/thirdBrand"
              >
                Next
              </Link>
            </div>
          </div>
        </div>
        <Display />
      </div>
    </>
  );
}

export default ThirdBrand;