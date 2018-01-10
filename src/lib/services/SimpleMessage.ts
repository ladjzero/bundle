import Service from '../Service'
import Intent from '../Intent'

class SimpleMessage implements Service {
  listeners: Array<Function> = []

  matchIntent(i: Intent) {
    return ['msg', 'msg:on', 'msg:off'].indexOf(i.action) > -1
  }

  onIntent(i: Intent): Promise<any> {
    switch (i.action) {
      case 'msg':
        this.listeners.forEach(l => l(i.data))
        break;
      case 'msg:on':
        this.listeners.push(i.data)
      default: {
        const index = this.listeners.indexOf(i.data)

        if (index > -1) this.listeners.splice(index, 1)
      }

      return Promise.resolve()
    }
  }
}

export default SimpleMessage
