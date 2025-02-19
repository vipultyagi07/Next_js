import React from "react";

interface DashBoardLayoutProps {
  children: React.ReactNode;
  users: React.ReactNode;
  notification: React.ReactNode;
  revenue: React.ReactNode;
}

const DashBoardLayout: React.FC<DashBoardLayoutProps> = ({
  children,
  users,
  notification,
  revenue,
}) => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col">
      {/* Top Header */}
      <header className="bg-white dark:bg-gray-800 shadow p-4">
        <h1 className="text-xl font-bold text-gray-800 dark:text-white">
          Dashboard
        </h1>
      </header>

      {/* Main Content */}
      <div className="flex-grow p-4">{children}</div>

      {/* Parallel Routes Section */}
      <div className="p-4 grid grid-cols-1 md:grid-cols-4 gap-4">
        {/* Left column: Users and Revenue */}
        <div className="flex flex-col gap-4 md:col-span-1">
          <div>{users}</div>
          <div>{revenue}</div>
        </div>
        {/* Right column: Notifications */}
        <div className="md:col-span-3">{notification}</div>
      </div>

      {/* Footer */}
      <footer className="bg-white dark:bg-gray-800 shadow p-4 text-center">
        <p className="text-sm text-gray-600 dark:text-gray-400">
          &copy; {new Date().getFullYear()} My Dashboard
        </p>
      </footer>
    </div>
  );
};

export default DashBoardLayout;
