import RouteTimelineItem from "./RouteTimelineItem";

const RouteTimeline = ({ routeTimelineData, totalData, title }) => (
  <div className="w-full h-auto max-w-6xl mx-auto pt-2 pb-10 px-4 md:px-6 -my-10">
    <div className="flex flex-col justify-center divide-y divide-slate-200 py-8">
      <div className="w-full max-w-3xl mx-auto -my-2">
      <h2 className="pb-6 text-3xl md:text-4xl font-bold font-subtitle uppercase text-primary">
          {title}
        </h2>
        <div className="flex flex-row justify-start items-center mb-4">
          <p className="text-xl font-bold text-primary">{title === "The Ascent" ? "Total elevation gain: " : "Total elevation loss: "}</p>
          <p className="text-xl text-primary pl-2">
          {totalData.altitudeGain} m
          </p>
        </div>
        <div className="flex flex-row justify-start items-center mb-4">
          <p className="text-xl font-bold text-primary">Total distance covered: </p>
          <p className="text-xl text-primary pl-2">
            {totalData.distanceCovered} km
          </p>
        </div>
          {routeTimelineData.map((event) => (
            <RouteTimelineItem
              key={event.id}
              event={event}
             />
          ))}
      </div>
    </div>
  </div>
);

export default RouteTimeline;