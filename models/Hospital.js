module.exports = (sequelize, DataTypes) => {
  const Hospital = sequelize.define('hospital', {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    name: DataTypes.STRING,
    address: {
      type: DataTypes.STRING,
      unique: true
    },
    place_id: DataTypes.STRING,
    lat: DataTypes.FLOAT,
    lng: DataTypes.FLOAT,
    position: DataTypes.GEOMETRY('POINT', 4326),
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
  }, {
    indexes: [
      {
        name: 'hospital_lat_index',
        method: 'BTREE',
        fields: ['lat']
      }
    ]
  });

  Hospital.associate = ({Doctor}) => {
    Hospital.hasMany(Doctor, {as: 'doctors'});
  };

  return Hospital;
}
