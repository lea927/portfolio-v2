function WakaTime() {
  return (
    <div className="text-gray-600 dark:text-gray-300 p-12 transition-colors duration-300">
      <h2 className="text-lg font-bold text-gray-800 dark:text-gray-100 mb-6 transition-colors duration-300">Coding Activity</h2>
      <div className="flex justify-center rounded-xl p-6">
        <figure className="w-full max-w-4xl">
          <embed 
            src="https://wakatime.com/share/@lea927/ca23b9b4-df82-4346-95c1-dff0adf31f35.svg"
            className="w-full h-auto min-h-[400px] rounded-lg bg-white dark:bg-gray-800 transition-colors duration-300"
          />
        </figure>
      </div>
    </div>
  )
}

export default WakaTime
