import React from 'react';

const Card = ( { name, email, id} ) => {

  return (
    <div className='bg-light-green dib br3 pa3 ma2 grow bw-2'>
     <img alt='robots' src={`https://robohash.org/${id}?150x150`} />
      <div>
       <h3>{name}</h3>
       <p>{email}</p>
      </div>
    </div>

  );

}
export default Card;
