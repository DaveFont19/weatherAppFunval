import React from "react";
import { exportImages } from "../helper";

function ForeCast({ element, index, buttonActive }) {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const max = Math.floor(element.temp.max);
  const min = Math.floor(element.temp.min);
  const image = exportImages(element.weather[0].icon);

  const date = new Date(element.dt * 1000); // Convertir la fecha UNIX a objeto Date
  const dayOfWeek = daysOfWeek[date.getDay()]; // Obtener el día de la semana
  const dayOfMonth = date.getDate(+1); // Obtener el número del día
  const month = months[date.getMonth()]; // Obtener el mes

  const maxF = Math.floor((element.temp.max * 9) / 5) + 32;
  const minF = Math.floor((element.temp.min * 9) / 5) + 32;

  
  return (
    <div
      id="miniCard"
      className="container h-32 w-20 flex flex-col items-center mt-8"
    >
      <h2 className="text-white text-center mb-2">{index === 1 ? "Tomorrow" : `${dayOfWeek}, ${dayOfMonth} ${month}`}</h2>
      <img className="object-contain h-1/3" src={image} alt="Weather Icon" />
      <div key={index} className="space-x-4">
        <label className="text-white">{`${buttonActive ? max : maxF} ${
          buttonActive ? "°C" : "°F"
        }`}</label>
        <label id="min">{`${buttonActive ? min : minF} ${
          buttonActive ? "°C" : "°F"
        }`}</label>
      </div>
    </div>
  );
}

export default ForeCast;
