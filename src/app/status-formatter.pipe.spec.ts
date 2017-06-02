import { StatusFormatterPipe } from './status-formatter.pipe';

describe('StatusFormatterPipe', () => {
  it('create an instance', () => {
    const pipe = new StatusFormatterPipe();
    expect(pipe).toBeTruthy();
  });
});
