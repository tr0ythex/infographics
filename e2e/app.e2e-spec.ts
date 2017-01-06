import { InfographicsPage } from './app.po';

describe('infographics App', function() {
  let page: InfographicsPage;

  beforeEach(() => {
    page = new InfographicsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
