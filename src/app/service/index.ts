export const getMass = (name: string): Promise<{mass: number}> => {
  const url = 'http://localhost:3000';
  return fetch(url, {method: 'POST', body: name})
    .then((data) => data.json())
    .catch((err) => ({mass: NaN}));
};
