import React from 'react'
import Layout from '../layouts/Layout';
import { Route, Routes } from 'react-router-dom';
import { publicRoutes } from './index'

const RouteComponent = () => {
  return (
    <Routes>
        {publicRoutes.map((route) => {
            const { path, component: Component } = route;

            return (
                <Route
                    key={path}
                    path={path}
                    element={
                        <Layout>
                            <Component />
                        </Layout>
                    }
                />
            );
        })}
    </Routes>
  )
}

export default RouteComponent