import PropTypes from 'prop-types';
import "@/src/scss/components/Events/program/Program.scss";

const DateButton = ({ date, isActive, onClick }) => {
  return (
    <div>
    {!isActive ? (
      <button
        className="date-button"
        onClick={onClick}
      >
        {date}
      </button>
    ) : (
      <button
        className="date-button date-button--active"
        onClick={onClick}
      >
        {date}
      </button>
    )}
    </div>
  )
}

DateButton.propTypes = {
  date: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default DateButton
