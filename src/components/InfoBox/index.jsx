import React from "react";
import styled from "styled-components";
import { sentimentColorPicker } from "../../helpers/sentimentColorPicker";

const Box = styled.div`
  padding: 20px;
  background: #fff1dc;
  color: #f26351;
  border: 2px solid #fff1dc;
  font-size: 12px;
  text-align: center;
`;

const Title = styled.div`
  font-weight: bold;
  margin-right: 10px;
  margin-bottom: 20px;
  text-align: center;
  font-size: 13px;
  color: #0e2f5a;
`;

const SentimentText = styled.span`
  color: ${({ sentimentType }) =>
    sentimentType ? sentimentColorPicker(sentimentType) : "#0E2F5A"}; ;
`;

const InfoBox = ({ data = [] }) => {
  return (
    <Box>
      {data?.length < 1 ? (
        <div>
          <br />
          No topic selected <br />
          <br />
          Please click "View" to select a topic
        </div>
      ) : (
        <>
          <Title>Information on topic {`"${data[0].label}"`}</Title>
          <Title>Total Mentions : {data[0].volume}</Title>

          <Title>
            Positive Mentions:{" "}
            <SentimentText sentimentType="positive">
              {data[0].sentiment.positive}
            </SentimentText>
          </Title>
          <Title>
            Neutral Mentions:{" "}
            <SentimentText sentimentType="negative">
              {data[0].sentiment.negative}
            </SentimentText>
          </Title>
          <Title>
            Negative Mentions:{" "}
            <SentimentText sentimentType="neutral">
              {data[0].sentiment.neutral}
            </SentimentText>{" "}
          </Title>
          <br />
        </>
      )}
    </Box>
  );
};

export default InfoBox;
