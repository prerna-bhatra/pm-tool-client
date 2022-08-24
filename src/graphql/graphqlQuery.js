import { gql } from "@apollo/client";

const GET_ALL_PROJECTS = gql`
  query getAllProjects {
    getAllProjects {
      id
      name
      users {
        id
        name
        email
      }
      tasks {
        id
        name
        assignee {
          id
          email
          name
        }
        assigneedBy {
          id
          name
          email
        }
      }
    }
  }
`;

const GET_PROJECT_BY_ID = gql`
  query GetProjectById($id: String) {
    getProjectById(id: $id) {
      id
      name
      tasks {
        id
        name
        status
        category
        description
        start
        end
        assignee {
          id
          name
          email
        }
        assigneedBy {
          id
          name
          email
        }
      }
    }
  }
`;

export { GET_ALL_PROJECTS, GET_PROJECT_BY_ID };
