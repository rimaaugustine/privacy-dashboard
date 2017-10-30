import { PrivacydashboardPage } from './app.po';

describe('privacydashboard App', () => {
  let page: PrivacydashboardPage;

  beforeEach(() => {
    page = new PrivacydashboardPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
