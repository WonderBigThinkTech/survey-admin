import React from "react";
import PropTypes from "prop-types";
import { ReactQuestionFactory } from "survey-react";
import TextareaField from "./help/TextareaField";
import "./scss/_Textarea.scss";

export default function Textarea(props) {
  return (
    <div>
      <TextareaField
        minRows={2}
        maxRows={8}
        width="100%"
        type={props.question.getType()}
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
ReactQuestionFactory.Instance.registerQuestion("comment", (props) => {
  return React.createElement(Textarea, props);
});

TextareaField.propTypes = {
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  variant: PropTypes.string,
  required: PropTypes.bool,
  defaultValue: PropTypes.string,
  description: PropTypes.string,
  icon: PropTypes.object,
  helptitle: PropTypes.string,
  helptext: PropTypes.string
};
