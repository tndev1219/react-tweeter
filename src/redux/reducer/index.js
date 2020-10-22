/**
 * App Settings
 */
import _ from 'lodash';
//data
import { languages } from "../../assets/data/localeData";

//action types
import actions from "./action";

//app config
import AppConfig from "../../constants/AppConfig";

const INITIAL_STATE = {
   languages,
   selectedLocale: AppConfig.locale,
   showAlert: false,
   alertType: 'success',
   alertMessage: 'Initial Message',
   waiting: false,
   tweets: [],
   modalOpen: false,
   userInfo: null
};

export default (state = INITIAL_STATE, action) => {
   switch (action.type) {
      case actions.SHOW_ALERT:
         return {
            ...state,
            showAlert: true,
            alertMessage: action.payload.message,
            alertType: action.payload.alertType
         }
      case actions.HIDE_ALERT:
         return {
            ...state,
            showAlert: false
         }
      case actions.WAITING:
         return {
            ...state,
            waiting: action.status
         }
      case actions.GET_TWEETS_SUCCESS:
         return {
            ...state,
            tweets: _.clone(action.payload.tweets)
         }
      case actions.MODAL_OPEN:
         return {
            ...state,
            modalOpen: action.status
         }
      case actions.SET_USER_INFO:
         return {
            ...state,
            userInfo: action.userInfo
         }
      default:
         return { ...state };
   }
}