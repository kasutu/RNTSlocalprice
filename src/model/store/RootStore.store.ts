import { createContext, useContext } from 'react';
import { ClassesStore } from './classes.store';

export class RootStore {
  public classes: ClassesStore;

  constructor() {
    this.classes = new ClassesStore();
  }
}

// study this
export const rootStoreInstance = new RootStore();
export const StoreContext = createContext(rootStoreInstance);

// wrapper
export const StoreProvider = StoreContext.Provider;
export const useStore = () => useContext(StoreContext);

// README: usage

/*

const rootStore = useStore()


Wrap everything in StoreProvider

return (
  <StoreProvider value={rootStoreInstance}>
    <NativeBaseProvider>
      rootStore.classes.items.forEach((item) => console.log(item))
    </NativeBaseProvider>
  </StoreProvider>
)

*/
