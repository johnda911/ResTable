import React from "react";

export const createReservation = (reservation) =>
  $.ajax({
    url: "/api/reservations",
    method: "POST",
    data: { reservation },
  });
export const fetchReservation = (reservationId) =>
  $.ajax({
    url: `/api/reservations/${reservationId}`,
  });
export const deleteReservation = (reservationId) =>
  $.ajax({
    url: `/api/reservations/${reservationId}`,
    method: "DELETE",
  });
