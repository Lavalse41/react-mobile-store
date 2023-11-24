import { useEffect, useState } from "react";
import axios from "axios";

function ProductSidebar() {
  const [colors, setColors] = useState([]);

  useEffect(
    () =>
      async function getColors() {
        try {
          const res = await axios.get("http://localhost:3001/colors");
          console.log(res.data);
          setColors(res.data);
        } catch (err) {
          console.log(err.message);
        }
      },
    []
  );
  return (
    <div className="flex flex-col">
      <div className="flex flex-col">
        <h2 className="pb-5">รุ่นโทรศัพท์</h2>
        <select className="select select-bordered w-full max-w-xs">
          <option disabled selected>
            Lorem, ipsum dolor
          </option>
          <option>Lorem, ipsum dolor1</option>
          <option>Lorem, ipsum dolor2</option>
          <option>Lorem, ipsum dolor3</option>
        </select>
        <hr className="border my-6"></hr>
      </div>
      <div className="flex flex-col">
        <h2 className="pb-4">สี</h2>
        <div className="flex flex-wrap gap-2">
          {colors.map((color) => {
            return (
              <div
                key={color.id}
                className={`bg-[${color.code}] w-10 h-10 rounded-md border border-1 border-gray-300`}
              ></div>
            );
          })}
        </div>
        <hr className="border my-6"></hr>
      </div>

      <div>
        เกรด
        <div className="form-control gap-2 mt-4">
          <label className="cursor-pointer flex items-center gap-3">
            <input
              type="checkbox"
              // checked="checked"
              className="checkbox checkbox-accent"
            />
            <span className="label-text">Remember me</span>
          </label>
          <label className="cursor-pointer flex items-center gap-3">
            <input
              type="checkbox"
              // checked="checked"
              className="checkbox checkbox-accent"
            />
            <span className="label-text">Remember me</span>
          </label>
          <label className="cursor-pointer flex items-center gap-3">
            <input
              type="checkbox"
              // checked="checked"
              className="checkbox checkbox-accent"
            />
            <span className="label-text">Remember me</span>
          </label>
        </div>
        <hr className="border my-6"></hr>
      </div>
      <div>
        ความจุ
        <div className="form-control gap-2 mt-4">
          <label className="cursor-pointer flex items-center gap-3">
            <input
              type="checkbox"
              // checked="checked"
              className="checkbox checkbox-accent"
            />
            <span className="label-text">Remember me</span>
          </label>
          <label className="cursor-pointer flex items-center gap-3">
            <input
              type="checkbox"
              // checked="checked"
              className="checkbox checkbox-accent"
            />
            <span className="label-text">Remember me</span>
          </label>
          <label className="cursor-pointer flex items-center gap-3">
            <input
              type="checkbox"
              // checked="checked"
              className="checkbox checkbox-accent"
            />
            <span className="label-text">Remember me</span>
          </label>
        </div>
      </div>
    </div>
  );
}

export default ProductSidebar;
