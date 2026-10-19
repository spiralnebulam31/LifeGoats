// Not used at the moment (only used by Program.jsx, which is also unused).

import PropTypes from 'prop-types';
import "@/src/scss/components/Events/program/Program.scss";

const ProgramTab = ({ index, title, description, activeTab }) => {
  return (
    <div>
      {activeTab !== null && activeTab === index && (
        <div>
          <h3 className="program-tab__title">
            {title}
          </h3>
          {Array.isArray(description) ? (
            <ul className="program-tab__description">
              {description.map((item, index) => (
                <li key={index}>➤ {item}</li>
              ))}
            </ul>
          ) : (
            <p className="program-tab__description">
            ➤ {description}
            </p>
          )}
        </div>
      )}
    </div>
  );
}

ProgramTab.propTypes = {
  index: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string)
  ]).isRequired,
  activeTab: PropTypes.number
};

export default ProgramTab;
