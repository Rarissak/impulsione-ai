import React from 'react';
import './breadcrumb.css';

const Breadcrumb = ({ crumbs }) => {
  return (
    <nav aria-label="breadcrumb">
      <div className="breadcrumb">
        {crumbs.map((crumb, index) => (
          <React.Fragment key={index}>
            {index > 0 && <span className="separator">|</span>}
            <span className={`breadcrumb-item ${index === crumbs.length - 1 ? 'active' : ''}`}>
              {index === crumbs.length - 1 ? (
                <strong>{crumb.text}</strong>
              ) : (
                <span>{crumb.text}</span>
              )}
            </span>
          </React.Fragment>
        ))}
      </div>
    </nav>
  );
};

export default Breadcrumb;