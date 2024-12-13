import React from "react";
import { ReactQuestionFactory } from "survey-react";
import PropTypes from "prop-types";
import ChoiceField from "./help/ChoiceField";
import "./scss/_Radio.scss";

export default function Radio(props) {
  const handleChange = (e) => {
    props.question.setValueCore(
      e.target.value ? e.target.value : props.question.defaultValue
    );
  };
  return (
    <div>
      <div className="radio-question">
        <div className="radio">
          <ChoiceField
            expanded
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
ReactQuestionFactory.Instance.registerQuestion("radiogroup", (props) => {
  return React.createElement(Radio, props);
});

Radio.propTypes = {
  name: PropTypes.string,
  helptitle: PropTypes.string,
  helptext: PropTypes.string,
  label: PropTypes.string,
  required: PropTypes.bool,
  icon: PropTypes.object,
  choices: PropTypes.array
};
