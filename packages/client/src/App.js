import React, { useState, useEffect } from 'react';
import Sidebar from '@mdsol/lego/lib/Sidebar';
import Icon from '@mdsol/lego/lib/Icon';
import CollapsePanel from '@mdsol/lego/lib/CollapsePanel';
import '@mdsol/sandman/assets/platform.css';
import '@mdsol/sandman/assets/jquery.js';
import '@mdsol/sandman/assets/platform-jquery.js';
import '@mdsol/sandman/assets/platform.css';
import TableHeaderCell from '@mdsol/lego/lib/TableHeaderCell';
import logo from './logo.svg';
import './App.css';
import SidebarLayout from '@mdsol/lego/lib/SidebarLayout';

function MySidebar() {
  const [collapse, onCollapse] = useState(true);
  return (
    <Sidebar collapsed={collapse}>
        <Sidebar.Item
          icon={<Icon name='form' className="icon-large" />}
          onClick={() => {}}
          active={true}
        >
          <>Documents</>
        </Sidebar.Item>
      <div className="btn-collapse close-btn">
        <button
          type="button"
          onClick={() => onCollapse(!collapse)}
          className="btn btn-default btn-block pull-right collapse-btn"
        >
          {!collapse ? (
            <>
              <Icon name="chevron-left" ariaLabel="Close" className="icon-large" />
              &nbsp;
              Collapse
            </>
          ) : (
            <Icon name="chevron-right" ariaLabel="Close" className="icon-large" />
          )}
        </button>
      </div>
    </Sidebar>
  )
}

function App() {
  const [tableData, setData] = useState([]);
  const [expanded, setExpanded] = useState(false);
  useEffect(() => {
    fetch('http://localhost:8080/api/mytest')
        .then(response => response.json())
        .then(data => setData(data));
  }, []);
  return (
    <div className="App">
      <SidebarLayout mainContentClassName=" " sidebar={<MySidebar />}>
        <div className="container">
          <div className="row">
            <table className="table">
              <thead>
                <tr>
                 <TableHeaderCell
                    isCurrent
                    sortDir='desc'>
                    <Icon name="requery" className="icon-large" />
                  </TableHeaderCell>
                  <TableHeaderCell
                     isCurrent
                     sortDir='desc'>
                     <Icon name="countries" className="icon-large" />
                  </TableHeaderCell>
                  <TableHeaderCell
                      isCurrent
                      sortDir='desc'>
                      Site
                  </TableHeaderCell>
                  <TableHeaderCell
                     isCurrent
                     sortDir='desc'>Name</TableHeaderCell>
                  <TableHeaderCell
                    isCurrent
                    sortDir='desc'>
                  ID</TableHeaderCell>
                </tr>
              </thead>
              <tbody>
              {
                tableData && tableData.map((eachData) =>
                <tr>
                  <td className="text-align-left"><Icon name={eachData.type} className="icon-large" /></td>
                  <td className="text-align-left">{eachData.country}</td>
                  <td className="text-align-left">{eachData.site}</td>
                  <td className="text-align-left">{eachData.name}</td>
                  <td className="text-align-left">{eachData.id}</td>
                </tr>
                )
              }
              </tbody>
            </table>
          </div>
        </div>
      </SidebarLayout>
    </div>
  );
}

export default App;
