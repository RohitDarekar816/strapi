const sqlite = {
  client: 'sqlite',
  connection: {
    filename: '.tmp/data.db',
  },
  useNullAsDefault: true,
};

const postgres = {
  client: 'postgres',
  connection: {
    database: process.env.DATABASE_NAME || 'strapi',
    user: process.env.DATABASE_USERNAME || 'strapi',
    password: process.env.DATABASE_PASSWORD || 'strapi',
    port: parseInt(process.env.DATABASE_PORT || '5432', 10),
    host: process.env.DATABASE_HOST || 'localhost',
  },
};

const mysql = {
  client: 'mysql',
  connection: {
    database: process.env.DATABASE_NAME || 'strapi',
    user: process.env.DATABASE_USERNAME || 'strapi',
    password: process.env.DATABASE_PASSWORD || 'strapi',
    port: parseInt(process.env.DATABASE_PORT || '3306', 10),
    host: process.env.DATABASE_HOST || 'localhost',
  },
};

const mariadb = {
  client: 'mysql',
  connection: {
    database: process.env.DATABASE_NAME || 'strapi',
    user: process.env.DATABASE_USERNAME || 'strapi',
    password: process.env.DATABASE_PASSWORD || 'strapi',
    port: parseInt(process.env.DATABASE_PORT || '3307', 10),
    host: process.env.DATABASE_HOST || 'localhost',
  },
};

const db = {
  mysql,
  sqlite,
  postgres,
  mariadb,
};

module.exports = {
  connection: process.env.DB ? db[process.env.DB] || db.sqlite : db.sqlite,
};
