const save = (key, value) => {
  try {
    const serializedState = JSON.stringify(value);
    localStorage.setItem(key, serializedState);
  } catch (error) {
    console.error('Set state error: ', error.message);
  }
};

const load = (key, defaultData) => {
  try {
    const serializedState = localStorage.getItem(key);
    return serializedState === null ? defaultData : JSON.parse(serializedState);
  } catch (error) {
    console.error('Get state error: ', error.message);
  }
};
const remove = key => {
  const serializedState = localStorage.removeItem(key);
};

export default {
  save,
  load,
  remove,
};
