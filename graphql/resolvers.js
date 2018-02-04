import { PubSub } from 'graphql-subscriptions';
import { withFilter } from 'graphql-subscriptions';
const pubsub = new PubSub();

const channels = [

]

const APPOINTMENT_ADDED = 'APPOINTMENT_ADDED';

export const resolvers = {
  // Subscription: {
  //   appointmentAdded: {
  //     subscribe: () => pubsub.asyncIterator(APPOINTMENT_ADDED),
  //   },
  // },
  Doctor: {
    appointments: ({ id }, args, { models }) =>
      models.Appointment.findAll({
        where: {
          doctorId: id,
        },
      }),
    patients: (doctor, args, { models }) =>
      doctor.getPatients(),
  },
  Patient: {
    appointments: ({ id }, args, { models }) =>
      models.Appointment.findAll({
        where: {
          doctorId: id,
        },
      }),
    doctors: (patient, args, { models }) =>
      patient.getDoctors(),
  },
  Appointment: {
    doctorId: ({ doctorId }, args, { models }) =>
      models.Doctor.findOne({
        where: {
          id: doctorId,
        },
      }),
    patientId: ({ patientId }, args, { models }) =>
      models.Patient.findOne({
        where: {
          id: patientId,
        },
      }),
  },
  CalendarDate: {
    __parseValue(value) {
      return new Date(value);
    },
    __serialize(value) {
      return new Date(value).getTime();
    },
    __parseLiteral(ast) {
      if (ast.kind === Kind.INT) {
        return parseInt(ast.value, 10);
      }
      return null;
    }
  },
  Time: {
    __parseValue(value) {
      return new Date(value);
    },
    __serialize(value) {
      return new Date(value).getTime();
    },
    __parseLiteral(ast) {
      if (ast.kind === Kind.INT) {
        return parseInt(ast.value, 10);
      }
      return null;
    }
  },
  Query: {
    allDoctors: (parent, args, { models }) => models.Doctor.findAll(),
    allPatients: (parent, args, { models }) => models.Patient.findAll(),
    getPatient: (parent, { id }, { models }) =>
      models.Patient.findOne({
        where: {
          id,
        },
      }),
    getDoctor: (parent, { id }, { models }) =>
      models.Doctor.findOne({
        where: {
          id,
        },
      }),
    doctorAppointments: (parent, { doctorId }, { models }) =>
      models.Appointment.findAll({
        where: {
          doctorId,
        },
      }),
    patientAppointments: (parent, { patientId }, { models }) =>
      models.Appointment.findAll({
        where: {
          patientId,
        },
      }),
  },

  Mutation: {
    createDoctor: (parent, args, { models }) => models.Doctor.create(args),
    createAppointment: (parent, args, { models }) => {
      models.Appointment.create(args).then(appointment => {
      return appointment.dataValues;
    })
    .then(appointment => {
      pubsub.publish(APPOINTMENT_ADDED, { appointmentAdded: appointment });
    })
    .catch(e => {
      console.error(e);
    });
    },
  },
  Subscription: {
   appointmentAdded: {
     subscribe: withFilter(() => pubsub.asyncIterator(APPOINTMENT_ADDED), (payload, variables) => {
       // The `messageAdded` channel includes events for all channels, so we filter to only
       // pass through events for the channel specified in the query
       console.log('APPOINTMENT_ADDED payload:', payload );
       console.log('APPOINTMENT_ADDED variables:', variables);
       return (payload.patientId === variables.patientId) || (payload.doctorId === variables.doctorId);
     }),
   }
 },
};
