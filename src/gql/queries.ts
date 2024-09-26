import { gql } from "@apollo/client";

export const GET_VESSEL_SUMMARY_BY_IMO = gql`
  query VesselSummary($vesselImo: String!) {
    vesselSummary(vesselImo: $vesselImo) {
      summary
    }
  }
`;
