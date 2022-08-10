/* import React from "react";
//para llamarlo desde mi json
import json from "../../src/Api.json";

const Header1 = () => {
  const noti = json.articles;

  return (
    <>
      <div>
        {noti.map((user) => (
          <div>
            <p>{user.source.name}</p>
            <h2>{user.title}</h2>
            <img src={user.urlToImage} alt={user.title} />
            <p>{user.publishedAt}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Header1;
 */
