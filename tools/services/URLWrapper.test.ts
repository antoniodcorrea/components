import { URLWrapper } from './URLWrapper';

describe('URLWrapper', () => {
  const url = new URLWrapper('https://sub.example.com/path1/path2?a=1&b=2&c[d]=3');

  test('it should return the href', () => {
    expect(url.getHref()).toEqual('https://sub.example.com/path1/path2?a=1&b=2&c[d]=3');
  });

  test('it should return a domain', () => {
    expect(url.getDomain()).toEqual('sub.example.com');
  });

  test('it should return a domain without subdomain', () => {
    expect(url.getDomainWithoutSubdomain()).toEqual('example.com');
  });

  test('it should return the path', () => {
    expect(url.getPath()).toEqual('/path1/path2');
  });

  test('it should return the search string', () => {
    expect(url.getSearch()).toEqual('a=1&b=2&c[d]=3');
  });

  test('it should return a query param', () => {
    expect(url.getSearchParam('a')).toEqual('1');
  });

  test('it should return a query param', () => {
    expect(url.getSearchParam('c[d]')).toEqual('3');
  });

  test('it should not fail if asked to return a query param and it doesnt exist', () => {
    expect(url.getSearchParam('e')).toEqual(null);
  });

  test('it should return path and search', () => {
    expect(url.getPathAndSearch()).toEqual('/path1/path2?a=1&b=2&c[d]=3');
  });

  test('it should return the updated url when updating a query param', () => {
    expect(url.upsertSearchParam('c[d]', 4)).toEqual('https://sub.example.com/path1/path2?a=1&b=2&c[d]=4');
  });
});
