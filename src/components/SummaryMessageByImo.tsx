import { QueryResult, useQuery } from "@apollo/client";
import React from "react";
import { GET_VESSEL_SUMMARY_BY_IMO } from "../gql/queries";
import Message from "./Message";
import Typewriter from "./Typewriter";

type SummaryResponse = {
  vesselSummary: {
    summary: string;
    key: string;
    __typename: string;
  };
};

export default function SummaryMessageByImo({
  vesselImo,
  id,
}: {
  vesselImo: string;
  id: string;
}) {
  const { loading, error, data }: QueryResult<SummaryResponse> = useQuery(
    GET_VESSEL_SUMMARY_BY_IMO,
    {
      variables: {
        vesselImo: vesselImo,
      },
    }
  );
  return (
    <Message id={id} loading={loading}>
      {error && <ErrorMsg />}
      {data?.vesselSummary.summary && (
        <Summary summary={data!.vesselSummary.summary} />
      )}
    </Message>
  );
}

const ErrorMsg = () => {
  return (
    <span className="error">There was an error loading vessel summary!</span>
  );
};

const NOT_FOUND_VESSEL_MSG = "Error";
const Summary = ({ summary }: { summary: string }) => {
  if (summary.includes(NOT_FOUND_VESSEL_MSG))
    return (
      <span className="error">Not found vessel information to summarize</span>
    );

  return <Typewriter>{`Summary:\n\n${summary}`}</Typewriter>;
};
