import React from "react";

const AddRestaurant = () => {
  return (
    <div className="mb-4">
      <form action="">
        <div className="form-grop row">
          <div className="col">
            <input type="text" className="form-control" placeholder="name" />
          </div>
          <div className="col">
            <input
              type="text"
              className="form-control"
              placeholder="location"
            />
          </div>
          <div className="col">
            <select className="custom-select my-1 mr-sm-2 form-control">
              <option disabled>Price Range</option>
              <option value="1">$</option>
              <option value="2">$$</option>
              <option value="3">$$$</option>
              <option value="4">$$$$</option>
              <option value="5">$$$$$</option>
            </select>
          </div>
          <div className="col">
            <button className="btn btn-primary form-control w-50">Add</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddRestaurant;
