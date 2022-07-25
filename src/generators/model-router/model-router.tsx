import React from "react";
import { Routes, Route } from "react-router-dom";

const DummyTestComponent = ({ title }: { title: string }) => {
  return <div>DummyTestComponent {title}</div>;
};

export interface ModelRouterProps {
  basePath: string;
}

export const ModelRouter = ({ basePath }: ModelRouterProps) => {
  return (
    <Routes>
      <Route path={`${basePath}/`} element={<DummyTestComponent title="list" />} />
      <Route path={`${basePath}/add`} element={<DummyTestComponent title="add" />} />
      <Route path={`${basePath}/:id`} element={<DummyTestComponent title="detail" />} />
      <Route path={`${basePath}/:id/update`} element={<DummyTestComponent title="update" />} />
    </Routes>
  );
};
