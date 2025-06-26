function Button({ text }) {
  return (
    <button 
      className="bg-gray-800 text-gray-200 cursor-pointer hover:opacity-75 transition-opacity duration-200 px-4 py-2 rounded-full text-sm"
    >
      {text}
    </button>
  )
}

export default Button
