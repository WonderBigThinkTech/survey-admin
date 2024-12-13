import React from "react";
import PropTypes from "prop-types";
import { ReactQuestionFactory } from "survey-react";
import TextField from "./help/TextField";
import "./scss/_Text.scss";

export default function Text(props) {
  return (
    <div>
      <TextField
        fullWidth={true}
        multiline={props.question.inputType === "comment" ? true : false}
        type={props.question.inputType}
        id={props.question.name}
        name={props.question.name}
        label={props.question.title}
        variant={props.question.variant}
        required={props.question.isRequired}
        defaultValue={props.question.defaultValue}
        description={props.question.description}
        icon={{
          help: props.question.state.iconHelp,
          left: props.question.state.iconLeft,
          right: props.question.state.iconRight
        }}
        onChange={(value) => {
          props.question.value = value;
        }}
        helptitle={props.question.title}
        helptext={props.question.state.helptext}
      />
    </div>
  );
}
/* only overload original type ("text", "dropdown" ...) and uncomment scss */
ReactQuestionFactory.Instance.registerQuestion("text", (props) => {
  return React.createElement(Text, props);
});

TextField.propTypes = {
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  multiline: PropTypes.bool,
  variant: PropTypes.string,
  required: PropTypes.bool,
  defaultValue: PropTypes.string,
  description: PropTypes.string,
  icon: PropTypes.object,
  helptitle: PropTypes.string,
  helptext: PropTypes.string
};
