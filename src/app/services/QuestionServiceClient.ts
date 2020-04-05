import {Injectable} from '@angular/core';

Injectable()
export class QuestionServiceClient {
  findQuestionsForQuiz = (qid) =>
    fetch(`http://cs4550-server-node.herokuapp.com/api/quizzes/${qid}/questions`)
      .then(response => response.json())

}
