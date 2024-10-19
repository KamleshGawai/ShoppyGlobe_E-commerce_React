const Notification = ({ message, type }) => {
    if (!message) return null; // If there's no message, don't display the notification
  
    const notificationStyles = type === 'success' ? 'bg-green-500' : 'bg-red-500';
  
    return (
      <div className={`fixed top-0 left-0 right-0 p-4 text-white text-center ${notificationStyles}`}>
        {message}
      </div>
    );
  };
  
  export default Notification;
  