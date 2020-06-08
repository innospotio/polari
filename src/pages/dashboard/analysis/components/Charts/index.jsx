import numeral from 'numeral';
import Bar from './Bar/index';
import ChartCard from './ChartCard/index';
import Field from './Field/index';
import Gauge from './Gauge/index';
import MiniArea from './MiniArea/index';
import MiniBar from './MiniBar/index';
import MiniProgress from './MiniProgress/index';
import Pie from './Pie/index';
import TagCloud from './TagCloud/index';
import TimelineChart from './TimelineChart/index';
import WaterWave from './WaterWave/index';

const yuan = val => `¥ ${numeral(val).format('0,0')}`;

const Charts = {
  yuan,
  Bar,
  Pie,
  Gauge,
  MiniBar,
  MiniArea,
  MiniProgress,
  ChartCard,
  Field,
  WaterWave,
  TagCloud,
  TimelineChart,
};
export {
  Charts as default,
  yuan,
  Bar,
  Pie,
  Gauge,
  MiniBar,
  MiniArea,
  MiniProgress,
  ChartCard,
  Field,
  WaterWave,
  TagCloud,
  TimelineChart,
};
