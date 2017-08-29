module.exports = {
  port: 3000,
  aws: {
    accessId: process.env.ACCESS_KEY_ID || "AKIAJETAJ62TNCEFZCMA",
    secret: process.env.SECRET_ACCESS_KEY || "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",
    bucket: 'coding-challenges',
    base: "https://coding-challenges.s3.amazonaws.com"
  },
  routes: {
    files: '/api/files',
    projects: '/api/projects'
  },
  db: {
    url: 'mongodb://heroku_vnj7nqfj:lfqk9oj7uakj5cdsdml5m7je2t@ds143707.mlab.com:43707/heroku_vnj7nqfj'
  }
}
