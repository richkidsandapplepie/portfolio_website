import React from 'react';
import '../css/recent.css';

function RecentProjects() {
  return (
    <>
      <div className="row">
        <div className="col-sm-4">
          <div className="section">
            <div className="img-container">
              <img src="../images/img_1.jpg" className="card-image card-img-top" alt="..."></img>
            </div>
            <div className="card-title"><strong>TallyUp</strong></div>
            <div className="card-info">Game night manager</div>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="section">
            <img src="../images/img_1.jpg" className="card-image card-img-top" alt="..."></img>
            <div className="card-title"><strong>TallyUp</strong></div>
            <div className="card-info">Game night manager</div>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="section">
            <img src="../images/img_1.jpg" className="card-image card-img-top" alt="..."></img>
            <div className="card-title"><strong>TallyUp</strong></div>
            <div className="card-info">Game night manager</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default RecentProjects;