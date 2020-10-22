const actions = {
   HIDE_ALERT: 'HIDE_ALERT',
   SHOW_ALERT: 'SHOW_ALERT',
   WAITING: 'WAITING',
   GET_TWEETS: 'GET_TWEETS',
   GET_TWEETS_SUCCESS: 'GET_TWEETS_SUCCESS',
   MODAL_OPEN: 'MODAL_OPEN',
   SET_USER_INFO: 'SET_USER_INFO',
   showAlert: (message, alertType) => ({
      type: actions.SHOW_ALERT,
      payload: { message, alertType }
   }),
   hideAlert: () => ({
      type: actions.HIDE_ALERT,
   }),
};

export const waiting = (status) => {
   return {
      type: actions.WAITING,
      status
   }
}

export const getTweets = (keyword) => {
   return {
      type: actions.GET_TWEETS,
      keyword
   }
}

export const modalOpen = (status) => {
   return {
      type: actions.MODAL_OPEN,
      status
   }
}

export const setUserInfo = (userInfo) => {
   return {
      type: actions.SET_USER_INFO,
      userInfo
   }
}

export default actions;
