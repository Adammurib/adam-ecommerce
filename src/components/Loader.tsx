const Loader = () => (
  <div style={spinnerOverlay}>
    <div className="spinner"></div> {/* Add CSS animation for the spinner */}
    <p>Loading...</p>
  </div>
);

const spinnerOverlay = { 
  position: 'fixed' as const, top: 0, left: 0, width: '100%', height: '100%', 
  backgroundColor: 'rgba(255,255,255,0.7)', display: 'flex', flexDirection: 'column' as const, 
  justifyContent: 'center', alignItems: 'center' 
};

export default Loader;