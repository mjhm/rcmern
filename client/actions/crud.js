// SPIKE
  import reduxCrud from 'redux-crud';
  import _ from 'lodash';
  import qs from 'qs';
  import callApi from '../util/apiCaller';

  const logError = (err) => {
    throw err;
  };

  const createFetchAction = (table, ...params) => {
    const queryParam =  _.isObject(params[params.length - 1]) ? params.pop() : {};
    const route = [table, ...params].join('/') +
      (_.isEmpty(queryParam) ? '' : qs.stringify(queryParam));
    return (dispatch) => {
      const { fetchStart, fetchSuccess, fetchError } = reduxCrud.actionCreatorsFor(table);
      dispatch(fetchStart());
      const promise = callApi(route)
      .then((data) => {
        dispatch(fetchSuccess(data));
      })
      .catch((response) => {
        dispatch(fetchError(response));
      })
      .catch(err => logError(err));
      return promise;
    };
  };

  // create(user) {
  //   return function(dispatch) {
  //     // Generate a cid so we can match the records
  //     var cid = cuid();
  //     user = user.merge({id: cid});
  //
  //     // optimistic creation
  //     const action = baseActionCreators.createStart(user);
  //     dispatch(action);
  //
  //     // send the request
  //     const url = `/users/`;
  //     const promise = someAjaxLibrary({
  //       url: url,
  //       method: 'POST',
  //       data: {
  //         user
  //       }
  //     });
  //
  //     promise.then(function(response) {
  //         const returnedUser = response.data.data;
  //         const action = baseActionCreators.createSuccess(returnedUser, cid);
  //         dispatch(action);
  //       }, function(response) {
  //         const action = baseActionCreators.createError(response, user);
  //         dispatch(action);
  //       }).catch(function(err) {
  //         console.error(err.toString());
  //       });
  //
  //     return promise;
  //   }
  // },
  //
  // update(user) {
  //   return function(dispatch) {
  //     // optimistic update
  //     const action = baseActionCreators.updateStart(user);
  //     dispatch(action);
  //
  //     // send the request
  //     const url = `/users/${user.id}`;
  //     const promise = someAjaxLibrary({
  //       url: url,
  //       method: 'PATCH',
  //       data: {
  //         user
  //       }
  //     });
  //
  //     promise.then(function(response) {
  //         const returnedUser = response.data.data;
  //         const action = baseActionCreators.updateSuccess(returnedUser);
  //         dispatch(action);
  //       }, function(response) {
  //         const action = baseActionCreators.updateError(response, user);
  //         dispatch(action);
  //       }).catch(function(err) {
  //         console.error(err.toString());
  //       });
  //
  //     return promise;
  //   }
  // },
  //
  // delete(user) {
  //   return function(dispatch) {
  //     // optimistic delete
  //     const action = baseActionCreators.deleteStart(user);
  //     dispatch(action);
  //
  //     // send the request
  //     const url = `/users/${user.id}`;
  //     const promise = someAjaxLibrary({
  //       url: url,
  //       method: 'DELETE'
  //     });
  //
  //     promise.then(function(response) {
  //         const returnedUser = response.data.data;
  //         const action = baseActionCreators.deleteSuccess(returnedUser);
  //         dispatch(action);
  //       }, function(response) {
  //         const action = baseActionCreators.deleteError(response, user);
  //         dispatch(action);
  //       }).catch(function(err) {
  //         console.error(err.toString());
  //       });
  //
  //     return promise;
  //   }
  // },


export { createFetchAction };
