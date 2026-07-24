import React from 'react';
import ReactDOM from 'react-dom/client';


function App() {
  return (
    <div className="p-6 text-center text-xl text-blue-600">
      Admin Frontend is running 🚀
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
