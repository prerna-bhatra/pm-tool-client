import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

import { useQuery, gql } from "@apollo/client";
import { GET_ALL_PROJECTS } from "../../graphql/graphqlQuery";

const ProjectList = () => {
  const navigate = useNavigate();
  const { loading, error, data } = useQuery(GET_ALL_PROJECTS);

  console.log("loading", loading, "errrr", error, "data", data);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>error</p>;

  if (data) {
  }

  const goToProject = (projectId) => {
    navigate("/project", {
      state: {
        id: projectId,
      },
    });
  };

  return (
    <div className="project-list-body">
      <h3>Project List</h3>
      <Table>
        <TableHead>
          <TableCell>Name </TableCell>
          <TableCell>Lead</TableCell>
          <TableCell>Category</TableCell>
        </TableHead>

        {data &&
          data.getAllProjects.length > 0 &&
          data.getAllProjects.map((item, i) => (
            <TableRow onClick={() => goToProject(item.id)}>
              <TableCell className="project-name">{item.name}</TableCell>
              <TableCell>-</TableCell>
              <TableCell>-</TableCell>
            </TableRow>
            // <li </li>
          ))}
      </Table>
    </div>
  );
};

export default ProjectList;
