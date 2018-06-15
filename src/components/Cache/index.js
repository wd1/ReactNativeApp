/**
 * A file containing caching functions.
 *
 * Extended description and documentation provided with inline comments.
 */

const Cache = () => {
  // Uses the AsyncStorage with @param-key to assign a key to the '@MKCache' store.
  // Also stores a string value under @param-value.
  //
  // @param key   A unique key to which the data 'value' will be stored under and will
  //              be used for retrieval as well.
  // @param value A string value to be stored against the @param-key. This is the data
  //              that is later retrieved when called against the @param-key.
  function saveCache(key, value) {
    // Good ol' try->catch function.
    try {
      AsyncStorage.setItem(`@MKCache:${key}`, value);
    } catch (error) {
      // Error saving data
    }
  }

  // Uses the 'getItem' function from AsyncStorage with @param-key to retrieve an amount
  // of pre-stored data.
  //
  // @param key   A unique key, once used to save string data against in the phones storage.
  function getCache(key) {
    // Good ol' try->catch function.
    //
    // Tries to retrieve the item against the user defined key, then validates an amount of data
    // if the amount validated == null, there is no data - so either there was nothing stored under
    // that key, or the key existed but no data was assigned to that storage.
    try {
      const value = AsyncStorage.getItem(`@MKCache:${key}`);
      // Validation
      if (value !== null) {
        // We have data!!
        console.log(value);
      }
    } catch (error) {
      // Error retrieving data - this is not linked to the == null validation - this means
      // that somewhere the code failed to execute.
    }
  }
};

export default Cache;
