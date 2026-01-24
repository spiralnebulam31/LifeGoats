// Master list of all waypoints - single source of truth
export const waypoints = {
    gortsia: {
        id: "gortsia",
        location: "Gortsia 🚗",
        altitude: 1137,
        description: ""
    },
    petrostrouga: {
        id: "petrostrouga",
        location: "Petrostrouga Refuge 🏠",
        altitude: 1940,
        description: ""
    },
    kakalos: {
        id: "kakalos",
        location: "Christos Kakalos Refuge 🏠",
        altitude: 2650,
        description: ""
    },
    profitisIlias: {
        id: "profitisIlias",
        location: "Profitis Ilias Peak ⛰️",
        altitude: 2803,
        description: ""
    },
    agapitos: {
        id: "agapitos",
        location: "Spilios Agapitos Refuge 🏠",
        altitude: 2100,
        description: ""
    },
    prionia: {
        id: "prionia",
        location: "Prionia 🚗",
        altitude: 1075,
        description: ""
    }
};

// Define routes using waypoint references
export const routes = {
    gortsiaToMusesPlateau: {
        name: "Gortsia to Muses Plateau",
        ascent: {
            waypoints: ["gortsia", "petrostrouga", "kakalos", "profitisIlias"],
            totals: {
                altitudeGain: 1780,
                distanceCovered: 11
            }
        },
        descent: {
            waypoints: ["profitisIlias", "kakalos", "agapitos", "prionia"],
            totals: {
                altitudeGain: 1842,
                distanceCovered: 11
            }
        }
    }
};

// Helper function to get full waypoint data for a route
export const getRouteData = (routeKey, direction) => {
    const route = routes[routeKey];
    
    if (!route) {
        console.warn(`Route "${routeKey}" not found`);
        return null;
    }
    
    const directionData = route[direction];
    
    return {
        points: directionData.waypoints.map((waypointKey, index) => ({
            id: index + 1,
            ...waypoints[waypointKey]
        })),
        totals: directionData.totals
    };
};