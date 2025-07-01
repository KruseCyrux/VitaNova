export const loadData = (key, fallback) => {
    const stored = localStorage.getItem(key);
    return stored ? JSON.parse(stored) : fallback;
};

export const saveData = (key, data) => {
    localStorage.setItem(key, JSON.stringify(data));
};