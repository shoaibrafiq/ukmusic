module.exports = {
	port: process.env. PORT || 8081,
	db: {
	  database: process.env.DB_NAME || 'ukmusic',
	  user: process.env.DB_USER || 'ukmusic',
	  password: process.env.DB_PASS || 'ukmusic',
	  options: {
        dialect: process.env.DIALECT || 'sqlite',
        host: process.env.HOST || 'localhost',
        storage: './ukmusic.sqlite'
	  }
	}
}
