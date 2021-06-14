import React from "react";
import styled from "styled-components";

const Container = styled.div`
  max-width: 780px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;
`;

const FilterItem = styled.div`
  padding: 10px;
`;

const Filter = ({ filter, setFilter }) => {
  return (
    <Container>
      <FilterItem>
        <label htmlFor="name">Name: </label>
        <input
          type="text"
          id="name"
          onBlur={(event) => {
            const value = event.target.value;
            const criteria = !value
              ? delete filter.beer_name
              : { ...filter, beer_name: value };
            setFilter({ ...criteria });
          }}
        />
      </FilterItem>
    </Container>
  );
};

export default Filter;
