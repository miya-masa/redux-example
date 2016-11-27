export const LOADING = 'loader.LOADING';
export const HIDE = 'loader.HIDE';

export function loading() {
  return {
    type: LOADING
  };
}

export function hide() {
  return {
    type: HIDE
  };
}
