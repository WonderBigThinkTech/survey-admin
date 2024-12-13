import React from "react";
import { ReactQuestionFactory } from "survey-react";
import PropTypes from "prop-types";
import ChoiceField from "./help/ChoiceField";
import "./scss/_Select.scss";

export default function Select(props) {
  const handleChange = (e) => {
    props.question.setValueCore(e.target.value);
  };

  return (
    <div>
      <div className="select-question">
        <div className="select">
          <ChoiceField
            onChange={handleChange}
            name={props.question.name}
            fullWidth={true}
            helptitle={props.question.title}
            helptext={props.question.state.helptext}
            icon={{
              help: props.question.state.iconHelp,
              left: props.question.state.iconLeft,
              right: props.question.state.iconRight
            }}
            label={props.question.title}
            required={props.question.isRequired}
            choices={props.question.choices.map((c) => c.value)}
          />
        </div>
      </div>
    </div>
  );
}
/* only overload original type ("text", "dropdown" ...) and uncomment scss */
ReactQuestionFactory.Instance.registerQuestion("dropdown", (props) => {
  return React.createElement(Select, props);
});

Select.propTypes = {
  name: PropTypes.string,
  helptitle: PropTypes.string,
  helptext: PropTypes.string,
  label: PropTypes.string,
  required: PropTypes.bool,
  icon: PropTypes.object,
  choices: PropTypes.array
};
