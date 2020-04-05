import {Injectable} from '@angular/core';

@Injectable()
export class QuizServiceClient {
  findAllQuizzes = () =>
    fetch(`http://cs4550-server-node.herokuapp.com/api/quizzes`)
      .then(response => response.json())

  findQuizById = (qid) =>
    fetch(`http://cs4550-server-node.herokuapp.com/api/quizzes/${qid}`)
      .then(response => response.json())

}
