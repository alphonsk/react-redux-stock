import React from 'react'
import { useSelector } from 'react-redux';
import 'font-awesome/css/font-awesome.min.css';
import numeral from 'numeral';

var FontAwesome = require('react-fontawesome')




const ResultComponent = () => {
  const { ticker, loading, stock, error } = useSelector(state => state.stock)

  const twoDecimal = (num) => num.toFixed(2)
  const numberHumanizer = (number) => {
    let num = numeral(number).format('0a')
    let last = (num.slice(num.length - 1, num.length)).toUpperCase();
    let first = num.slice(0, num.length - 1);
    return first+last;
  }

  if (loading) {
    return <div className="message"> Loading ... </div>
  }


  if (error || !stock.symbol) {
    return (
      <div className="message"> {error ? <p> Invalid ticket symbol </p> : <p>Search stock by ticker symbol</p>}</div>
    )
  }

  const { symbol,
    companyName,
    calculationPrice,
    latestPrice,
    change,
    changePercent,
    marketCap,
    peRatio,
    avgTotalVolume,
    previousVolume,
    previousClose,
    week52High,
    week52Low
  } = stock; 

  return (
    <div className="results-wrapper"> 
      <div className="results-card">
        <div className="results-card-header">
          <div className="results-card-ticker-price">
            <div className="left-align">
              {symbol}
            </div>
            <div className="right-align">
              {twoDecimal(latestPrice)}
            </div>
          </div>

          <div className="companyname-changepercent">
            <div className="left-align">
              {companyName}
            </div>
            <div className="right-align" style={(change >= 0) ? { color: 'green', fontWeight: '400' } : { color: 'red', fontWeight: '400' }} >
              {(change >= 0) ? '+' : ''}{change} ({twoDecimal(changePercent)}%) <FontAwesome className={(change >= 0) ? "fa-arrow-up" : "fa-arrow-down"} />

            </div>
          </div>
        </div>

        <div className="results-card-body">
          <div className="results-card-body-left">
            <ul>
              <li>
                <div className="left-align">
                  Mkt Cap
                 </div>
                <div className="right-align">
                  {numberHumanizer(marketCap)}
                </div>
              </li>
              <li>

                <div className="left-align">
                  P/E ratio
                 </div>
                <div className="right-align">
                  {twoDecimal(peRatio)}
                </div>
              </li>
              <li>
                <div className="left-align">
                  Avg. volume
                 </div>
                <div className="right-align">
                  {numberHumanizer(avgTotalVolume)}
                </div>
              </li>
            </ul>

          </div>
          <div className="results-card-body-right">
            <ul>
              <li>
                <div className="left-align">
                  Prev Close
                 </div>
                <div className="right-align">
                  {numberHumanizer(previousVolume)}
                </div>
              </li>
              <li>

                <div className="left-align">
                  52-wk high
                 </div>
                <div className="right-align">
                  {twoDecimal(week52High)}
                </div>
              </li>
              <li>
                <div className="left-align">
                  52-wk low
                 </div>
                <div className="right-align">
                  {twoDecimal(week52Low)}
                </div>
              </li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  )
}

export default ResultComponent
