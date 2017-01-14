import { NgTestingPage } from './app.po';

describe('ng-testing App', function() {
  let page: NgTestingPage;

  beforeEach(() => {
    page = new NgTestingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
