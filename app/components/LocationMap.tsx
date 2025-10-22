import React, { useEffect, useState, Suspense, lazy } from "react";

const ClientMap = lazy(() => import("./ClientMap"));

const LocationMap: React.FC = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => setIsClient(true), []);

  if (!isClient) return null;

  return (
    <Suspense fallback={<div style={{ height: 400 }}>Loading map…</div>}>
      <ClientMap />
    </Suspense>
  );
};

export default LocationMap;