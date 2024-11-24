import React from "react";

const Booking = () => {
  return (
    <div className="bg-[#f1f8ff] text-gray-900">
      {/* 2. Booking Box */}
      <section className="container mx-auto px-4 py-10">
        <div className="bg-white p-6 shadow-md relative mt-[-85px]">
          <form className="grid grid-cols-1 md:grid-cols-5 gap-4">
            <input
              type="date"
              className="p-3 border border-gray-300"
              placeholder="Check-In"
            />
            <input
              type="date"
              className="p-3 border border-gray-300"
              placeholder="Check-Out"
            />
            <select className="p-3 border border-gray-300">
              <option>Adults</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
            </select>
            <select className="p-3 border border-gray-300">
              <option>Children</option>
              <option>0</option>
              <option>1</option>
              <option>2</option>
            </select>
            <button className="col-span-full md:col-span-1 bg-[#FEA116] text-white px-6 py-2 hover:bg-[#e58d0a]">
              Search
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Booking;
