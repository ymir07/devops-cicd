const createApp = require("./app");

const PORT = process.env.PORT || 3000;
const app = createApp();

app.listen(PORT, () => {
  console.log(`KT3 App is listening on port ${PORT}`);
});
