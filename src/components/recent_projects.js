import React from 'react'
import '../css/recent.css';

function RecentProjects() {
  return (
    <>
      <div className="row">
        <div className="col-sm-6">
          <div className="section">
            <img src="../images/img_1.jpg" class="card-img-top" alt="..."></img>
            <div>project_title</div>
            <div>description</div>
            <div>link</div>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="section">
            <img src="../images/img_1.jpg" class="card-img-top" alt="..."></img>
            <div>project_title</div>
            <div>description</div>
            <div>link</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default RecentProjects;