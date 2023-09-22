import { useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = 'YOUR_MAPBOX_ACCESS_TOKEN';

const MapBox = () => {
  const [userLocation, setUserLocation] = useState(null);

  useEffect(() => {
    // Dapatkan lokasi pengguna menggunakan geolokasi browser
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        setUserLocation([longitude, latitude]); // Set lokasi pengguna dalam state
      });
    }
  }, []);

  useEffect(() => {
    if (userLocation) {
      // Buat objek peta setelah mendapatkan lokasi pengguna
      const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: userLocation, // Gunakan lokasi pengguna sebagai pusat peta
        zoom: 12,
      });

      // Tambahkan kontrol navigasi jika diperlukan
      map.addControl(new mapboxgl.NavigationControl());

      // Tambahkan marker di lokasi pengguna
      new mapboxgl.Marker().setLngLat(userLocation).addTo(map);

      // Membersihkan peta saat komponen dibongkar
      return () => map.remove();
    }
  }, [userLocation]);

  return (
    <div id="map" className="hidden md:flex flex-col items-center justify-center box-border" style={{ width: '100%', height: '400px' }}></div>
  );
};

export default MapBox;
