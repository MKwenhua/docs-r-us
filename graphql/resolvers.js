module.exports = {
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
    createAppointment: (parent, args, { models }) => models.Appointment.create(args),
  },
};
