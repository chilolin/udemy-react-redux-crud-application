import React from 'react';

export const App = () => {
  return (
    <div>
      <Cat />
      <Cat />
      <Cat />
      <Cat />
    </div>
  );  
}

const Cat = () => {
  return <div>Meow!</div>;
}