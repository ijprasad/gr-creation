import { GrCreationPage } from './app.po';

describe('gr-creation App', () => {
  let page: GrCreationPage;

  beforeEach(() => {
    page = new GrCreationPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
