import React, { Suspense, lazy } from 'react';
import { BounceLoader } from 'react-spinners';
import { path } from '../constants/path';

const load = (Component) => (props) =>
(
  <Suspense
    fallback={
      <div className="w-[100%] my-[20%] flex justify-center items-center">
        <BounceLoader loading color="#004DB3" />
      </div>
    }
  >
    <Component {...props} />
  </Suspense>
);

const Home = load(lazy(() => import('../pages/Home')));


const publicRoutes = [
  { path: path.HOME, component: Home },
  { path: path.ABOUT, component: Home },
  { path: path.COURSES, component: Home },
  { path: path.TESTIMONIAL, component: Home },
  { path: path.COMMUNITY, component: Home },
];

export { publicRoutes };
