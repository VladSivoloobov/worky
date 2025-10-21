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
    let isCancelled = false;

    const getLocation = async () => {
      try {
        const authStatus = await Geolocation.requestAuthorization('whenInUse');

        if (isCancelled) return;

        if (authStatus === 'granted') {
          Geolocation.getCurrentPosition(
            position => {
              if (isCancelled) return;
              const { latitude, longitude } = position.coords;
              setLocation({ latitude, longitude });
              setLoading(false);
            },
            error => {
              if (isCancelled) return;
              setError(error.message);
              setLoading(false);
            },
            {
              enableHighAccuracy: true,
              timeout: 15000,
              maximumAge: 10000,
            },
          );
        } else {
          if (!isCancelled) {
            setError('Доступ к геолокации запрещён');
            setLoading(false);
          }
        }
      } catch (err: any) {
        if (!isCancelled) {
          setError(err.message || 'Неизвестная ошибка');
          setLoading(false);
        }
      }
    };

    getLocation();

    return () => {
      isCancelled = true;
    };
  }, []);

  return { location, loading, error };
}
