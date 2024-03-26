import React from "react";
import UsersTable from "../../components/tables/UsersTable";
import PageTitle from "../../components/atoms/PageTitle";

const Users = () => {
  return (
    <div>
      <PageTitle> Users </PageTitle>

      <UsersTable />
    </div>
  );
};

export default Users;
