import react from 'react';
import '../styles/AdventureLoading.scss';

function AdventureLoading() {
  return (
    <div className="loading-container">
      <div className="loading-spinner"></div>
      <p className="loading-text">Preparing Your Adventure...</p>
    </div>
  );
}

export default AdventureLoading;