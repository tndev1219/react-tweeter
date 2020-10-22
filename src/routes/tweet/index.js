/* eslint-disable */
import React, { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Container from '@material-ui/core/Container';
import * as actions from '../../redux/reducer/action';
import ContentLoader from '../../components/global/loaders/ContentLoader';
import TweetBox from '../../components/widgets/TweetBox';
import ProfileModal from '../../components/widgets/ProfileModal';

export default function TweetPage(props) {
   const dispatch = useDispatch();
   const wait = useSelector((state) => state.reducer.waiting);
   const tweets = useSelector((state) => state.reducer.tweets);

   useEffect(() => {
      dispatch(actions.waiting(true));
      dispatch(actions.getTweets(props.match.params.keyword));
   }, []);

   return (
      <Fragment>
         {wait ?
            <ContentLoader />
            :
            <Container maxWidth="sm" className="mb-20">
               {
                  tweets.map((tweet, key) => {
                     var data = tweet.retweeted_status ? tweet.retweeted_status : tweet;

                     return (
                        <TweetBox
                           key={key}
                           data={data}
                        />
                     )
                  })
               }
               <ProfileModal />
            </Container>
         }
      </Fragment>
   )
}