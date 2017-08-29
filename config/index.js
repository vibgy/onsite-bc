module.exports = {
  port: 3000,
  aws: {
    accessId: process.env.ACCESS_KEY_ID,
    secret: process.env.SECRET_ACCESS_KEY,
    bucket: 'coding-challenges',
    base: "https://coding-challenges.s3.amazonaws.com"
  },
  routes: {
    files: '/api/files',
    projects: '/api/projects',
    folders: '/api/folders'
  },
  db: {
    url: process.env.MONGODB_URL
  }
}
