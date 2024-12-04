import React from 'react';

const funcComponent = ({numbers}) => {

  return (
    <>
      {numbers.map((el) => 
        <React.Fragment key={el.id}>
          <span>{el.num} </span>
        </React.Fragment>
      )}
    </>
  );
};

export default funcComponent;