import React from "react";

export const fetchUser = (userId) =>
  $.ajax({
    url: `/api/users/${userId}`,
  });
