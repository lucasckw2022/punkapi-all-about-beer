import React, { useEffect, useState, useMemo } from "react";
import useBeers from "../../hooks/useBeers";
import styled from "styled-components";
import { useRouter } from "next/router";

const Container = styled.div`
  max-width: 780px;
  margin: 0 auto;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 50px 20px;
  @media (max-width: 480px) {
    flex-direction: column;
    align-items: left;
  }
`;

const ImageContainer = styled.div`
  width: 50%;
  @media (max-width: 480px) {
    width: 100%;
    height: 150px;
    margin: 0 auto;
  }
  margin-right: 10px;
`;

const Image = styled.div`
  width: 100%;
  height: 100%;
  background-image: ${({ image }) => `url(${image})`};
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 50%;
  @media (max-width: 480px) {
    width: 100%;
  }
`;

const ContentItem = styled.div`
  ${({ bold }) => bold && `font-weight: bold;`}
  margin-top: 15px;
`;

const ContentTitle = styled.div`
  font-size: 30px;
  font-weight: bold;
  @media (max-width: 480px) {
    text-align: center;
  }
`;

const BeerDetail = ({ productId, ...props }) => {
  const [params, setParams] = useState({ ids: productId });
  const { beers, error, loading } = useBeers(params);

  useMemo(() => {
    setParams({ ids: productId });
  }, [productId]);

  return (
    <Container {...props}>
      {error && <div>{error}</div>}
      {loading && <div>Loading</div>}
      {!error &&
        !loading &&
        beers.map(
          ({
            image_url,
            name,
            abv,
            description,
            brewers_tips,
            food_pairing,
            id,
          }) => (
            <ContentContainer key={`beers-${id}`}>
              <ImageContainer>
                <Image image={image_url} />
              </ImageContainer>
              <TextContainer>
                <ContentItem>
                  <ContentTitle>{name}</ContentTitle>
                </ContentItem>
                <ContentItem>
                  <span style={{ fontWeight: "bold" }}>ABV: </span>
                  {`${abv}%`}
                </ContentItem>
                <ContentItem>
                  {[description, brewers_tips].join(" ")}
                </ContentItem>
                <ContentItem bold>Why Not Try With:</ContentItem>
                <ContentItem>
                  {food_pairing.map((pairing, id) => (
                    <div key={`food-pairing-${id}`}>{pairing}</div>
                  ))}
                </ContentItem>
              </TextContainer>
            </ContentContainer>
          )
        )}
    </Container>
  );
};

export default BeerDetail;
