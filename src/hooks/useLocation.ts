import Geolocation from 'react-native-geolocation-service';
import { useEffect, useState } from 'react';

interface Location {
  latitude: number;
  longitude: number;
}

export function useLocation() {
  const [location, setLocation] = useState<Location | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getLocation = () => {
      Geolocation.requestAuthorization('whenInUse');

      Geolocation.getCurrentPosition(
        position => {
          const { latitude, longitude } = position.coords;
          setLocation({ latitude, longitude });
          setLoading(false);
        },
        error => {
          setError(error.message);
          setLoading(false);
        },
        {
          enableHighAccuracy: true,
          timeout: 30_000,
          maximumAge: 15_000,
        },
      );
    };

    getLocation();
  }, []);

  return { location, loading, error };
}
