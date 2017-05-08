import { MyCLIappPage } from './app.po';

describe('my-cliapp App', () => {
  let page: MyCLIappPage;

  beforeEach(() => {
    page = new MyCLIappPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
