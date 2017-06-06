import { SnackAppPage } from './app.po';

describe('snack-app App', () => {
  let page: SnackAppPage;

  beforeEach(() => {
    page = new SnackAppPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
