import React from "react";

const Form = () => {
  return (
    <div className="w-full max-w-md p-6 border border-swamp-green rounded-xl shadow">
      <form className="space-y-4">
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="block text-2xs mb-1">
              First name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              className="w-full border rounded px-3 py-2 text-xs"
              placeholder="ex. Juan"
            />
          </div>

          <div>
            <label className="block text-2xs mb-1">Last name</label>
            <input
              type="text"
              className="w-full border rounded px-3 py-2 text-xs"
              placeholder="ex. Dela Cruz"
            />
          </div>
        </div>

        <div>
          <label className="block text-2xs mb-1">
            Phone Number <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            className="w-full border rounded px-3 py-2 text-sm"
            placeholder="+63"
          />
        </div>

        <div>
          <label className="block text-2xs mb-1">
            Job Title <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            className="w-full border rounded px-3 py-2 text-sm"
            placeholder="Company"
          />
        </div>

        <div>
          <label className="block text-2xs mb-1">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            className="w-full border rounded px-3 py-2 text-sm"
            placeholder="@gmail.com"
          />
        </div>

        <div>
          <label className="block text-2xs mb-1">
            What can we help you with?
          </label>
          <textarea
            rows="4"
            className="w-full border rounded px-3 py-2"
          />
        </div>

        <button
          type="submit"
          className="bg-swamp-green hover:bg-red-500 text-white px-5 py-2 text-sm rounded-xl"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form ;