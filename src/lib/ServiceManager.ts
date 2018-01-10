import Service from './Service'
import Intent from './Intent'

export default class ServiceManager {
  constructor() {

  }

  services: Array<Service> = []

  push(s: Service) {
    this.services.push(s)
  }

  remove(s: Service) {
    const i = this.services.indexOf(s)

    if (i > -1) this.services.splice(i, 1)
  }
  
  intent(i: Intent): Promise<any> {
    const receivers = this.services.filter(s => s.matchIntent(i))

    return receivers[0].onIntent(i)
  }
}