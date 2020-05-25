// module.exports = {
//   googleClientID: '571357595884-ju0vdm5hlv7hitqpo9heoq8102e46ojn.apps.googleusercontent.com',
//   googleClientSecret: '18N0dxGHrgBwQtoCwNZOBtuT',
//   mongoURI: 'mongodb+srv://admin:9MBwE3EH1BILd3vz@cluster0-ytksg.mongodb.net/test?retryWrites=true&w=majority',
//   cookieKey: 'jdjeoporrlmmncvwepfok'
// }

module.exports = {
  googleClientID: process.env.GOOGLE_CLIENT_ID,
  googleClientSecret: process.env.GOOGLE_CLIENT_SECRET,
  facebookClientID: process.env.FACEBOOK_CLIENT_ID,
  facebookClientSecret: process.env.FACEBOOK_CLIENT_SECRET,
  mongoURI: process.env.MONGO_URI,
  cookieKey: process.env.COOKIE_KEY
}
