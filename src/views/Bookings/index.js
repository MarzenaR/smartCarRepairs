import React from "react";
import BookingsTable from "../../components/tables/BookingsTable";
import PageTitle from "../../components/atoms/PageTitle";

const Bookings = () => {
  return (
    <div>
      <div>
        <PageTitle>Bookings</PageTitle>
      </div>

      <BookingsTable />
    </div>
  );
};

export default Bookings;
