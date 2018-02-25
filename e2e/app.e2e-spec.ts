import { SpoMusicWebPage } from './app.po';

describe('spo-music-web App', function() {
  let page: SpoMusicWebPage;

  beforeEach(() => {
    page = new SpoMusicWebPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
