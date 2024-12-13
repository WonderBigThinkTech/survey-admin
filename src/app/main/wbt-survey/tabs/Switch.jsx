import React from "react";
import { ReactQuestionFactory } from "survey-react";
import PropTypes from "prop-types";

import { FormGroup, FormControlLabel, Switch as SwitchField } from "@mui/material";
import "./scss/_Radio.scss";

export default function Switch(props) {
  const handleChange = (e) => {
    props.question.setValueCore(
      e.target.value ? "true" : props.question.defaultValue
    );
  };
  return (
    <div>
      <div className="switch-question">
        <div className="switch">
          <FormGroup>
            <FormControlLabel
              defaultValue={props.question.defaultValue}
              label={props.question.title}
              control={<SwitchField />}
              onChange={handleChange}
            />
          </FormGroup>
        </div>
      </div>
    </div>
  );
}
/* only overload original type ("text", "dropdown" ...) and uncomment scss */
ReactQuestionFactory.Instance.registerQuestion("boolean", (props) => {
  return React.createElement(Switch, props);
});

Switch.propTypes = {
  label: PropTypes.string,
  defaultValue: PropTypes.string
};
