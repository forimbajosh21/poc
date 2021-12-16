/* eslint-disable @typescript-eslint/ban-types */

import React from 'react';
import { SvgIcon, SvgIconTypeMap } from '@material-ui/core';
import { OverridableComponent } from '@material-ui/core/OverridableComponent';

export const DownloadOffline: OverridableComponent<SvgIconTypeMap> = ({
  ...props
}) => (
  <SvgIcon {...props}>
    <g>
      <rect fill="none" height="24" width="24" />
    </g>
    <g>
      <path d="M12,2C6.49,2,2,6.49,2,12s4.49,10,10,10s10-4.49,10-10S17.51,2,12,2z M11,10V6h2v4h3l-4,4l-4-4H11z M17,17H7v-2h10V17z" />
    </g>
  </SvgIcon>
);
