import React from 'react';


function Movie({ title, poster_path, vote_average}) {
    return (
        <div className="Container">
            <div className="Contents">
                <img className="img" src={poster_path} alt="영화포스터" />
                <div className="Text">
                    <div className="Title">{title}</div>
                    <div className="VoteAverage">{vote_average}</div>
                </div>
            </div>
        </div>
    );
}

export default Movie