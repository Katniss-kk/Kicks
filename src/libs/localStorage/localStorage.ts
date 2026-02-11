export const saveToStorage = (key: string, data: unknown): void => {
  try {
    localStorage.setItem(key, JSON.stringify(data));
  } catch (error) {
    console.error('Ошибка сохранения:', error);
  }
};

export const getFromStorage = (key: string): unknown => {
  try {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
  } catch (error) {
    console.error('Ошибка чтения:', error);
    return null;
  }
};

export const removeFromStorage = (key: string): void => {
  localStorage.removeItem(key);
};
