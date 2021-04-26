const AppBootHook = require('./utils/app-boot-hook')

module.exports = app => {
    new AppBootHook(app)
}
