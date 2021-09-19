// guide followed: https://adrianmanduc.medium.com/path-aliases-in-create-react-app-v4-without-ejecting-3d7ac5f2c86a
const path = require("path")

module.exports = {
  webpack: {
    alias: {
      '@components': path.resolve(__dirname, "src/components/"),
    }
  }
}