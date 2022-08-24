import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { useQuery } from "@apollo/client";

import { GET_PROJECT_BY_ID } from "../../graphql/graphqlQuery";

const Project = () => {
  const location = useLocation();
  console.log({ prerna: location.state.id });
  const { loading, error, data } = useQuery(GET_PROJECT_BY_ID, {
    variables: { id: location.state.id },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>error</p>;

  console.log("data", data, "error", error);

  return (
    <div className="project-body">
      {data && data.getProjectById  && (
        <h3 className="text-left">{data.getProjectById.name}</h3>
      )}
    </div>
  );
};
export default Project;
