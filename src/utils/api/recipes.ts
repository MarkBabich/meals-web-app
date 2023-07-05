import { mealsdbClient } from './apiClients';

export async function getRecipes() {
  const response = await mealsdbClient.get('/search.php?s=A');

  return response;
}
