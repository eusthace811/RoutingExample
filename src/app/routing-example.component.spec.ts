import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { RoutingExampleAppComponent } from '../app/routing-example.component';

beforeEachProviders(() => [RoutingExampleAppComponent]);

describe('App: RoutingExample', () => {
  it('should create the app',
      inject([RoutingExampleAppComponent], (app: RoutingExampleAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'routing-example works!\'',
      inject([RoutingExampleAppComponent], (app: RoutingExampleAppComponent) => {
    expect(app.title).toEqual('routing-example works!');
  }));
});
