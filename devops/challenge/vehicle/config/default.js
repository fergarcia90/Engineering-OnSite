module.exports = {
  api: {
    port: '8085',
  },
  services: {
    database: {
      host: 'onsite-db-vehicle',
      port: 5432,
      user: 'postgres',
      database: 'onsite',
      password: 'postgres',
    },
  },
};
