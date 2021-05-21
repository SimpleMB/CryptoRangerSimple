import { BasicInformationStorage } from '../types/index';

export function populateFormStorageFromLocale(
  storage: BasicInformationStorage
) {
  const storageObj = { ...storage };
  Object.keys(storageObj).forEach((key) => {
    storageObj[key] = localStorage.getItem(key) || '';
  });
  return storageObj;
}
