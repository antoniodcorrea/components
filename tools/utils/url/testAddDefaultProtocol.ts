export const testAddDefaultProtocol = (url: string) => (!/^(?:f|ht)tps?\:\/\//.test(url) ? 'https://' + url : url);
