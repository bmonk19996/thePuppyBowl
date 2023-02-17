
const url = 'https://fsa-puppy-bowl.herokuapp.com/api/2301-FTB-ET-WEB-FT/'

async function getPlayers () {
try {
    const response = await fetch(
      url + "players"
    );

    const result = await response.json();
    return result
  } catch (err) {
    console.error(err);
  }
}
export default getPlayers

export async function getPlayer(id){
  try{
    const response = await fetch( url + "players/" + id)
    const result = await response.json();
    return result
  }catch(err){
    console.log(err)
  }
}