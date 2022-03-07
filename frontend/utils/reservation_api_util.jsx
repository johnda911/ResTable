import React from "react";

export const fetchReservation = (reservationId) =>
  $.ajax({
    url: `/api/reservations/${reservationId}`,
  });
export const createReservation = (reservation) =>
  $.ajax({
    url: "/api/reservations",
    method: "POST",
    data: { reservation },
  });
export const deleteReservation = (reservationId) => {
  console.log("deleting======");
  return $.ajax({
    url: `/api/reservations/${reservationId}`,
    method: "DELETE",
  });
};
