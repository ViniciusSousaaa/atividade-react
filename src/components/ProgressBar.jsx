function ProgressBar({ value, label }) {
  return (
    <div>
      <div
        className="progress"
        role="progressbar"
        aria-label={label}
        aria-valuenow={value}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <div className="progress-fill" style={{ width: `${value}%` }}></div>
      </div>
      <p>{value}%</p>
    </div>
  )
}

export default ProgressBar