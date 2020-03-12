const server = require("./api/server.js");



// MAKE THE PORT BE ASSIGNED BY THE SERVER

const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log(`\n*** Server Running on http://localhost:${port} ***\n`);
});
