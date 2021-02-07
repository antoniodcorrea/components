import { testAddDefaultProtocol } from './testAddDefaultProtocol';

describe('testAddDefaultProtocol', () => {
  test('it should return the url if it already has http protocol', () => {
    expect(testAddDefaultProtocol('http://example.com')).toEqual('http://example.com');
  });
  test('it should return the url if it already has https protocol', () => {
    expect(testAddDefaultProtocol('https://example.com')).toEqual('https://example.com');
  });
  test('it should return the url if it already has ftp protocol', () => {
    expect(testAddDefaultProtocol('ftp://example.com')).toEqual('ftp://example.com');
  });
  test('it should add url with https protocol if it doesnt have', () => {
    expect(testAddDefaultProtocol('example.com')).toEqual('https://example.com');
  });
  test('it should add url with https protocol if it doesnt have', () => {
    expect(testAddDefaultProtocol('hello.example.com')).toEqual('https://hello.example.com');
  });
});
