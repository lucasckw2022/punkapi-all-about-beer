import { useState } from "react";
import BeerListing from "../src/components/BeerListing";
import Filter from "../src/components/Filter";

export default function Home() {
  const [filter, setFilter] = useState({});
  return (
    <>
      <Filter {...{ setFilter, filter }} />
      <BeerListing {...{ filter }} />
    </>
  );
}
