import React from 'react';
import ReactDOM from 'react-dom';
import AppSheetSite from './components/AppSheetSite';

const sampleUrl = 'https://appsheettest1.azurewebsites.net/sample/posts';

ReactDOM.render(
  <AppSheetSite sampleUrl={sampleUrl} />,
  document.getElementById('app')
);
