import C from './Constants';

export const MainReducer = (state = {}, action) => {
	switch (action.type){
		case C.SELECT_ANSWER:
			return (
				{
					...state, 
					answers: state.answers.map(
			           (answer, i) => i === parseInt(action.id) ? action.answer
			                                   : answer
			       )
				}
			)
		case C.SURVEY_SUBMITTED:
			return (
				{
					...state, 
					compatible_friend: action.compatible_friend,
					compatible_shown: true
				}
			)
		case C.RESET_FLOWER:
			return (
				{
					...state, 
					chosen_flower: null
				}
			)
		case C.RESET_PLACE:
			return (
				{
					...state,
					chosen_place: null
				}
			)
		default: 
			return state;
	}
}