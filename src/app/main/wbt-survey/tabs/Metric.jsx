import React from "react";
import * as Survey from "survey-react";
//import PropTypes from "prop-types";
import "./scss/_Metric.scss";

export class MetricModel extends Survey.Question {
  //select type in json form to work
  getType() {
    return "metric";
  }
}

export class Metric extends Survey.SurveyElementBase {
  constructor(props) {
    super(props);
    this.state = {
      data: ""
    };
  }
  //get datas in json of SurveyJs
  get question() {
    return this.props.question;
  }

  render() {
    if (!this.question) return null;
    return (
      <div className="metric-widget">
        <div className="metric">
          <h1>Je suis le composant Métrique</h1>
        </div>
        {/*
        <pre>{JSON.stringify(this.question, null, 2)}</pre>
        */}
      </div>
    );
  }
}

/* Add attributs. Warning : attributes with arrays must be filled */
Survey.Serializer.addClass(
  "metric",
  [
    {
      name: "newAtt"
    }
  ],
  function () {
    return new MetricModel("");
  },
  "question"
);

Survey.ReactQuestionFactory.Instance.registerQuestion("metric", (props) => {
  return React.createElement(Metric, props);
});

//Metric.propTypes = {};
