import { BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";
import React, { useContext } from "react";
import UserContext from "../context/UserContext";

export default function LogoutButton() {
  const { user } = useContext(UserContext);

  const logout = () => {
    localStorage.clear();
    window.location.reload();
  };

  return (
    <>
      {user && (
        <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink onClick={logout}>Logga ut</BreadcrumbLink>
        </BreadcrumbItem>
      )}
    </>
  );
}