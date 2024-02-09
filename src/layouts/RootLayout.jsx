import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import { Grid, GridItem } from "@chakra-ui/react";

export default function RootLayout() {
  return (
    <Grid templateColumns="repeat(6, 1fr)" bg="gray.50">
      <GridItem
        as="aside"
        colSpan="1"
        minHeight="100vh"
        bg="purple.400"
        p="30px"
      >
        <span>Sidebar</span>
      </GridItem>
      <GridItem as="main" colSpan={5} padding={"40px"}>
        <Navbar />
        <Outlet />
      </GridItem>
    </Grid>
  );
}
