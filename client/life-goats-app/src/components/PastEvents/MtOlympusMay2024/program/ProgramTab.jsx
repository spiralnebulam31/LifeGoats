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
};

export default ProgramTab;
