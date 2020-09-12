import React from "react";
import { withWidth, Typography, Hidden, Button } from "@material-ui/core";

const Oculto = (props) => {
  return (
    <div>
      <Typography>width: {props.width}</Typography>
      <Hidden xsDown>
          <Button variant="contained" color="primary">
              xs
          </Button>
      </Hidden>
      <Hidden smDown>
          <Button variant="contained" color="primary">
              sm
          </Button>
      </Hidden>
      <Hidden only={['xs', 'sm']} >
          <Button variant="contained" color="primary">
              large
          </Button>
      </Hidden>
    </div>
  );
};

export default withWidth()(Oculto);
