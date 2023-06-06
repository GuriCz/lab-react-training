import React from 'react'

function NumbersTable({limit}) {
    const renderTable = () => {
        const tableCells = [];
    
        for (let i = 1; i <= limit; i++) {
        const evenOrNot = i % 2 === 0 ? 'even' : '';
          tableCells.push(<td key={i} className={evenOrNot}>{i}</td>);
          
        }
    
        return tableCells;
      };
  return (
    <div>
        <tr>{renderTable()}</tr>
    </div>
  )
}

export default NumbersTable