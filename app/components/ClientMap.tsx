import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import L, {type PointTuple} from "leaflet";
import "leaflet/dist/leaflet.css";

// Fix icon URLs for many bundlers (Vite-friendly approach)
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

const ClientMap: React.FC = () => {
  const getIcon = (size: PointTuple) => {
    return L.icon({
      iconUrl: "./about/icon-location.svg",
      iconSize: size,
    });
  };

  return (
    <div style={{ height: 400 }}>
      <MapContainer
        center={[44.009082, -73.179008]}
        zoom={15}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='© <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />

        <Marker position={[44.009082, -73.179008]} icon={getIcon([25, 25])}>
          <Popup>Location of the marker.</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default ClientMap;