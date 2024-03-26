import React from "react";
import CarParkTable from "../../components/tables/GaragesTable";
import PageTitle from "../../components/atoms/PageTitle";

const Garages = () => {
  return (
    <div>
      <PageTitle> Garages </PageTitle>

      <CarParkTable />
    </div>
  );
};

export default Garages;
