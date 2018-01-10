
import SimpleMessge from './services/SimpleMessage'
import RootView from './services/RootView'
import ServiceManager from './ServiceManager'

declare type Core = {
  serviceManager: ServiceManager
}

const core: Core = {
  serviceManager: new ServiceManager
}

core.serviceManager.push(new RootView)
core.serviceManager.push(new SimpleMessge)

export default core
