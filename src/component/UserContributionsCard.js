// UserContributionsCard.js
import React from 'react';
import { BarChart, Bar, XAxis, ResponsiveContainer } from 'recharts';
import ProgressBar from './ProgressBar';

const UserContributionsCard = ({ userContributions, totalIncome }) => {
  // Get user class name based on user name
  const getUserClassName = (userName) => {
    const userMap = {
      'User A': 'user-a-color',
      'User B': 'user-b-color',
      'User C': 'user-c-color',
      'User D': 'user-d-color',
      'User E': 'user-e-color'
    };
    return userMap[userName] || '';
  };
  
  // Get color code for bar chart
  const getUserColor = (userName) => {
    const userMap = {
      'User A': '#7952B3',
      'User B': '#4CAF50',
      'User C': '#FF9800',
      'User D': '#F44336',
      'User E': '#009688'
    };
    return userMap[userName] || '#000000';
  };
  
  return (
    <div className="contributions-card">
      <h2 className="card-title">User Contributions</h2>
      <div className="chart-container">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={userContributions} margin={{ top: 5, right: 5, bottom: 5, left: 5 }}>
            <XAxis dataKey="name" tick={{ fontSize: 12 }} />
            <Bar dataKey="contribution" name="Contribution" radius={[4, 4, 0, 0]}>
              {userContributions.map((entry, index) => (
                <Bar key={`cell-${index}`} fill={getUserColor(entry.name)} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
      
      {/* User Contribution Bars */}
      <div className="progress-container">
        {userContributions.map(user => (
          <div key={user.name} className="progress-item">
            <div className="progress-header">
              <span className="user-name">{user.name}</span>
              <span className="user-amount">${user.contribution}</span>
            </div>
            <ProgressBar 
              value={user.contribution} 
              maxValue={totalIncome} 
              colorClass={getUserClassName(user.name)} 
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserContributionsCard;

