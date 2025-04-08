import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Table, Button } from 'react-bootstrap';

const Workouts = () => {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    fetch('https://fictional-waffle-w649rq7r6cp4j-8000.app.github.dev/api/workouts')
      .then(response => response.json())
      .then(data => setWorkouts(data));
  }, []);

  return (
    <div className="container mt-4">
      <Card className="shadow-sm">
        <Card.Header className="bg-primary text-white text-center">
          <h1 className="display-4">Workouts</h1>
        </Card.Header>
        <Card.Body>
          <Table striped bordered hover responsive className="mt-4">
            <thead className="thead-dark">
              <tr>
                <th scope="col">Workout Name</th>
                <th scope="col">Duration (mins)</th>
                <th scope="col">Calories Burned</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {workouts.map(workout => (
                <tr key={workout.id}>
                  <td>{workout.name}</td>
                  <td>{workout.duration}</td>
                  <td>{workout.calories}</td>
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

export default Workouts;
