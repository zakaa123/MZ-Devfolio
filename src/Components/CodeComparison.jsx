import React, { useState, useEffect } from 'react';
import '../Styles/main.css'; // use new custom file

const CodeComparison = () => {
  return (
    <section className="code-comparison-section">
      <div className="container" data-aos="fade-up">
        <h2 className="section-title">Code Comparison</h2>
        <div className="comparison-wrapper">
          {/* Before Block */}
          <div className="code-block">
            <h3>Before</h3>
            <pre className="code">
              <code>
{`// ❌ Bad API Call: Potential race conditions & memory leaks
const FetchComponent = ({ userId }) => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(\`https://api.example.com/user/\${userId}\`)
      .then(response => response.json())
      .then(data => {
        setUserData(data);
        setLoading(false);
      });
  }, [userId]);

  return loading ? <p>Loading...</p> : <p>{userData.name}</p>;
};`}
              </code>
            </pre>
          </div>

          {/* After Block */}
          <div className="code-block">
            <h3>After</h3>
            <pre className="code">
              <code>
{`// ✅ Proper API Handling with AbortController
const FetchComponent = ({ userId }) => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    setLoading(true);
    fetch(\`https://api.example.com/user/\${userId}\`, { signal })
      .then(response => response.json())
      .then(data => {
        setUserData(data);
        setLoading(false);
      })
      .catch(err => {
        if (err.name !== 'AbortError') {
          console.error(err);
        }
      });

    return () => controller.abort();
  }, [userId]);

  return loading ? <p>Loading...</p> : <p>{userData.name}</p>;
};`}
              </code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CodeComparison;
