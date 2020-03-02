const { gql } = require("apollo-server");

const typeDefs = gql`
  type User {
    name: String
    email: String!
    password: String!
    boards: [Board]
  }
  type Board {
    name: String
    columns: [Column]
  }
  type Column {
    name: String!
    tickets: [Ticket]
  }
  type Ticket {
    name: String!
    text: String
  }
  type Query {
    user(email: String!, password: String!): [Board]
  }
  type Mutation {
    addUser(
      userName: String
      userEmail: String!
      userPassword: String!
    ): userUpdateResponse!
    addBoard(boardName: String): boardUpdateResponse!
    deleteBoard(boardName: String): boardUpdateResponse!
    updateBoard(boardName: String): boardUpdateResponse!
    addColumn(columnName: String): columnUpdateResponse!
    deleteColumn(columnName: String): columnUpdateResponse!
    updateColumn(columnName: String): columnUpdateResponse!
    addTicket(ticketName: String): ticketUpdateResponse!
    deleteTicket(ticketName: String): ticketUpdateResponse!
    updateTicket(ticketName: String): ticketUpdateResponse!
  }
  type userUpdateResponse {
    success: Boolean!
    message: String
  }
  type boardUpdateResponse {
    success: Boolean!
    message: String
    boards: [Board]
  }
  type columnUpdateResponse {
    success: Boolean!
    message: String
    columns: [Column]
  }
  type ticketUpdateResponse {
    success: Boolean!
    message: String
    tickets: [Ticket]
  }
`;

//Root Query

//Export schema
module.exports = typeDefs;
