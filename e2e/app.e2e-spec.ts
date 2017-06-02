import { ProjectManagerPage } from './app.po';

describe('project-manager App', () => {
  let page: ProjectManagerPage;

  beforeEach(() => {
    page = new ProjectManagerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
