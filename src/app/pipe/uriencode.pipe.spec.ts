import { async } from '@angular/core/testing';

import { UriEncodePipe } from './uriencode.pipe';

describe('UriEncodePipe', () => {
  const testString = ' !"#$%&\'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~ `‚ƒ„…†‡ˆ‰Š‹ŒŽ' +
    '‘’“”•–—˜™š›œžŸ ¡¢£¤¥¦§¨©ª«¬®¯°±²³´µ¶·¸¹º»¼½¾¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖ×ØÙÚÛÜÝÞßàáâãäåæçèéêëìíîïðñòóôõö÷øùúûüýþÿ';
  let pipe: UriEncodePipe;

  beforeEach(async(() => {
    pipe = new UriEncodePipe();
  }));

  it('should return default value when no input provided', async(() => {
    expect(pipe.transform(undefined, 'fallback'))
      .toBe('fallback');
  }));

  it('should properly transform strings', async(() => {
    expect(pipe.transform(testString, 'fallback'))
      .toBe(encodeURIComponent(testString));
  }));
});
