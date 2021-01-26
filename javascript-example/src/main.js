import { anotherThing } from './another-file';

console.log(anotherThing);

export const timeout = () => {
  setTimeout(() => {
    console.log('I have finished the timeout');
  }, 2000);
};
