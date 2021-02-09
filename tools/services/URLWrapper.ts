import psl from 'psl';
import { addDefaultHttps } from '../utils/url/addDefaultHttps';

export class URLWrapper {
  private readonly url: URL;
  private readonly host: string;
  private readonly path: string;
  private readonly searchParams: URLSearchParams;

  constructor(rawURL: string) {
    try {
      const editedURL = addDefaultHttps(rawURL);

      const url = new URL(editedURL);
      this.url = url;
      this.host = url.hostname;
      this.path = url.pathname;
      this.searchParams = this.url.searchParams;
    } catch (err) {
      console.error('Un-parsable URL', err);
    }
  }

  getHref(): string | undefined {
    return this.url?.href;
  }

  getPath(): string | undefined {
    return this.path;
  }

  getDomain(): string | undefined {
    return this.host;
  }

  getDomainWithoutSubdomain(): string {
    return psl.get(this.url.hostname);
  }

  getSearch(): string | undefined {
    return decodeURI(this.searchParams.toString());
  }

  getPathAndSearch(): string | undefined {
    const aaa = `${this.getPath()}?${this.getSearch()}`;

    return aaa;
  }

  getSearchParam(field: string): any {
    return this.searchParams.get(field);
  }

  upsertSearchParam(field: string, value: string | number): string {
    this.searchParams.set(field, String(value));

    return decodeURI(this.url.href);
  }
}
