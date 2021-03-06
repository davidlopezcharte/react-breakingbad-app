import React from 'react';
import { Redirect, useHistory, useParams } from 'react-router-dom';
import { useCharacterId } from '../../hooks/useCharacterId';
import { Spinners } from '../ui/Spinners';
import 'animate.css';

export const CharacterScreen = () => {
  const history = useHistory();
  const { characterId } = useParams();

  const numId = parseFloat(characterId);

  const { isLoading, getCharacterId } = useCharacterId(numId);

  if (!getCharacterId) {
    return <Redirect to="/" />;
  }

  const { img, name, occupation, nickname, status } = getCharacterId;

  const handleClick = () => {
    history.goBack();
  };

  return (
    <div className="container mt-5">
      {isLoading ? (
        <Spinners />
      ) : (
        <div>
          <h1>Character</h1>
          <hr />

          <div className="col-10 " style={{ maxWidth: 540 }}>
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src={img}
                  className="img-fluid rounded-start animate__animated animate__fadeInLeft"
                  alt="..."
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">
                    <b>{name}</b>
                  </h5>
                  <p className="card-text">
                    <b>Occupation:</b>
                    {occupation}
                  </p>
                  <p className="card-text">
                    <b>NickName: </b>
                    {nickname}
                  </p>
                  <p className="card-text">
                    <b>Status: </b>
                    {status}
                  </p>
                  <button
                    className="btn btn-primary"
                    onClick={handleClick}
                    type="button"
                  >
                    Return
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
