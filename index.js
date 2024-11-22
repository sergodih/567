import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';

function App() {
  const [inputTxt, setInputTxt] = useState('');
  return (
    <div style={styles.container}>
      <p style={styles.title}>Task: accessibility of the button</p>
      <input
        type="text"
        value={inputTxt}
        onChange={(e) => {
          setInputTxt(e.target.value);
        }}
        style={styles.input}
        placeholder=""
      />
      <br />
      <br />
      <input type="submit" disabled={inputTxt.length == 0} />
    </div>
  );
}

const styles = {
  container: {
    padding: 15,
  },
  title: {
    fontWeight: 'bold',
  },
  paragraph: {},
};

const root = createRoot(document.getElementById('app'));
root.render(<App />);
