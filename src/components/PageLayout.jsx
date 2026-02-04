import { Outlet } from 'react-router-dom';

const PageLayout = () => {
  // Pages already include their own spacing and containers.
  return <Outlet />;
};

export default PageLayout;
