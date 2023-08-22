import { DirectionsResponseData } from "@googlemaps/google-maps-services-js";
import { Route } from "@prisma/client";

export class RouteSerializer implements Omit<Route, 'directions'> {
    id: string;
    name: string;
    source: { name: string, location: { lat: number; lng: number } };
    distance: number;
    duration: number;
    destination: { name: string, location: { lat: number; lng: number } };
    directions: DirectionsResponseData & {request: any};
    created_at: Date;
    update_at: Date;

    constructor(route: Route) {
        this.id = route.id;
        this.name = route.name;
        this.source = route.source;
        this.destination = route.destination;
        this.distance = route.distance;
        this.duration = route.duration;
        this.directions = JSON.parse(route.directions as string);
        this.created_at = route.created_at;
        this.update_at = route.update_at;
    }
}