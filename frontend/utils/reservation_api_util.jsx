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
  return $.ajax({
    url: `/api/reservations/${reservationId}`,
    method: "DELETE",
  });
};

export const updateReservation = (reservation) => {
  return $.ajax({
    url: `/api/reservations/${reservation.id}`,
    method: "PATCH",
    data: { reservation },
  });
};
