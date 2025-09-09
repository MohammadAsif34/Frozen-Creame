import React, { useState } from "react";
import { useSelector } from "react-redux";

const DashboardHome = () => {
  return (
    <div className="p-6 bg-gray-50 min-h-screen rounded-xl">
      {/* Header */}
      <h1 className="text-2xl font-bold mb-6">🍰 Cake Shop Dashboard</h1>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className="bg-white p-4 shadow rounded-2xl flex items-center justify-between">
          <div>
            <p className="text-gray-500">Total Orders</p>
            <h2 className="text-xl font-bold">1,240</h2>
          </div>
          <i className="fas fa-shopping-bag text-rose-500 text-3xl"></i>
        </div>

        <div className="bg-white p-4 shadow rounded-2xl flex items-center justify-between">
          <div>
            <p className="text-gray-500">Customers</p>
            <h2 className="text-xl font-bold">580</h2>
          </div>
          <i className="fas fa-users text-rose-500 text-3xl"></i>
        </div>

        <div className="bg-white p-4 shadow rounded-2xl flex items-center justify-between">
          <div>
            <p className="text-gray-500">Revenue</p>
            <h2 className="text-xl font-bold">₹1,20,000</h2>
          </div>
          <i className="fas fa-rupee-sign text-rose-500 text-3xl"></i>
        </div>

        <div className="bg-white p-4 shadow rounded-2xl flex items-center justify-between">
          <div>
            <p className="text-gray-500">Growth</p>
            <h2 className="text-xl font-bold">+15%</h2>
          </div>
          <i className="fas fa-chart-line text-rose-500 text-3xl"></i>
        </div>
      </div>

      {/* active products  */}
      <ActiveProducts />

      {/* Sales Chart Placeholder */}
      <div className="bg-white shadow rounded-2xl p-6 mb-6">
        <h2 className="text-lg font-semibold mb-4">Monthly Sales</h2>
        <div className="h-48 bg-gray-100 flex items-center justify-center rounded-xl">
          <p className="text-gray-500">[Sales Chart Here]</p>
        </div>
      </div>

      {/* Recent Orders */}
      <div className="bg-white shadow rounded-2xl p-6 mb-6">
        <h2 className="text-lg font-semibold mb-4">Recent Orders</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b bg-rose-100">
                <th className="py-2 px-3">Order ID</th>
                <th className="py-2 px-3">Customer</th>
                <th className="py-2 px-3">Item</th>
                <th className="py-2 px-3">Status</th>
                <th className="py-2 px-3">Total</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="py-2 px-3">#1001</td>
                <td className="py-2 px-3">Riya Sharma</td>
                <td className="py-2 px-3">Chocolate Cake</td>
                <td className="py-2 px-3 text-green-600">Delivered</td>
                <td className="py-2 px-3">₹650</td>
              </tr>
              <tr className="border-b">
                <td className="py-2 px-3">#1002</td>
                <td className="py-2 px-3">Amit Verma</td>
                <td className="py-2 px-3">Strawberry Pastry</td>
                <td className="py-2 px-3 text-yellow-600">Pending</td>
                <td className="py-2 px-3">₹250</td>
              </tr>
              <tr>
                <td className="py-2 px-3">#1003</td>
                <td className="py-2 px-3">Sana Khan</td>
                <td className="py-2 px-3">Black Forest</td>
                <td className="py-2 px-3 text-blue-600">Preparing</td>
                <td className="py-2 px-3">₹450</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;

const ActiveProducts = () => {
  const products = useSelector((s) => s.product.all_products);
  const [size, setSize] = useState(8);
  console.log("active :: ", products);

  if (products?.length <= 0)
    return (
      <div className="bg-white shadow rounded-2xl p-6 my-3">
        <span className="text-red-500 text-2xl px-2">•</span>
        No Active product
      </div>
    );
  return (
    <>
      {/* Active products  */}
      <div className="bg-white shadow rounded-2xl p-6 my-3">
        <h2 className="text-lg font-semibold mb-4">
          <span className="text-green-500 text-2xl px-2">•</span>
          Active Products
        </h2>
        <div className="overflow-x-auto rounded-xl overflow-hidden border border-b-transparent border-gray-300">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b  border-gray-300 bg-rose-100">
                <th className="py-2 px-3">Sl No</th>
                <th className="py-2 px-3">Product ID</th>
                <th className="py-2 px-3">Name</th>
                <th className="py-2 px-3">Stock</th>
                <th className="py-2 px-3">price</th>
                {/* <th className="py-2 px-3">Total</th> */}
              </tr>
            </thead>
            <tbody>
              {products?.slice(0, size)?.map((item, idx) => (
                <>
                  <tr className="border-b border-dotted border-gray-300">
                    <td className="py-2 px-3">{idx + 1}</td>
                    <td className="py-2 px-3">{item?.sku}</td>
                    <td className="py-2 px-3">{item?.name}</td>
                    <td className="py-2 px-3">{item?.stock}</td>
                    <td className="py-2 px-3 text-green-600">
                      {item?.final_price}
                      <span className="px-4 text-red-500 text-xs">
                        <i className="bi bi-tag"></i>
                        {item?.discount}%
                      </span>
                    </td>
                    {/* <td className="py-2 px-3">₹650</td> */}
                  </tr>
                </>
              ))}
            </tbody>
          </table>
        </div>
        <div className="pt-2  text-center text-blue-500">
          <button
            className="hover:cursor-pointer hover:underline"
            onClick={() => {
              if (size == 8) setSize(products.length);
              else setSize(8);
            }}
          >
            {size == 8 ? "See More" : "See Less"}
          </button>
        </div>
      </div>
    </>
  );
};
