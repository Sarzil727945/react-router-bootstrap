import React from 'react';

const Loader = () => {
     return (
          <div>
               <div className="d-flex justify-content-center my-3">
                    <div className="spinner-border text-info" role="status">
                         <span className="visually-hidden">Loading...</span>
                    </div>
               </div>
          </div>
     );
};

export default Loader;