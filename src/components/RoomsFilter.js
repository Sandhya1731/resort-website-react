import React from "react";
import { useContext } from "react";
import { RoomContext } from "../context";
import Title from "./Title";

const getUnique = (items, value) => {
  const uniqueValues = [...new Set(items.map((item) => item[value]))];
  return uniqueValues;
};
function RoomsFilter({ rooms }) {
  const context = useContext(RoomContext);
  //console.log(context);
  const {
    handleChange,
    type,
    capacity,
    price,
    minPrice,
    maxPrice,
    minSize,
    maxSize,
    breakfast,
    pets,
  } = context;

  let types = getUnique(rooms, "type");
  console.log(types);
  types = ["all", ...types];
  console.log(types);
  types = types.map((item, index) => {
    return (
      <option value={item} key={index}>
        {item}
      </option>
    );
  });

  let people = getUnique(rooms, "capacity");
  people = people.map((item, index) => {
    return (
      <option value={item} key={index}>
        {item}
      </option>
    );
  });
  return (
    <section className="filter-container">
      <Title title="search rooms" />
      <form action="" className="filter-form">
        <div className="form-group">
          <label htmlFor="type">room type</label>
          <select
            name="type"
            id="type"
            value={type}
            className="form-control"
            onChange={handleChange}
          >
            {types}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="capacity">guests</label>
          <select
            name="capacity"
            id="capacity"
            value={capacity}
            className="form-control"
            onChange={handleChange}
          >
            {people}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="price">Room Price ${price}</label>
          <input
            className="form-control"
            type="range"
            name="price"
            min={minPrice}
            max={maxPrice}
            id="price"
            value={price}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="size">room-size</label>
          <div className="size-inputs">
            <input
              className="size-input"
              type="number"
              name="minsize"
              id="size"
              value={minSize}
              onChange={handleChange}
            />

            <input
              className="size-input"
              type="number"
              name="maxsize"
              id="size"
              value={maxSize}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="form-group">
          <div className="single-extra">
            <input
              checked={breakfast}
              onChange={handleChange}
              type="checkbox"
              name="breakfast"
              id="breakfast"
            />
            <label htmlFor="breakfast">breakfast</label>
          </div>
          <div className="single-extra">
            <input
              checked={pets}
              onChange={handleChange}
              type="checkbox"
              name="pets"
              id="pets"
            />
            <label htmlFor="pets">pets</label>
          </div>
        </div>
      </form>
    </section>
  );
}

export default RoomsFilter;
