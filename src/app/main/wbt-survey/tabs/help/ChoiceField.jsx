import React, { useState, useCallback } from "react";
import {
  Checkbox,
  FormGroup,
  RadioGroup,
  Radio,
  Switch,
  Select,
  MenuItem,
  FormControl,
  FormControlLabel,
  Popper,
  Paper,
  Fade,
  Typography
} from "@mui/material";
import Label from "./LabelField";

export default (props) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState();
  const handleClick = (newPlacement) => (event) => {
    setAnchorEl(event.currentTarget);
    setOpen((prev) => placement !== newPlacement || !prev);
    setPlacement(newPlacement);
  };

  const {
    onChange = {},
    id = "",
    name = "",
    helptitle = "",
    helptext = "",
    icon = "",
    label = "",
    multiple = props.multiple,
    choices = props.choices,
    expanded = props.expanded,
    useSwitches = props.useSwitches,
    doUseSwitches = multiple && expanded && useSwitches,
    choiceLabelRenderer = useCallback((choice) => choice, []),
    ...other
  } = props;

  const {
    LabelProps,
    SelectProps = {
      onChange: onChange,
      id: name,
      name: name,
      helptitle: helptitle,
      helptext: helptext,
      icon: icon,
      label: label
    },
    InputLabelProps,
    FormHelperTextProps,
    ...otherProps
  } = other;

  const ControlProps = {
    hiddenLabel: true,
    ...(otherProps ?? {})
  };

  const selectProps = {
    ...{
      onChange,
      id,
      name,
      helptitle,
      helptext,
      icon,
      label,
      multiple,
      defaultValue: multiple ? [] : ""
    },
    ...SelectProps
  };

  const choiceItems = choices.map((choice) => {
    return expanded ? (
      <FormControlLabel
        key={choice}
        value={choice}
        label={choiceLabelRenderer(choice)}
        control={
          doUseSwitches ? <Switch /> : multiple ? <Checkbox /> : <Radio />
        }
      />
    ) : (
      <MenuItem {...{ key: choice, value: choice }}>
        {choiceLabelRenderer(choice)}
      </MenuItem>
    );
  });

  return (
    <>
      <div className="icons">
        {selectProps.icon.left ? (
          <i className={icon.left} aria-hidden="true"></i>
        ) : null}
      </div>
      <FormControl {...ControlProps}>
        {label && (
          <Label
            {...{
              label,
              asInputLabel: !expanded && (selectProps.label ?? false)
            }}
          />
        )}
        {expanded ? (
          multiple ? (
            <FormGroup row={true}>{choiceItems}</FormGroup>
          ) : (
            <RadioGroup row={true} {...selectProps}>
              {choiceItems}
            </RadioGroup>
          )
        ) : (
          <Select {...selectProps}>{choiceItems}</Select>
        )}
      </FormControl>
      <div className="icons">
        {selectProps.icon.right ? (
          <i className={icon.right} aria-hidden="true"></i>
        ) : null}
      </div>
      <i
        onClick={handleClick("top-start")}
        className={icon.help}
        aria-hidden="true"
      ></i>
      <Popper open={open} anchorEl={anchorEl} placement={placement} transition>
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={1000}>
            <Paper>
              <Typography className="popper" sx={{ p: 2 }}>
                <span className="h5">
                  <dfn>{helptitle}</dfn>
                </span>
                <span className="text">{helptext}</span>
              </Typography>
            </Paper>
          </Fade>
        )}
      </Popper>
    </>
  );
};
