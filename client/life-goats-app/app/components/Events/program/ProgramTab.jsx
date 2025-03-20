import PropTypes from 'prop-types';

const ProgramTab = ({ index, title, description, activeTab }) => {
  return (
    <div>
      {activeTab !== null && activeTab === index && (
        <div>
          <h3 className="px-4 pt-1 text-bold text-tertiary uppercase font-links font-bold text-3xl pb-3">
            {title}
          </h3>
          {Array.isArray(description) ? (
            <ul className="px-8 py-1 text-primary font-body md:text-[16px] text-[14px]">
              {description.map((item, index) => (
                <li key={index}>➤ {item}</li>
              ))}
            </ul>
          ) : (
            <p className="px-8 py-1 text-primary font-body md:text-[16px] text-[14px]">
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
