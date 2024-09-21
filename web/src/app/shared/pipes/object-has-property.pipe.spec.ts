import { ObjectHasPropertyPipe } from './object-has-property.pipe';

describe('ObjectHasPropertyPipe', () => {
  it('create an instance', () => {
    const pipe = new ObjectHasPropertyPipe();
    expect(pipe).toBeTruthy();
  });
});
