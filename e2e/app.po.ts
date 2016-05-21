export class RoutingExamplePage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('routing-example-app h1')).getText();
  }
}
