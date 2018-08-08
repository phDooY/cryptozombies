module.exports = {
  networks: {
    // default
    development: {
      host: "localhost",
      port: 7545,
      network_id: "*",
    },

  },

  solc: {
    optimizer: {
      enabled: false,
    }
  },
}
