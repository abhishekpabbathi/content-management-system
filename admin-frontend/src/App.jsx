import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";


import LoginPage from "./pages/auth/LoginPage";

import Layout from "./Layout";

import Dashboard from "./pages/dashboard/Dashboard";
import ContentPage from "./pages/content/ContentPage";
import UsersPage from "./pages/users/UsersPage";
import AnalyticsPage from "./pages/analytics/AnalyticsPage";
import SettingsPage from "./pages/settings/SettingsPage";
import AdminProfile from "./pages/profile/AdminProfile";



// ======================
// Protected Admin Route
// ======================

function ProtectedRoute({ children }) {


  const token = localStorage.getItem("adminToken");


  return token

    ? children

    : (
      <Navigate
        to="/login"
        replace
      />
    );

}



// ======================
// Application Routes
// ======================

export default function App() {


  return (

    <BrowserRouter>


      <Routes>


        {/* Public Authentication Route */}

        <Route

          path="/login"

          element={
            <LoginPage />
          }

        />



        {/* Protected Admin Panel Routes */}

        <Route


          element={

            <ProtectedRoute>

              <Layout />

            </ProtectedRoute>

          }


        >


          <Route

            path="/dashboard"

            element={
              <Dashboard />
            }

          />



          <Route

            path="/content"

            element={
              <ContentPage />
            }

          />



          <Route

            path="/users"

            element={
              <UsersPage />
            }

          />



          <Route

            path="/analytics"

            element={
              <AnalyticsPage />
            }

          />



          <Route

            path="/settings"

            element={
              <SettingsPage />
            }

          />


          <Route

            path="/profile"

            element={
              <AdminProfile />
            }

          />


        </Route>




        {/* Unknown URL Redirect */}

        <Route

          path="*"

          element={

            <Navigate

              to="/dashboard"

              replace

            />

          }

        />


      </Routes>


    </BrowserRouter>

  );

}
