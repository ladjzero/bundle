import Intent from './Intent'
import Service from './Service'

export default abstract class Acticity implements Service {
  matchIntent(i: Intent) { return false }

  abstract getView(): any

  abstract onIntent(i: Intent): Promise<any>
}
