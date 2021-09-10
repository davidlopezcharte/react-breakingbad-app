import React from 'react';
import { Link } from 'react-router-dom';

export const CharacterCard = ({
  name,
  img,
  char_id: chardId,
  nickname,
  portrayed,
}) => (
  <Link to={`./character/${chardId}`} className="card__main">
    <img src={img} className="img img-responsive " alt={name} />
    <div className="card__profile-name">{name}</div>
    <div className="card__profile-position">{nickname}</div>
    <div className="card__profile-overview">
      <div className="card__profile-overview">
        <div className="row">
          <div className="col-ms-4">
            <h3>{portrayed}</h3>
          </div>
        </div>
      </div>
    </div>
  </Link>
);
