const baseUrl = 'http://localhost:5173';

export const extractRoute = (url: string) => {
  const extractedRoute = (baseUrl + url).split('/');
  return extractedRoute[extractedRoute.length - 1];
}