import axios from "axios";
import { useEffect, useState } from "react";

function ProductList() {
  return (
    <div className="grid col-span-3">
      <div className="grid grid-cols-3 grid-rows-4">
        <div className="bg-base-100 shadow-md p-5 rounded-md">
          <figure>
            <div className="flex justify-center">
              <div className="w-56 py-5">
                <img
                  src="https://res.cloudinary.com/dluc2m7kg/image/upload/v1700382402/mobile-images/1644464009394_dhlcy3.jpg"
                  alt=""
                />
              </div>
            </div>
          </figure>
          <div>
            <h2 className="">Shoes!</h2>
            <div className="flex justify-between items-center">
              <div>Remember Me</div>
              <button className="btn btn-accent">Buy</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductList;
