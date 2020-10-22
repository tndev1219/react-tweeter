/**
 * Main App
 */
import React, { Fragment } from 'react';
import { connect } from "react-redux";
import SweetAlert from 'react-bootstrap-sweetalert';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { IntlProvider } from 'react-intl';
import { Route, Switch } from 'react-router-dom';

// css
import './lib/css.js';

// App locale
import AppLocale from './lang';

//Add Loaders
import {
   AsyncHomePageComponent,
   AsyncTweetPageComponent,
   AsyncPageNotFoundComponent,
} from './util/AsyncRoutes';

// actions
import actions from './redux/reducer/action';

// themes
import primaryTheme from './themes/primaryTheme';

const { hideAlert } = actions;

class App extends React.Component {

   /**
    * method for update window top when new page render
    */
   componentDidUpdate(prevProps) {
      if (this.props.location !== prevProps.location) {
         window.scrollTo(0, 0);
      }
   }

   render() {
      const { selectedLocale, showAlert, alertMessage, alertType, hideAlert } = this.props;
      const currentAppLocale = AppLocale[selectedLocale.locale];

      return (
         <MuiThemeProvider theme={primaryTheme}>
            <IntlProvider
               locale={currentAppLocale.locale}
               messages={currentAppLocale.messages}
            >
               <Fragment>
                  <div className="app-container">
                     <Switch>
                        <Route exact path="/" component={AsyncHomePageComponent} />
                        <Route exact path="/tweets/:keyword" component={AsyncTweetPageComponent} />
                        <Route path="*" component={AsyncPageNotFoundComponent} />
                     </Switch>
                  </div>
                  <SweetAlert
                     success={alertType === 'success'}
                     error={alertType === 'error'}
                     title=''
                     confirmBtnText="Ok"
                     confirmBtnBsStyle="warning"
                     className="iron-alert-box"
                     show={showAlert}
                     onConfirm={hideAlert}
                     onCancel={hideAlert}
                     closeOnClickOutside
                  >
                     {alertMessage}
                  </SweetAlert>
               </Fragment>
            </IntlProvider>
         </MuiThemeProvider>
      )
   }
}

// map state to props
const mapStateToProps = state => {
   const { showAlert, alertMessage, alertType, selectedLocale } = state.reducer;
   return { showAlert, alertMessage, alertType, selectedLocale };
}

export default connect(mapStateToProps, { hideAlert })(App);