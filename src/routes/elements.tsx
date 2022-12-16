import { Suspense, lazy, ElementType } from 'react';

const Loadable = (Component: ElementType) => (props: any) =>
  (
    <Suspense fallback={<p>loading...</p>}>
      <Component {...props} />
    </Suspense>
  );

export const DashboardPage = Loadable(lazy(() => import('../pages/DashboardPage')));
