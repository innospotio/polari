import { Chart, Geom, Tooltip } from 'bizcharts';
import React from 'react';
import autoHeight from '../autoHeight';
import styles from '../index.less';

import theme from '@/themes/blue'

const primaryColor = theme['primary-color']

const MiniBar = props => {
  const { height = 0, forceFit = true, color = primaryColor, data = [] } = props;
  const scale = {
    x: {
      type: 'cat',
    },
    y: {
      min: 0,
    },
  };
  const padding = [36, 5, 30, 5];
  const tooltip = [
    'x*y',
    (x, y) => ({
      name: x,
      value: y,
    }),
  ]; // for tooltip not to be hide

  const chartHeight = height + 54;
  return (
    <div
      className={styles.miniChart}
      style={{
        height,
      }}
    >
      <div className={styles.chartContent}>
        <Chart scale={scale} height={chartHeight} forceFit={forceFit} data={data} padding={padding}>
          <Tooltip showTitle={false} crosshairs={false} />
          <Geom
            type="interval"
            position="x*y"
            tooltip={tooltip}
            shape="round-rect"
            style={{
              fill: color,
              radius: 2
            }}
          />
        </Chart>
      </div>
    </div>
  );
};

export default autoHeight()(MiniBar);
