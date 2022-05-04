// ./src/App.tsx

// import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import store, { persistor } from "./store";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
// import ProtectedRoute from "./routes/ProtectedRoute";

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <Router>
          <div>
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/" element={<Profile />} />
            </Routes>
          </div>
        </Router>
      </PersistGate>
    </Provider>
  );
}
