import React from 'react';
import ReactDOM from 'react-dom';

import DepthChart from './components/depth-chart.jsx'
import CandleStick from './components/candle-stick.jsx'

export default class MarketActive extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    const orderBook =[
      [1417564800000, .75, .35, .11,.10, 2340],
      [1417651200000, .77, .20, .29, .49, 2340],
      [1417737600000, .99, .08, .64, .00, 2340],
      [1417996800000, .10, .65, .62, .40, 2340],
      [1418083200000, .19, .30, .35, .12, 2340],
      [1418169600000, .41, .85, .54, .95, 2340],
      [1418256000000, .26, .80, .34, .62, 2340],
      [1418342400000, .46, .87, .58, .73, 2340],
      [1418601600000, .70, .60, .35, .22, 2340],
      [1418688000000, .37, .16, .26, .74, 2340],
      [1418774400000, .12, .84, .82, .41, 2310],
      [1418860800000, .87, .65, .66, .65, 2320],
      [1418947200000, .26, .24, .66, .78, 2220],
      [1419206400000, .16, .49, .97, .94, 2340],
      [1419292800000, .23, .33, .46, .54, 23150],
      [1419379200000, .58, .71, .01, .01, 23610],
      [1419552000000, .10, .52, .01, .99, 1340],
      [1419811200000, .79, .77, .70, .91, 23430],
      [1419897600000, .64, .92, .11, .52, 26340],
      [1419984000000, .82, .13, .21, .38, 26340],
      [1420156800000, .39, .44, .35, .33, 1200],
      [1420416000000, .29, .65, .41, .25, 11200],
      [1420502400000, .54, .43, .63, .26, 100],
      [1420588800000, .20, .20, .70, .75, 200],
      [1420675200000, .23, .15, .70, .89, 3200],
      [1420761600000, .67, .25, .21, .01, 1200],
      [1421020800000, .60, .63, .80, .25, 12200],
      [1421107200000, .43, .80, .91, .22, 1200],
      [1421193600000, .04, .49, .50, .80, 12800],
      [1421280000000, .00, .06, .66, .82, 1200],
      [1421366400000, .03, .58, .20, .99, 23200],
      [1421712000000, .84, .97, .50, .72, 1200],
      [1421798400000, .95, .06, .27, .55, 1200],
      [1421884800000, .26, .47, .72, .40, 1200],
      [1421971200000, .30, .75, .53, .98, 1200],
      [1422230400000, .74, .36, .80, .10, 1200],
      [1422316800000, .42, .48, .03, .14, 12050],
      [1422403200000, .62, .12, .31, .31, 1200],
      [1422489600000, .32, .19, .56, .90, 1200],
      [1422576000000, .40, .00, .85, .16, 3200],
      [1429488000000, .57, .12, .17, .60, 33218],
      [1429574400000, .10, .20, .67, .91, 3218],
      [1429660800000, .99, .87, .32, .62, 3618],
      [1429747200000, .30, .42, .14, .67, 3218],
      [1429833600000, .49, .63, .23, .28, 37218],
      [1430092800000, .31, .13, .15, .65, 32318],
      [1430179200000, .46, .54, .57, .56, 32218],
      [1430265600000, .16, .59, .30, .64, 32818],
      [1430352000000, .64, .88, .58, .15, 3218]
    ];

    return (
      <div>
        <CandleStick orderBook={orderBook} />
        <DepthChart />
      </div>
    );
  }
}
