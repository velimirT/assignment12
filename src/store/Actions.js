import C from './Constants';
import fetch from 'isomorphic-fetch';

export const choosePlace = (id) => 
	({
		type: C.CHOOSE_PLACE,
		id
	})

export const submitSurvey = (answers) => {
  return function(dispatch, getState) {
    return fetch('//obscure-journey-25228.herokuapp.com/api/friends', {
		   method: 'post',
		   headers:{
		   	'Accept':'application/json',
		   	'Content-Type':'application/json'
		   },
		   body: JSON.stringify(answers)
	  })
    .then(response => response.json())
      .then(friend => {
	      	dispatch(surveySubmitted(friend))
      	}
      )
    }
  }

export const surveySubmitted = (friend) => 
	({
		type: C.SURVEY_SUBMITTED,
		compatible_friend: friend,
		compatible_shown: true,
	})

export const selectAnswer = (id, answer) => 
	({
		type: C.SELECT_ANSWER,
		id,
		answer
	})


export const resetFlower = (id) => 
	({
		type: C.RESET_FLOWER,
	})