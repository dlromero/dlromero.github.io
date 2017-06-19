import { LearningAngular2Page } from './app.po';

describe('learning-angular2 App', () => {
  let page: LearningAngular2Page;

  beforeEach(() => {
    page = new LearningAngular2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Daniel Leonardo Romero!');
  });
});
