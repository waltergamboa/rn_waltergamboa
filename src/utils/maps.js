export const API_KEY_MAPS = "AIzaSyAVkLqw0taHMHD02N5LwcKfYjHV7tjOzOQ";

export const URL_MAPS = (
  lat,
  lng,
  zoom = 7
) => `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng}&zoom=${zoom}&size=600x300&maptype=roadmap
&markers=color:blue%7Clabel:S%7C${lat},${lng}&key=${API_KEY_MAPS}`;

export const URL_GEOCODING = (lat, lng) =>
  `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${API_KEY_MAPS}`;
