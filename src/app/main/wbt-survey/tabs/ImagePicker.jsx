import React from "react";
import { ReactQuestionFactory } from "survey-react";
import PropTypes from "prop-types";
import ImageList from "./help/ImagepickerField";
import "./scss/_ImagePicker.scss";

export default function ImagePicker(props) {
  return (
    <div>
      <ImageList
        type={props.question.inputType}
        id={props.question.name}
        name={props.question.name}
        title={props.question.title}
        defaultValue={props.question.defaultValue}
        variant={props.question.variant}
        required={props.question.isRequired}
        description={props.question.description}
        choices={props.question.choices.map((image) => image)}
        onChange={(value) => {
          props.question.value = value;
        }}
        state={props.question.state.attrs}
        iconRight={props.question.iconRight}
        helptext={props.question.state.helptext}
      />
    </div>
  );
}
/* only overload original type ("text", "dropdown" ...) and uncomment scss */
ReactQuestionFactory.Instance.registerQuestion("imagepicker", (props) => {
  return React.createElement(ImagePicker, props);
});

ImagePicker.propTypes = {
  type: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  title: PropTypes.string,
  defaultValue: PropTypes.string,
  variant: PropTypes.string,
  description: PropTypes.string,
  helptitle: PropTypes.string,
  label: PropTypes.string,
  required: PropTypes.bool,
  state: PropTypes.object,
  choices: PropTypes.array,
  iconRight: PropTypes.string,
  helptext: PropTypes.string
};
