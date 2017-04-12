module.exports = (db) => { 
  return db.queryAsync('CREATE TABLE IF NOT EXISTS patios (\
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,\
    name VARCHAR(100) NOT NULL,\
    number VARCHAR(10) DEFAULT NULL,\
    street VARCHAR(100) DEFAULT NULL,\
    city VARCHAR(21) DEFAULT NULL,\
    state VARCHAR(12) DEFAULT NULL,\
    zipcode VARCHAR(10) DEFAULT NULL,\
    owerid INT DEFAULT NULL,\
    hours VARCHAR(100) DEFAULT NULL\
    );')
    // .then(() => {
    //   return db.queryAsync('CREATE TABLE IF NOT EXISTS photos');
    // })
    // .then(() => {
    //   return db.queryAsync('CREATE TABLE IF NOT EXISTS responses');
    // })
    // .then(() => {
    //   return db.queryAsync('CREATE TABLE IF NOT EXISTS reviews');
    // })
    // .then(() => {
    //   return db.queryAsync('CREATE TABLE IF NOT EXISTS tags');
    // })
    // .then(() => {
    //   return db.queryAsync('CREATE TABLE IF NOT EXISTS reviews_tags');
    // })
    // .then(() => {
    //   return db.queryAsync('CREATE TABLE IF NOT EXISTS users');
    // })
    // .then(() => {
    //   return db.queryAsync('CREATE TABLE IF NOT EXISTS users_favorites');
    // })
    // .then(() => {
    //   return db.queryAsync('CREATE TABLE IF NOT EXISTS patios_tags');
    // })
}