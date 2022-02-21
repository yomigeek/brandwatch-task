import React, { useState, useEffect } from "react";
import { useQuery } from "react-query";
import styled from "styled-components";
import Header from "../../components/Header";
import Container from "../../components/Container";
import Loader from "../../components/Loader";
import Error from "../../components/Error";
import Table from "../../components/Table";
import TitleBox from "../../components/TitleBox";
import InfoBox from "../../components/InfoBox";
import Button from "../../components/Button";

// data
import { tableHead } from "./data";

// helpers
import { pagination } from "../../helpers/pagination";

// apis
import { getAllTopicsApi } from "./../../api/topics";

const LoaderBox = styled.div`
  text-align: center;
  margin: 120px 200px;
`;

const HomeBox = styled.div`
  display: flex;
  padding: 20px;
`;

const TableBox = styled.div`
  width: 80%;
`;

const DataBox = styled.div`
  display: flex;
  flex-direction: row;
  background: #fff;
  width: 20%;
`;

const CenterBox = styled.div`
  text-align: center;
  padding: 0px;
`;

const Home = () => {
  const [allTopics, setAllTopics] = useState([]);
  const [goFetch, setGoFetch] = useState(false);
  const [currentTopics, setCurrentTopics] = useState([]);
  const [paginationTotal, setPaginationTotal] = useState(10);
  const [singleTopic, setSingleTopic] = useState([]);

  // Triggers the lifecycle that calls the API after 2 seconds
  setTimeout(() => setGoFetch(true), 2000);

  // Mock API Call to fecth all topics using react query

  const {
    isLoading: getAllTopicsLoading,
    error: getAllTopicsError,
    refetch: getAllTopics
  } = useQuery("getAllTopics", () => getAllTopicsApi(), {
    enabled: false,
    retry: false,
    onSuccess: (data) => {
      setAllTopics(data.topics);
    }
  });

  // Lifecycle that is triggerd after 2seconds timeout
  useEffect(() => {
    if (goFetch) {
      getAllTopics();
      clearTimeout();
    }

    // eslint-disable-next-line
  }, [goFetch]);

  // this gets the single topic and set it in state
  const getSingleTopic = (topicId) => {
    const singleTopic = allTopics.filter((item) => item.id === topicId);
    setSingleTopic(singleTopic);
  };

  // This controls the total number of displayed topics to the user on click load
  // more button
  const loadMoreHandler = () => {
    if (paginationTotal < allTopics?.length) {
      setPaginationTotal(paginationTotal + 10);
    }
  };

  // Handles pagination processing using the pagination helper function
  useEffect(() => {
    if (allTopics?.length > 0) {
      const paginatedValues = pagination(allTopics, paginationTotal);
      setCurrentTopics(paginatedValues);
    }

    // eslint-disable-next-line
  }, [allTopics, paginationTotal]);

  return (
    <>
      <Header />
      <Container>
        <HomeBox>
          <TableBox>
            {getAllTopicsLoading || !goFetch ? (
              <LoaderBox>
                <Loader />
              </LoaderBox>
            ) : (
              <>
                {getAllTopicsError ? (
                  <Error message="Failed to fetch topics. Refresh Page again" />
                ) : (
                  <>
                    <TitleBox message="My Topics Challenge" />
                    <Table
                      data={currentTopics}
                      thead={tableHead}
                      viewHandler={getSingleTopic}
                    />
                  </>
                )}
              </>
            )}
          </TableBox>
          <DataBox>{<InfoBox data={singleTopic} />}</DataBox>
        </HomeBox>
      </Container>
      {/* Pagination box */}
      {getAllTopicsLoading || !goFetch ? (
        ""
      ) : (
        <CenterBox>
          <Button title="Load More" actionHandler={loadMoreHandler} />
        </CenterBox>
      )}
    </>
  );
};

export default Home;
