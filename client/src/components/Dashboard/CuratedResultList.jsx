import React from "react";
import ResultInfo from "./ResultInfo";

const CuratedResultList = (props) => {
  return (
    <div className={props.classes}>
      <div className="profile-name">Quiz Results</div>
      <div className="profile-email">
        view results
      </div>

      <table className="table mt-4">
        <thead className="count-title">
          <tr>
            <th scope="col">Quiz Code</th>
            <th scope="col">Quiz Title </th>
            <th scope="col">Student name</th>
            <th scope="col">Score</th>
          </tr>
        </thead>
        <tbody>
        {/* {props.quizzes.map((quiz) => (
            <ResultInfo
              //key={quiz._id}
              title={quiz.title}
              id={quiz._id}
              name={quiz.partInfo.partId}
              score={quiz.partInfo.score}
            //   date={quiz.date}
            //   quiz= {quiz.flawless}
            />
          ))} */}
          {/* {props.quizzes.map((quiz) => (
            <ResultInfo
            //   key={quiz._id}
            //   title={quiz.title}
            //   id={quiz._id}
            //   participated={quiz.participated}
            //   flawless={quiz.flawless}
            //   date={quiz.date}
            //   quiz= {quiz.flawless}
                id={quiz._id}
                title={quiz.title}              
                name={quiz.partInfo.partId}
                score={quiz.partInfo.score}
            />
          ))} */}
          {/* <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
          </tr> */}
            {/* <tr>
            <th scope="row">{quiz._id}</th>
            <td>{partInfo.score}</td>
            <td>{partInfo.score}</td>
            <td>@fat</td>
          </tr> */}
        </tbody>
      </table>
      {/* <div className="row mt-4">
        <div className="col-sm-5">
          <div className="count-title">Title</div>
        </div>
        <div className="col-sm-2">
          <div className="count-title">Total Participated</div>
        </div>
        <div className="col-sm-2">
          <div className="count-title">Total Flawless</div>
        </div>
        <div className="col-sm-3">
          <div className="count-title">Quiz Code</div>
        </div>
      </div>
      <hr />
      <div className="row mt-4">
        <div className="col-sm-12">
          {props.quizzes.map((quiz) => (
            <QuizInfo
              key={quiz._id}
              title={quiz.title}
              id={quiz._id}
              participated={quiz.participated}
              flawless={quiz.flawless}
              date={quiz.date}
            />
          ))}
        </div>
      </div> */}
    </div>
  );
};

export default CuratedResultList;
