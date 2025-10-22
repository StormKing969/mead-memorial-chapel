import React, { useEffect, useState } from "react";
import "leaflet/dist/leaflet.css";

// Fix icon URLs for many bundlers (Vite-friendly approach)
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

// Local tuple type to avoid importing Leaflet at module scope during SSR
type PointTuple = [number, number];

const ClientMap: React.FC = () => {
  const [mods, setMods] = useState<null | {
    L: any;
    MapContainer: any;
    Marker: any;
    Popup: any;
    TileLayer: any;
  }>(null);

  useEffect(() => {
    let mounted = true;
    // Ensure we only load Leaflet on the client
    if (typeof window === "undefined") return;

    (async () => {
      const [{ default: L }, RL] = await Promise.all([
        import("leaflet"),
        import("react-leaflet"),
      ]);

      // Patch default icon URLs (required for many bundlers)
      if ((L.Icon.Default.prototype as any)._getIconUrl) {
        delete (L.Icon.Default.prototype as any)._getIconUrl;
      }
      L.Icon.Default.mergeOptions({
        iconRetinaUrl: markerIcon2x,
        iconUrl: markerIcon,
        shadowUrl: markerShadow,
      });

      if (mounted) {
        setMods({
          L,
          MapContainer: RL.MapContainer,
          Marker: RL.Marker,
          Popup: RL.Popup,
          TileLayer: RL.TileLayer,
        });
      }
    })();

    return () => {
      mounted = false;
    };
  }, []);

  if (!mods) {
    return <div style={{ height: 400 }}>Loading map…</div>;
  }

  const { L, MapContainer, Marker, Popup, TileLayer } = mods;

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