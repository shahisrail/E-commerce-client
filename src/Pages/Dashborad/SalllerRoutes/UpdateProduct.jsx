import React from "react";

import { useForm } from "react-hook-form";
import { FaProductHunt, FaUtensils } from "react-icons/fa";

import Swal from "sweetalert2";
import UseSecure from "../../Hooks/UseSecure";
import UseAxiosPublic from "../../Hooks/UseAxiosPublic";
import UseAuth from "../../Hooks/UseAuth";

const image_hosting_key = "19163d719edced790060b75a4f9496be";
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
const UpdateProduct = () => {
  const { user } = UseAuth();
  const { register, handleSubmit, reset } = useForm();
  const axiosPublic = UseAxiosPublic();
  const axiosSecure = UseSecure();
  const email = user?.email;
  const sellername = user?.displayName;
  const photo = user?.photoURL;
  const status = "pending";
  const onSubmit = async (data) => {
    console.log(email);
    console.log(data);
    // image upload to imgbb and then get an url
    const imageFile = { image: data.image[0] };
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    if (res.data.success) {
      //  now send the menu item data to the server with the image  ]\

      const productsIteam = {
        name: data.name,
        category: data.category,
        price: parseFloat(data.price),
        Stock: data.Stock,
        Brand: data.Brand,
        image: res.data.data.display_url,
        Ratings: data.Ratings,
        Discounts: data.Discounts,
        Discriptoin: data.discriptoin,
        email,
        sellername,
        photo,
        status,
      };
      console.log(data);
      const servayRes = await axiosSecure.patch(
        `/myProduct/${_id}`,
        productsIteam
      );
      console.log(servayRes.data);
      if (servayRes.data.modifiedCount > 0) {
        // show  success popup
        // reset();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${data.category} is updates to the servay`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    }
    console.log(res.data);
  };
  return (
    <div className="p-5">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control w-full my-6">
          <label className="label">
            <span className="label-text">Product Name</span>
          </label>
          <input
            type="text"
            placeholder="Product Name"
            {...register("name", { required: true })}
            defaultValue={name}
            className="input input-bordered w-full "
          />
        </div>
        <div className="flex flex-col md:flex-row gap-5">
          {/* category  */}
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Category</span>
            </label>
            <select
              {...register("category", { required: true })}
                // defaultValue={category}
              className="select select-bordered w-full"
            >
              <option disabled value="default">
                Select a category
              </option>
              <optgroup label="Electronics">
                <option value="smartphones">Smartphones</option>
                <option value="laptops">Laptops & Computers</option>
                <option value="televisions">Televisions</option>
                <option value="headphones">Headphones & Audio</option>
                <option value="cameras">Cameras & Photography</option>
              </optgroup>
              <optgroup label="Clothing">
                <option value="mens">Men's Clothing</option>
                <option value="womens">Women's Clothing</option>
                <option value="kids">Kids' Clothing</option>
                <option value="shoes">Shoes & Footwear</option>
                <option value="accessories">Accessories</option>
              </optgroup>
              <optgroup label="Beauty & Personal Care">
                <option value="skincare">Skincare</option>
                <option value="makeup">Makeup & Cosmetics</option>
                <option value="haircare">Hair Care & Styling</option>
                <option value="fragrances">Fragrances</option>
                <option value="personalcare">Personal Care & Hygiene</option>
              </optgroup>
              <optgroup label="Home & Kitchen">
                <option value="furniture">Furniture</option>
                <option value="homedecor">Home Decor</option>
                <option value="kitchen">Kitchen Appliances</option>
                <option value="bedding">Bedding & Linens</option>
                <option value="storage">Storage & Organization</option>
              </optgroup>
              <optgroup label="Toys & Games">
                <option value="educational">Educational Toys</option>
                <option value="boardgames">Board Games</option>
                <option value="outdoortoys">Outdoor Toys</option>
                <option value="puzzles">Puzzles</option>
                <option value="actionfigures">Action Figures</option>
              </optgroup>
              <optgroup label="Books & Stationery">
                <option value="fiction">Fiction Books</option>
                <option value="nonfiction">Non-Fiction Books</option>
                <option value="office">Office Supplies</option>
                <option value="writing">Writing Instruments</option>
                <option value="journals">Journals & Planners</option>
              </optgroup>
              <optgroup label="Sports & Outdoors">
                <option value="outdoorgear">Outdoor Gear</option>
                <option value="fitness">Fitness Equipment</option>
                <option value="sportsapparel">Sports Apparel</option>
                <option value="camping">Camping & Hiking</option>
                <option value="biking">Cycling & Biking</option>
              </optgroup>
              <optgroup label="Automotive">
                <option value="carparts">Car Parts & Accessories</option>
                <option value="tools">Automotive Tools</option>
                <option value="electronics">Car Electronics</option>
                <option value="tires">Tires & Wheels</option>
                <option value="cleaning">Car Cleaning & Care</option>
              </optgroup>
              <optgroup label="Garden & Tools">
                <option value="gardening">Gardening Supplies</option>
                <option value="tools">Tools & Equipment</option>
                <option value="outdoordecor">Outdoor Decor</option>
                <option value="patio">Patio & Lawn</option>
                <option value="pools">Pools & Accessories</option>
              </optgroup>
            </select>
          </div>
          {/* price  */}
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <input
              type="number"
              placeholder="Price"
            //   defaultValue={price}
              {...register("price", { required: true })}
              className="input input-bordered w-full "
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-5">
          {/* Brand  */}
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Brand</span>
            </label>
            <select
              defaultValue="Brand"
              {...register("Brand", { required: true })}
              className="select select-bordered w-full"
            >
              <option disabled value="default">
                Select a Brand
              </option>
              <option value="Samsung">Samsung</option>
              <option value="Apple">Apple</option>
              <option value="Sony">Sony</option>
              <option value="LG">LG</option>
              <option value="Panasonic">Panasonic</option>

              <option value="Nike">Nike</option>
              <option value="Adidas">Adidas</option>
              <option value="Zara">Zara</option>
              <option value="H&M">H&M</option>
              <option value="Levi's">Levi's</option>

              <option value="L'Oréal">L'Oréal</option>
              <option value="Maybelline">Maybelline</option>
              <option value="Dove">Dove</option>
              <option value="Nivea">Nivea</option>
              <option value="Estée Lauder">Estée Lauder</option>

              <option value="IKEA">IKEA</option>
              <option value="KitchenAid">KitchenAid</option>
              <option value="Dyson">Dyson</option>
              <option value="Philips">Philips</option>
              <option value="Cuisinart">Cuisinart</option>

              <option value="LEGO">LEGO</option>
              <option value="Hasbro">Hasbro</option>
              <option value="Mattel">Mattel</option>
              <option value="Nintendo">Nintendo</option>
              <option value="Funko">Funko</option>

              <option value="Penguin Random House">Penguin Random House</option>
              <option value="Moleskine">Moleskine</option>
              <option value="Faber-Castell">Faber-Castell</option>
              <option value="Pilot">Pilot</option>
              <option value="HP">HP</option>

              <option value="Adidas">Adidas</option>
              <option value="The North Face">The North Face</option>
              <option value="Patagonia">Patagonia</option>
              <option value="Columbia">Columbia</option>
              <option value="REI Co-op">REI Co-op</option>

              <option value="Ford">Ford</option>
              <option value="Toyota">Toyota</option>
              <option value="BMW">BMW</option>
              <option value="Mercedes-Benz">Mercedes-Benz</option>
              <option value="Honda">Honda</option>

              <option value="Husqvarna">Husqvarna</option>
              <option value="Black & Decker">Black & Decker</option>
              <option value="STIHL">STIHL</option>
              <option value="Craftsman">Craftsman</option>
              <option value="Scotts Miracle-Gro">Scotts Miracle-Gro</option>
            </select>
          </div>
          {/* Availability/Stock  */}
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Stock</span>
            </label>
            <input
              type="number"
              placeholder="Stock"
              defaultValue="Stock"
              {...register("Stock", { required: true })}
              className="input input-bordered w-full "
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-5">
          {/* Product Ratings & Reviews  */}
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Ratings</span>
            </label>
            <input
              type="number"
              defaultValue="Ratings"
              placeholder="Ratings"
              {...register("Ratings", { required: true })}
              className="input input-bordered w-full "
            />
          </div>
          {/*Discounts */}
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Discounts</span>
            </label>
            <input
              type="number"
              placeholder="Discounts"
              defaultValue="Discounts"
              {...register("Discounts", { required: true })}
              className="input input-bordered w-full "
            />
          </div>
        </div>
        {/* Product Description*/}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Product Description</span>
          </label>
          <textarea
            {...register("discriptoin", { required: true })}
            className="textarea textarea-bordered h-24"
            placeholder="Product Description"
            defaultValue="discriptoin"
          ></textarea>
        </div>

        <div className="form-control w-full my-6">
          <input
            {...register("image", { required: true })}
            type="file"
            className="file-input w-full "
          />
        </div>

        <button type="submit" className="btn text-center w-full">
          Add product <FaProductHunt></FaProductHunt>
        </button>
      </form>
    </div>
  );
};

export default UpdateProduct;
