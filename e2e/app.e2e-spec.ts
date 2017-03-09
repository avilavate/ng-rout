import { NgRoutPage } from './app.po';

describe('ng-rout App', () => {
  let page: NgRoutPage;

  beforeEach(() => {
    page = new NgRoutPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('rt works!');
  });
});
