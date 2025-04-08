import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Table, Button } from 'react-bootstrap';

const Teams = () => {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    fetch('https://fictional-waffle-w649rq7r6cp4j-8000.app.github.dev/api/teams')
      .then(response => response.json())
      .then(data => setTeams(data));
  }, []);

  return (
    <div className="container mt-4">
      <Card className="shadow-sm">
        <Card.Header className="bg-secondary text-white text-center">
          <h1 className="display-4">Teams</h1>
        </Card.Header>
        <Card.Body>
          <Table striped bordered hover responsive className="mt-4">
            <thead className="thead-dark">
              <tr>
                <th scope="col">Team Name</th>
                <th scope="col">Members</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {teams.map(team => (
                <tr key={team.id}>
                  <td>{team.name}</td>
                  <td>{team.members.join(', ')}</td>
                  <td>
                    <Button variant="info" className="me-2">View</Button>
                    <Button variant="danger">Delete</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Teams;
