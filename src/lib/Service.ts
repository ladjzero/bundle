import Intent from './Intent';

export default interface Service {
  matchIntent(i: Intent): boolean;
  onIntent(i: Intent): Promise<any>;
}

export default Service;
