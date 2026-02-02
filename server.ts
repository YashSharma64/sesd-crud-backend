import dotenv from 'dotenv';
dotenv.config();

import app from './src/app';
// import "./src/config/db"; // Database connection will be added in the next commit

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
