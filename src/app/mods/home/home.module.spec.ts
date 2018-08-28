import { HomeModule } from './home.module';

describe('HomeModule', () => {
  let componentsModule: HomeModule;

  beforeEach(() => {
    componentsModule = new HomeModule();
  });

  it('should create an instance', () => {
    expect(componentsModule).toBeTruthy();
  });
});
