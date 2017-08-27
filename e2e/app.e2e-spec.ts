import { FullstackdashboardPage } from './app.po';

describe('fullstackdashboard App', function() {
  let page: FullstackdashboardPage;

  beforeEach(() => {
    page = new FullstackdashboardPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
