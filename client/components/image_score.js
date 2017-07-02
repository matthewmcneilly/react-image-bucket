import React from 'react';

const ImageScore = (props) => {
  // props.ups is the number of upvotes
  // props.downs is the number of downvotes

  // destructures ups and downs
  const { ups, downs } = props;

  // logic to work out percentage of progress bar
  const upsPercent = `${100 * (ups / (ups + downs))}%`;
  const downsPercent = `${100 * (downs / (ups + downs))}%`;

  // 1st set of {} refering to a variable
  // 2nd set of {} refering to an object 
  return (
    <div>
      Ups/Downs
      <div className="progress">
        <div style={{ width: upsPercent }} className="progress-bar progress-bar-success progress-bar-striped" />
        <div style={{ width: downsPercent }} className="progress-bar progress-bar-danger progress-bar-stiped" />
      </div>
    </div>
  );
};

export default ImageScore;
