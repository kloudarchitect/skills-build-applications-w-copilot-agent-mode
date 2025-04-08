import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Table } from 'react-bootstrap';

const Leaderboard = () => {
  const [leaderboard, setLeaderboard] = useState([]);

  useEffect(() => {
    fetch('https://fictional-waffle-w649rq7r6cp4j-8000.app.github.dev/api/leaderboard')
      .then(response => response.json())
      .then(data => setLeaderboard(data));
  }, []);

  return (
    <div className="container mt-4">
      <Card className="shadow-sm">
        <Card.Header className="bg-success text-white text-center">
          <h1 className="display-4">Leaderboard</h1>
        </Card.Header>
        <Card.Body>
          <Table striped bordered hover responsive className="mt-4">
            <thead className="thead-dark">
              <tr>
                <th scope="col">Username</th>
                <th scope="col">Score</th>
              </tr>
            </thead>
            <tbody>
              {leaderboard.map(entry => (
                <tr key={entry.id}>
                  <td>{entry.username}</td>
                  <td>{entry.score}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Leaderboard;
