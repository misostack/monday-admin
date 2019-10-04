import { AppPage } from './app.po';
import { browser, logging } from 'protractor';
import { environment } from '../../src/environments/environment';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it(`should display welcome message : ${environment.name}`, () => {
    page.navigateTo();
    expect(page.getTitleText()).toEqual(`${environment.name} app is running!`);
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
