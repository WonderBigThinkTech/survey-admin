import React, { useState } from "react";
import {ImageList, ImageListItem, ImageListItemBar, Typography, Fade, Paper, Popper} from "@mui/material";

export default function ({
  helptitle,
  helptext,
  description,
  icon,
  onChange,
  ...props
}) {
  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState();
  const handleClick = (newPlacement) => (event) => {
    setAnchorEl(event.currentTarget);
    setOpen((prev) => placement !== newPlacement || !prev);
    setPlacement(newPlacement);
  };
  const [value, setValue] = useState();
  const handleChange = (e) => {
    setValue(e.target.getAttribute("value"));
    onChange(value);
  };

  return (
    <div className="imagepicker-question">
      <p>{description}</p>
      <div className="imagepicker">
        <ImageList>
          {props.choices.map((item, index) => (
            <ImageListItem key={item.imageLink}>
              <img
                src={item.imageLink}
                srcSet={item.imageLink}
                onClick={handleChange}
                value={item.value}
                alt={props.state[index].title}
                loading={props.state[index].loading}
              />
              <ImageListItemBar
                className={
                  props.state[index].position !== "below"
                    ? "labelin"
                    : "labelbelow"
                }
                title={props.state[index].title}
                subtitle={<span>by: {props.state[index].author}</span>}
                position={props.state[index].position}
                actionIcon={
                  <div className="icons">
                    {props.state[index].iconLeft ? (
                      <i
                        className={props.state[index].iconLeft}
                        aria-hidden="true"
                      ></i>
                    ) : null}
                    {props.state[index].iconRight ? (
                      <i
                        className={props.state[index].iconRight}
                        aria-hidden="true"
                      ></i>
                    ) : null}
                    <i
                      onClick={handleClick("top-start")}
                      className={props.state[index].iconHelp}
                      aria-hidden="true"
                    ></i>
                    <Popper
                      open={open}
                      anchorEl={anchorEl}
                      placement={placement}
                      transition
                    >
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
                  </div>
                }
              />
            </ImageListItem>
          ))}
        </ImageList>
        <h3>{value}</h3>
      </div>
    </div>
  );
}
