import { BehaviorSubject } from 'rxjs';

export class SharedServicesProvider {
  tvDefinitions = new BehaviorSubject<any>('');
  productId = new BehaviorSubject<String>('');
}
