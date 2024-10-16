import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store'; // Import your configured store
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Dashboard from './pages/Dashboard/Dashboard';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Customers from './pages/Customers/Customers';
import Admins from './pages/Admins/Admins';
import Operators from './pages/Operators/Operators';
import CategoryUpdateForm from './components/CategoryUpdateForm/CategoryUpdateForm';
import Shop from './pages/Shop/Shop';
import Setting from './pages/Setting/Setting';
import CategoryTable from './components/CategoryTable/CategoryTable';
import ProductTable from './components/ProductTable/ProductTable';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />

          <Route
            path="/admin-dashboard"
            element={
              <PrivateRoute allowedRoles={['Admin']}>
                <Admins />
              </PrivateRoute>
            }
          />
          <Route
            path="/operator-dashboard"
            element={
              <PrivateRoute allowedRoles={['Operator']}>
                <Operators />
              </PrivateRoute>
            }
          />
          <Route
            path="/customer-dashboard"
            element={
              <PrivateRoute allowedRoles={['Customer']}>
                <Customers />
              </PrivateRoute>
            }
          />
          <Route
            path="/category-update/:id"
            element={
              <PrivateRoute allowedRoles={['Operator']}>
                <CategoryUpdateForm />
              </PrivateRoute>
            }
          />
          <Route path="/shop" element={<Shop />} />
          <Route path="/category-table" element={<CategoryTable />} />
          <Route path="/product-table" element={<ProductTable />} />
          <Route path="/setting" element={<Setting />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
