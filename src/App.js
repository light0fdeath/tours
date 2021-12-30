import React, { useEffect, useState } from 'react';

import './App.css';
const url = 'https://course-api.com/react-tours-project';

function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);
  return <h2>Tours Project Setup</h2>;
}

export default App;
