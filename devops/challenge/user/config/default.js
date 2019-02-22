module.exports = {
  api: {
    port: '8080',
  },
  services: {
    vehicle: {
      protocol: 'http',
      host: 'onsite-devops-vehicle',
      port: '8085',
    },
    database: {
      host: 'onsite-db-user',
      port: 5432,
      user: 'postgres',
      database: 'onsite',
      password: 'postgres',
    },
  },
};
