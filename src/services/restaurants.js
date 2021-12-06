import { checkError, client } from './client';

export async function getRestaurants() {
  // call supabase and get the list of restaurants
  const response = await client.from('restaurants').select();
  console.log(response);
  return checkError(response);
}
