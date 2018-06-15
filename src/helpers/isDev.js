// @flow

/**
 * Is the application in dev mode
 *
 * @return {Boolean} Whether the app is in dev mode or not
 */
function isDev() {
  if (!process) return false;

  if (!process.env) return false;

  if (process.env.NODE_ENV !== 'development') return false;

  return true;
}

export default isDev;
