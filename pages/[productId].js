import React from "react";
import BeerDetail from "../src/components/BeerDetail";

const BeerDetailPage = ({ productId }) => {
  return productId && <BeerDetail {...{ productId }} />;
};

export const getServerSideProps = async (context) => {
  const { query } = context;
  return {
    props: {
      productId: query.productId,
    },
  };
};

export default BeerDetailPage;
