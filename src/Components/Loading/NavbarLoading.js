const LoadingNavbar = () => {
  return (
    <div className="flex items-center justify-center h-16 bg-white shadow">
      <div className="flex space-x-2">
        <span className="w-2 h-2 bg-gray-500 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
        <span className="w-2 h-2 bg-gray-500 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
        <span className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"></span>
      </div>
    </div>
  );
};

export default LoadingNavbar;
