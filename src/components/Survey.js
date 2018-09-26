import React from 'react';
import {FriendsListWrap} from './Containers';

export default function Survey ({
    questions,
    answers,
    selectAnswer,
    submitSurvey,
    compatible_friend,
    compatible_shown,
}){
    return (
        <div>
          <h2>Survey</h2>
          <ul>
            {
              questions ?
                  Object.keys(questions).map( i => {
                    return(
                      <li key = {i}>
                        <p>
                          <label>
                          {questions[i]}
                            <select onChange = {(e) => {selectAnswer(e, i)}} defaultValue = {answers[i] !== 0 ? answers[i] : 1}>
                              <option value = {"1"}>1</option>
                              <option value = {"2"}>2</option>
                              <option value = {"3"}>3</option>
                              <option value = {"4"}>4</option>
                              <option value = {"5"}>5</option>
                              <option value = {"6"}>6</option>
                              <option value = {"7"}>7</option>
                              <option value = {"8"}>8</option>
                              <option value = {"9"}>9</option>
                              <option value = {"10"}>10</option>
                            </select>
                          </label>
                        </p>
                      </li>
                      )
                  })
                  : 
                  'No Friends found'
            
            }
          </ul>
          <button onClick = {submitSurvey.bind(null, answers)}>SUBMIT</button>
          {
            compatible_shown ? 
              <FriendsListWrap/> : null
          }
        </div>
    );
}
