import { AppPage } from './app.po';

describe('github-lister App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('[ GitHub Lister Application ]');
  });
});
