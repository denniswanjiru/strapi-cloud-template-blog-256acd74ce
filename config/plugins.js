module.exports = () => ({
  graphql: {
    enabled: true,
    config: {
      endpoint: "/graphql",
      playgroundAlways: true,
      shadowCRUD: true,
      introspection: true,
    },
  },
});
