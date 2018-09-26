import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import FriendsList from './FriendsList';
import Survey from './Survey';
import SideNav from './SideNav';
import { selectAnswer, submitSurvey, chooseFlower, resetPlace, resetFlower } from '../store/Actions';

export const FriendsListWrap = connect(
	store => 
		({
			friend: store.compatible_friend,
		}),
	null
)(FriendsList);


export const SideNavWrap = connect(
	store => 
		({
			friends: store.friends,
		}),
	null
)(SideNav);

export const SurveyWrap = connect(
	store => 
		({
			questions: store.questions,
			answers: store.answers,
			compatible_friend:store.compatible_friend,
			compatible_shown:store.compatible_shown,
		}),
	dispatch =>
		({
			selectAnswer(event, index){
				dispatch(selectAnswer(index, event.target.value));
			},
			submitSurvey(questions){
				dispatch(submitSurvey(questions));
			}
		})
)(Survey);
