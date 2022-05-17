import React from 'react';
import './WidgetLg.css';

export default function WidgetLg() {
  const type = 'Aproved';
  const type1 = 'Decline';
  const type2 = 'Pending';
  return (
    <div className="widgetLg">
      <h2 className="widgetLgTitle">Latest Transactions</h2>

      <table className="widgetLgTable">
        <thead className="widgetLgThead">
          <tr>
            <th className="widgetLgTh">Customer</th>
            <th className="widgetLgTh">Date</th>
            <th className="widgetLgTh">Amount</th>
            <th className="widgetLgTh">Status</th>
          </tr>
        </thead>
        <tbody className="widgetLgTbody">
          <tr>
            <td className="widgetLgUser">
              <img
                src="https://images.unsplash.com/photo-1649228537048-227a135e86d2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDd8UzRNS0xBc0JCNzR8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60"
                alt="customer-avatar"
                className="widgetLgImg"
              />
              <span>Camila Susan</span>
            </td>
            <td className="widgetLgDate">2 Jun 2021</td>
            <td className="widgetLgAmount">$122.00</td>
            <td className="widgetLgTd">
              <button className={`widgetLgButton ${type}`}>{type}</button>
            </td>
          </tr>
          <tr>
            <td className="widgetLgUser">
              <img
                src="https://images.unsplash.com/photo-1649228537048-227a135e86d2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDd8UzRNS0xBc0JCNzR8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60"
                alt="customer-avatar"
                className="widgetLgImg"
              />
              <span>Camila Susan</span>
            </td>
            <td className="widgetLgDate">2 Jun 2021</td>
            <td className="widgetLgAmount">$122.00</td>
            <td className="widgetLgTd">
              <button className={`widgetLgButton ${type1}`}>{type1}</button>
            </td>
          </tr>
          <tr>
            <td className="widgetLgUser">
              <img
                src="https://images.unsplash.com/photo-1649228537048-227a135e86d2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDd8UzRNS0xBc0JCNzR8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60"
                alt="customer-avatar"
                className="widgetLgImg"
              />
              <span>Camila Susan</span>
            </td>
            <td className="widgetLgDate">2 Jun 2021</td>
            <td className="widgetLgAmount">$122.00</td>
            <td className="widgetLgTd">
              <button className={`widgetLgButton ${type}`}>Approved</button>
            </td>
          </tr>
          <tr>
            <td className="widgetLgUser">
              <img
                src="https://images.unsplash.com/photo-1649228537048-227a135e86d2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDd8UzRNS0xBc0JCNzR8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60"
                alt="customer-avatar"
                className="widgetLgImg"
              />
              <span>Camila Susan</span>
            </td>
            <td className="widgetLgDate">2 Jun 2021</td>
            <td className="widgetLgAmount">$122.00</td>
            <td className="widgetLgTd">
              <button className={`widgetLgButton ${type2}`}>{type2}</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
