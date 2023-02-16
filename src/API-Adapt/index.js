const url = 'https://fsa-puppy-bowl.herokuapp.com/api/2301-FTB-ET-WEB-FT/'

async function getPlayers () {
try {
    const response = await fetch(
      url + "players"
    );
    const result = await response.json();
    console.log(result)
    return result
  } catch (err) {
    console.error(err);
  }
}
getPlayers()
export default getPlayers