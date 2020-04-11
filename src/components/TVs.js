import React from 'react';

const Tv = ({tvsData}) => {
  const renderTable = function() {
    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Number of Episodes</th>
            <th>Price (Buy)</th>
            <th>Price (Rent)</th>
            <th>Release Year</th>
          </tr>
        </thead>
        <tbody>
          {tvsData &&
            tvsData
              .sort((a, b) => a.release - b.release)
              .map((film, index) => {
                return filmRow(film, index);
              })}
        </tbody>
      </table>
    );
  };

  const filmRow = function(film, index) {
    const {
      name,
      description,
      episodes,
      prices: {buy, rent},
      release,
    } = film;

    return (
      <tr key={index}>
        <td>{name}</td>
        <td>{description}</td>
        <td>{episodes.length}</td>
        <td>{buy}</td>
        <td>{rent}</td>
        <td>{release}</td>
      </tr>
    );
  };

  return (
    <div>
      <h2>Films Catalog</h2>
      {renderTable()}
    </div>
  );
};

export default Tv;
