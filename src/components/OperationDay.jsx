import React, { useState, useEffect } from "react";

export default function OperationDay() {
  function parseDate(date) {
    let convertedDate;
    if (date !== undefined) {
      let newDate = new Date(date); // "2020-12-31"
      let dd = String(newDate.getDate()).padStart(2, "0");
      let mm = String(newDate.getMonth() + 1).padStart(2, "0"); //January is 0!
      let yyyy = newDate.getFullYear();
      convertedDate = dd + "." + mm + "." + yyyy;
    }
    return convertedDate;
  }
  let today = parseDate(new Date());

  return <div>Операционный день: {today}</div>;
}
