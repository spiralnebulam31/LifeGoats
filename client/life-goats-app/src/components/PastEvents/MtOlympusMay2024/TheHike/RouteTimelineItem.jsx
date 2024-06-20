const RouteTimelineItem = ({ event }) => (
  <div key={event.id} className="relative pl-8 sm:pl-32 py-6 group">
    <div className="font-links font-bold text-2xl text-secondary mb-1 sm:mb-0">
      {event.link ? (
        <a
          href={event.link}
          target="_blank"
          rel="noopener noreferrer"
          className="underline cursor-pointer hover:text-tertiary"
        >
          {event.location}
        </a>
      ) : (
        <p>{event.location}</p>
      )}
    </div>
    <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-secondaryDark after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
      <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-md font-bold w-20 h-6 mb-3 sm:mb-0 text-earth bg-tertiaryLight rounded-full">
        {event.altitude} m
      </time>
      <div className="flex flex-col w-[60%] text-xl text-primary">
        <p>{event.description}</p>
              {/* <img
        className="absolute left-0 top-0 w-20 h-auto rounded-xl"
        src={event.photo}
        alt={event.alt}
      /> */}
      </div>
    </div>
  </div>
);

export default RouteTimelineItem;