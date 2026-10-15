/**
 * ============================================================
 * MASTER WAYPOINT LIST
 * Single source of truth for all Olympus waypoints.
 * Altitudes are in meters above sea level.
 *
 * Notes:
 * - Some natural features (Stragos, meadows) do not have
 *   officially published altitudes. These are marked as ESTIMATED.
 * - Estimates are based on hiking GPX data and trail averages
 *   and are suitable for planning & visualisation.
 * ============================================================
 */

export const waypoints = {
    gortsia: {
        id: "gortsia",
        location: "Gortsia 🚗",
        altitude: 1137,
        description: "Trailhead on the eastern side of Olympus"
    },

    stragos: {
        id: "stragos",
        location: "Stragos 🌾",
        altitude: 1928, // ESTIMATED from GPX trail data
        description: "High alpine pasture on route from Gortsia"
    },

    meadowGomarostalosLow: {
        id: "meadowGomarostalosLow",
        location: "Lower Meadow (Gomarostalos junction) 🌿",
        altitude: 1500, // ESTIMATED – open meadow near junction
        description: "Open meadow at the junction towards Gomarostalos (lower of the two)"
    },

    petrostrouga: {
        id: "petrostrouga",
        location: "Petrostrouga Refuge 🏠",
        altitude: 1940,
        description: "Mountain refuge above Gortsia"
    },

    kakalos: {
        id: "kakalos",
        location: "Christos Kakalos Refuge 🏠",
        altitude: 2650,
        description: "Refuge on the Plateau of the Muses"
    },

    profitisIlias: {
        id: "profitisIlias",
        location: "Profitis Ilias Peak ⛰️",
        altitude: 2803,
        description: "Highest chapel in Greece"
    },

    agapitos: {
        id: "agapitos",
        location: "Spilios Agapitos Refuge 🏠",
        altitude: 2100,
        description: "Main refuge on the E4 route"
    },

    prionia: {
        id: "prionia",
        location: "Prionia 🚗",
        altitude: 1075,
        description: "Popular trailhead with facilities"
    },

    agiosDionysiosMonastery: {
        id: "agiosDionysiosMonastery",
        location: "Agios Dionisios Monastery 🛕",
        altitude: 850,
        description: "Historic monastery in the Enipeas gorge"
    },

    agiosKonstantinosDion: {
        id: "agiosKonstantinosDion",
        location: "Agios Konstantinos (Dion) ⛪",
        altitude: 299,
        description: "Starting point near Dion village"
    },

    orliasWaterfalls: {
        id: "orliasWaterfalls",
        location: "Orlias Waterfalls 💦",
        altitude: 617,
        description: "Waterfalls and pools in lower Olympus"
    }
};


/**
 * ============================================================
 * ROUTES
 * Distances are in kilometres.
 * Elevation values are cumulative gain/loss, not net difference.
 *
 * Notes:
 * - Circular routes list the start waypoint twice.
 * - Elevation values are rounded and suitable for planning.
 * ============================================================
 */

export const routes = {

    /**
     * GORTSIA → PLATEAU OF THE MUSES
     * Classic ascent route
     */
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
                altitudeLoss: 1842,
                distanceCovered: 11
            }
        }
    },

    /**
     * PRIONIA → AGIOS DIONYSIOS MONASTERY
     * Short scenic hike through Enipeas gorge
     */
    prioniaToAgiosDionysios: {
        name: "Prionia to Agios Dionysios Monastery",
        waypoints: ["prionia", "agiosDionysiosMonastery"],
        totals: {
            distanceCovered: 2.8,
            altitudeGain: 100,   // small climbs along the gorge
            altitudeLoss: 325   // net descent overall
        }
    },

    /**
     * AGIOS KONSTANTINOS (DION) → ORLIAS WATERFALLS
     * Popular circular forest walk
     */
    agiosKonstantinosToOrliasCircular: {
        name: "Agios Konstantinos to Orlias Waterfalls (Circular)",
        waypoints: [
            "agiosKonstantinosDion",
            "orliasWaterfalls",
            "agiosKonstantinosDion"
        ],
        totals: {
            distanceCovered: 4.2,
            altitudeGain: 350,
            altitudeLoss: 350
        }
    },

    /**
     * GORTSIA → AGAPITOS (VIA STRAGOS & MEADOW)
     * Long alpine traverse – distance varies by exact path
     */
    gortsiaToAgapitosViaStragos: {
        name: "Gortsia to Agapitos (via Stragos & Meadow)",
        waypoints: [
            "gortsia",
            "stragos",
            "meadowGomarostalosLow",
            "agapitos"
        ],
        totals: {
            distanceCovered: 21,      // ESTIMATED
            altitudeGain: 1500,       // multiple ups & downs
            altitudeLoss: 550
        },
        notes: "Distance and elevation depend on exact alpine path chosen"
    },

    /**
     * PRIONIA → AGAPITOS
     * Main E4 ascent route
     */
    prioniaToAgapitos: {
        name: "Prionia to Agapitos",
        waypoints: ["prionia", "agapitos"],
        totals: {
            distanceCovered: 14,
            altitudeGain: 1025
        }
    },

    /**
     * AGAPITOS → PRIONIA
     * Descent of the E4 route
     */
    agapitosToPrionia: {
        name: "Agapitos to Prionia",
        waypoints: ["agapitos", "prionia"],
        totals: {
            distanceCovered: 14,
            altitudeLoss: 1025
        }
    },

    /**
     * PRIONIA → AGAPITOS → PRIONIA
     * Circular route on E4 trail
     */
    prioniaToAgapitosCircular: {
        name: "Prionia to Agapitos (Circular)",
        waypoints: ["prionia", "agapitos", "prionia"],
        totals: {
            distanceCovered: 28,
            altitudeGain: 1025,
            altitudeLoss: 1025
        }
    },

    /**
     * AGAPITOS → AGIOS DIONYSIOS VIA PRIONIA
     * Descent via E4 then to monastery
     */
    agapitosToAgiosDionysiosViaPrionia: {
        name: "Agapitos to Agios Dionysios (via Prionia)",
        waypoints: ["agapitos", "prionia", "agiosDionysiosMonastery"],
        totals: {
            distanceCovered: 16.8,
            altitudeGain: 100,
            altitudeLoss: 1350
        }
    }
};


/**
 * ============================================================
 * HELPER FUNCTION
 * Returns full waypoint objects for a given route.
 * ============================================================
 */
export const getRouteData = (routeKey, segment = null) => {
    const route = routes[routeKey];

    if (!route) {
        console.warn(`Route "${routeKey}" not found`);
        return null;
    }

    // Handle routes with ascent/descent segments
    if (segment && route[segment]) {
        const routeSegment = route[segment];
        return {
            points: routeSegment.waypoints.map((waypointKey, index) => ({
                id: index + 1,
                ...waypoints[waypointKey]
            })),
            totals: routeSegment.totals,
            name: `${route.name} - ${segment.charAt(0).toUpperCase() + segment.slice(1)}`,
            notes: route.notes || null
        };
    }

    // Handle regular routes
    return {
        points: route.waypoints.map((waypointKey, index) => ({
            id: index + 1,
            ...waypoints[waypointKey]
        })),
        totals: route.totals,
        name: route.name,
        notes: route.notes || null
    };
};
