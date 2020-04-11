import React from 'react';

const Films = ({filmsData}) => {
  function renderTable() {
    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Price (Buy)</th>
            <th>Price (Rent)</th>
            <th>Release Year</th>
          </tr>
        </thead>
        <tbody>
          {filmsData &&
            filmsData
              .sort((a, b) => a.release - b.release)
              .map((film, index) => {
                return filmRow(film, index);
              })}
        </tbody>
      </table>
    );
  }

  function filmRow(film, index) {
    const {
      name,
      description,
      prices: {buy, rent},
      release,
    } = film;

    return (
      <tr key={index}>
        <td>{name}</td>
        <td>{description}</td>
        <td>{buy}</td>
        <td>{rent}</td>
        <td>{release}</td>
      </tr>
    );
  }

  return (
    <div>
      <h2>Films Catalog</h2>
      {renderTable()}
    </div>
  );
};

export default Films;
