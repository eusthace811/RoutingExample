import { RoutingExamplePage } from './app.po';

describe('routing-example App', function() {
  let page: RoutingExamplePage;

  beforeEach(() => {
    page = new RoutingExamplePage();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('routing-example works!');
  });
});
