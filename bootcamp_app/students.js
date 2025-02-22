const { Pool } = require("pg");

console.log("creating pool");

const pool = new Pool({
  user: "development",
  password: "development",
  host: "localhost",
  database: "bootcampx",
});

// const { Client } = require("pg");

// const client = new Client({
//   user: "development",
//   password: "development",
//   host: "localhost",
//   database: "bootcampx",
// });
pool
  .query(
    `
SELECT id, name, cohort_id
FROM students
LIMIT 5;
`
  )
  .then((res) => {
    console.log(res.rows);
  })
  .catch((err) => console.error("query error", err.stack));