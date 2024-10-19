const Loader = () => {
    return (
      <div className="flex justify-center items-center h-48">
        <div className="loader"></div>
        <style jsx>{`
          .loader {
            border: 8px solid rgba(0, 0, 0, 0.1);
            border-left-color: #4a90e2;
            border-radius: 50%;
            width: 50px;
            height: 50px;
            animation: spin 1s ease-in-out infinite;
          }
          @keyframes spin {
            to {
              transform: rotate(360deg);
            }
          }
        `}</style>
      </div>
    );
  };
  
  export default Loader;
  