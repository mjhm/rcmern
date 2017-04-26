// SPIKE
  /**
   * Root Reducer
   */
  import { combineReducers } from 'redux';
  import reduxCrud from 'redux-crud';
  import { enabledLanguages, localizationData } from '../intl/setup';

  // Import Reducers
  // import app from './modules/App/AppReducer';
  // import posts from './modules/Post/PostReducer';
  // import intl from './modules/Intl/IntlReducer';

  // stub intl reducer
  const initLocale = global.navigator && global.navigator.language || 'en';
  const initialState = {
    locale: initLocale,
    enabledLanguages,
    ...(localizationData[initLocale] || {}),
  };
  const intl = (state = initialState) => state;

  const fetchErrorReducer = (state = {}, action) => {
    if (action.type.match(/FETCH_ERROR$/)) {
      const err = ((action.error || {}).message) ? action.error : new Error('');
      err.message = `${action.type}: ${err.message}`;
      console.error(err);
    }
    return state;
  };

  const api = combineReducers({
    productTypeList: reduxCrud.List.reducersFor('product-types', { key: '_id' }),
    productTypeMap: reduxCrud.Map.reducersFor('product-types', { key: '_id' }),
    fetchErrorReducer,
  });

  // Combine all reducers into one root reducer
  export default combineReducers({
    // app,
    // posts,
    intl,
    api,
  });
