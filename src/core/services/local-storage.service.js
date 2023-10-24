export class LocalStorageService {
  static get = (key) => localStorage.getItem(key);
  static set = (key, value) => localStorage.setItem(key, value);
}
