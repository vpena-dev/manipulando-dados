export default async function fetchData<T>(url: string) {
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error('Erro: ' + response.status);
    const json: T = await response.json();
    return json;
  } catch (error) {
    return null;
  }
}
