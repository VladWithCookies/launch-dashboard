import { path } from 'ramda';
import { ReactNode, ReactElement } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render, renderHook, RenderOptions, RenderHookOptions } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      select: path(['data']),
    },
  },
});

const wrapper = ({ children }: { children: ReactNode }) => (
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      {children}
    </BrowserRouter>
  </QueryClientProvider>
);

const customRender = (ui: ReactElement, options?: RenderOptions) => (
  render(ui, { wrapper, ...options })
);

const customRenderHook = (ui: (props: unknown) => unknown, options?: RenderHookOptions<unknown>) => (
  renderHook(ui, { wrapper, ...options })
);

export * from '@testing-library/react';
export { default as userEvent } from '@testing-library/user-event';
export { customRender as render };
export { customRenderHook as renderHook };
