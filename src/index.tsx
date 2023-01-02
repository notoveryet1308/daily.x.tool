import * as React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';
import 'antd/dist/antd.css';

import App from './App';
import AppDataProvider from './Context/AppDataContext';
import TodoCollectionProvider from './Context/TodoCollectionContext';
import NoteContextProvider from './Context/NoteDataProvider';
import client from './GraphqlClient';

const rootElement = document.getElementById('root') as HTMLDivElement;
const root = createRoot(rootElement);

root.render(
  <StrictMode>
      <ApolloProvider client={client}>
      <Router>
        <AppDataProvider>
          <TodoCollectionProvider>
            <NoteContextProvider>
              <App />
            </NoteContextProvider>
          </TodoCollectionProvider>
        </AppDataProvider>
        </Router>
      </ApolloProvider> 
  </StrictMode>
);
