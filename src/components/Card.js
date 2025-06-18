import React from 'react';

const Card = ({ name, email, id }) => {
  return (
    <div className='tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5'>
      <img alt='robots' src={`https://robohash.org/${id}?size=200x200`} height={200} width={200}  fetchPriority='high'/>
      <div>
        <h2 style={{margin: '0', fontSize: 18}}>{name}</h2>
        <p style={{margin: 0, fontSize: 15}}>{email}</p>
      </div>
    </div>
  );
}

export default Card;