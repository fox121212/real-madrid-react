export default async function handler(req, res) {
  const response = await fetch(
    'https://api.football-data.org/v4/teams/86/matches?limit=30',
    {
      headers: {
        'X-Auth-Token': process.env.FOOTBALL_API_KEY
      }
    }
  );
  const data = await response.json();
  res.status(response.status).json(data);
}