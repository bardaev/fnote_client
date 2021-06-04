const path = require('path')
const { Application } = require('spectron')

const appPath = () => {
  switch (process.platform) {
    case 'darwin':
      return path.join(__dirname, '..', '.tmp', 'mac', 'FnoteClient.app', 'Contents', 'MacOS', 'FnoteClient')
    case 'linux':
      return path.join(__dirname, '..', '.tmp', 'linux', 'FnoteClient')
    case 'win32':
      return path.join(__dirname, '..', '.tmp', 'win-unpacked', 'FnoteClient.exe')
    default:
      throw Error(`Unsupported platform ${process.platform}`)
  }
}
global.app = new Application({ path: appPath() })
