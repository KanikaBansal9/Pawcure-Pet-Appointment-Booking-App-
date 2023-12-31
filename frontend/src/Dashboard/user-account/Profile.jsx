import React from "react";

const Profile = () => {
  return (
    <div>
      <form onSubmit={submitHandler}>
        <div className="mb-5 ">
          <input
            type="text"
            placeholder="Full Name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="w-full pr-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none 
         focus:border-b-primaryColor cursor-pointer"
            required
          />
        </div>
        <div className="mb-5 ">
          <input
            type="email"
            placeholder="Enter your email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full pr-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none 
         focus:border-b-primaryColor cursor-pointer"
            required
          />
        </div>
        <div className="mb-5 ">
          <input
            type="password"
            placeholder="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            className="w-full pr-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none 
         focus:border-b-primaryColor cursor-pointer"
            required
          />
        </div>

        <div className="mb-5 flex items-center justify-between">
          <label className="text-headingColor font-bold text-[16px] leading-7">
            Are you a :
            <select
              name="role"
              value={formData.role}
              onChange={handleInputChange}
              className="text-textColor font-semibold text-[15px] leading-7 
            px-4 py-3 focus:outline-none "
              id=""
            >
              <option value="patient"> Patient</option>
              <option value="doctor">Doctor</option>
            </select>
          </label>

          <label className="text-headingColor font-bold text-[16px] leading-7">
            Gender:
            <select
              name="gender"
              value={formData.gender}
              onChange={handleInputChange}
              className="text-textColor font-semibold text-[15px] leading-7 
            px-4 py-3 focus:outline-none "
              id=""
            >
              <option value=""> Select</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </label>
        </div>

        <div className="mb-5 flex items-center gap-3">
          <figure className="w-[60px] h-[60px] rounded-full border-2 border-solid border-primaryColor flex items-center justify-center">
            <img src={avatar} alt="" className="w-full rounded-full " />
          </figure>

          <div className="relative w-[130px] h-[50px] ">
            <input
              type="file"
              name="photo"
              id="customFile"
              onChange={handleFileInputChange}
              accept=".jpg, .png"
              className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
            />

            <label
              htmlFor="customFile"
              className="absolute top-0 left-0 w-full h-full flex items-center
    px-[0.75rem] py-[0.375rem] text-[15px] leading-6 overflow-hidden bg-[#0066ff46] text-headingColor 
    font-semibold rounded-lg truncate cursor-pointer "
            >
              Upload Photo
            </label>
          </div>
        </div>

        <div className="mt-7">
          <button
            type="submit"
            className="w-full bg-primaryColor text-white text-[18px] leading-[30px] rounded-lg px-4 py-3"
          >
            Sign Up
          </button>
        </div>

        
      </form>
    </div>
  );
};

export default Profile;
