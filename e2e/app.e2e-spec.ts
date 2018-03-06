import { MyschoolPage } from './app.po';

describe('myschool App', () => {
  let page: MyschoolPage;

  beforeEach(() => {
    page = new MyschoolPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
