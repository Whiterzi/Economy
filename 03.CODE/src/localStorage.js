const platform = 'issue-management-platform'

export const loadState = () => {
    try {
      const serializedState = localStorage.getItem(platform);
      if (serializedState === null) {
        return undefined;
      }
      return JSON.parse(serializedState);
    } catch (error) {
      console.log('load localstorage error', error);
      return undefined;
    }
};