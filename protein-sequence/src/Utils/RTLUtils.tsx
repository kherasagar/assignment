import React from 'react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router';
import configureStore from '../configureStore';
import {
  render as rtlRender, RenderResult, screen , fireEvent
} from '@testing-library/react';
import { StoreState } from '../reducers/index';


function render (
  ui: any, // eslint-disable-line
  {
    initialState = {},
    initialEntries = '',
    store = configureStore(initialState as StoreState),
    ...renderOptions
  } = {}
): RenderResult {
  const Wrapper: React.FC = ({ children }) => {
    return (
      <Provider store={store}>
          <MemoryRouter initialEntries={[initialEntries]}>{children}</MemoryRouter>
      </Provider>
    );
  };

  return rtlRender(ui, {
    wrapper: Wrapper,
    ...renderOptions
  });
}

export * from '@testing-library/react';
export {
  render
};