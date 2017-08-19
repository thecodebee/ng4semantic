import { Ng4semanticPage } from './app.po';

describe('ng4semantic App', () => {
  let page: Ng4semanticPage;

  beforeEach(() => {
    page = new Ng4semanticPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
