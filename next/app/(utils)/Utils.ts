import { Variables } from '../Variables';

export class Utils {
  static async fetchSocketServer(
    pathName: string,
    options: { method?: 'get' | 'post'; data?: any }
  ) {
    const res = await fetch(`${Variables.SOCKET_URL}${pathName}`, {
      method: options.method || 'get',
      ...(options.data ? { body: JSON.stringify(options.data) } : null),
      headers: {
        'Content-Type': 'application/json',
      },
      cache: 'no-cache',
    });
    const json = await res.json();
    return json;
  }

  static getShortDate() {
    return new Date().toLocaleDateString('en-US');
  }
}
