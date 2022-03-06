import React, { Fragment, useState } from "react";

function Video() {
  const [url, setUrl] = useState("");
  function getId(url) {
    const regExp =
      /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return match && match[2].length === 11 ? match[2] : null;
  }
  const videoId = getId(url);
  console.log(videoId);
  return (
    <Fragment>
      <div className="container">
        <div className="row">
          <div className="col-md-6 mx-auto">
            <div className="form-floating">
              <input
                type="url"
                className="form-control"
                id="linkVideo"
                placeholder="Link batalla"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
              />
              <label htmlFor="linkVideo">Link batalla (YOUTUBE)</label>
            </div>
          </div>
        </div>
        <div className="container my-3">
          <div className="row text-center">
            <div className="col-md-12">
              <iframe
                src={`https://www.youtube.com/embed/${videoId}`}
                frameBorder="0"
                width="720"
                height="480"
                allowFullScreen
                allow="autoplay; fullscreen"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Video;
