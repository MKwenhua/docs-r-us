import {
  makeExecutableSchema,
  addMockFunctionsToSchema,
} from 'graphql-tools';

import { resolvers } from './resolvers';

const typeDefs = `
  scalar CalendarDate
  scalar Time

  type Subscription {
    appointmentAdded: Appointment!
  }

  type Appointment {
    id: ID!
    date: CalendarDate!
    time: Time!
    status: String!
    canceled: Boolean
    purpose: String
    text: String!
    patientId: Patient!
    doctorId: Doctor!
  }

  type Doctor {
    id: ID!
    fullName: String!
    email: String!
    photo: String
    specialty: String
    createdAt: String!
    updatedAt: String!
    appointments: [Appointment!]!
    patients: [Patient!]!
  }

  type Patient {
    id: ID!
    fullName: String!
    email: String!
    doctorNotes: String
    records: String
    phone: String
    birthday: String!
    specialty: String
    createdAt: String!
    updatedAt: String!
    appointments: [Appointment!]!
    doctors: [Doctor!]!
  }

  type Query {
    allDoctors: [Doctor!]!
    getDoctor(id: ID!): Doctor
    allPatients: [Patient!]!
    getPatient(id: ID!): Patient
    doctorAppointments(doctorId: String!): [Appointment!]!
    patientAppointments(patientId: String!): [Appointment!]!
  }

  type Mutation {
    createAppointment(date: String!, purpose: String!, time: String!, description: String!, patientId: String!, doctorId: String!): Appointment!
    createDoctor(fullName: String!, photo: String!, email: String!): Doctor
  }

  schema {
    query: Query
    mutation: Mutation
    subscription: Subscription
  }
`;

const schema = makeExecutableSchema({ typeDefs, resolvers });
export { schema };
