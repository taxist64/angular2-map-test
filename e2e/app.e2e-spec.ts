import { Angular2MapTestPage } from './app.po';

describe('angular2-map-test App', function() {
  let page: Angular2MapTestPage;

  beforeEach(() => {
    page = new Angular2MapTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
