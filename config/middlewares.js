module.exports = [
  "strapi::logger",
  "strapi::errors",
  "strapi::security",
  // "strapi::cors",
  "strapi::poweredBy",
  "strapi::query",
  "strapi::body",
  "strapi::session",
  "strapi::favicon",
  "strapi::public",
  {
    name: "strapi::cors",
    config: {
      origin: ["http://localhost:3000"], // or your frontend port
      methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
      headers: "*",
      credentials: true,
    },
  },
];
