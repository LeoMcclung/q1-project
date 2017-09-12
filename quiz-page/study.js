// Function to generate a random integer between min & max (inclusive)
function randomInteger(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
  //    make sure max is numberOfItems-1 to ensure a valid array index


// Fetch items from the NASA images API

fetch('https://images-api.nasa.gov/search?keywords=galaxies&description=galaxy&center=jpl&media_type=image')
  .then(response => response.json())
  .then(body => {
    var numberOfItems = body.collection.items.length;
    var randomIndexItem = randomInteger(numberOfItems-1);
    var randomItem = body.collection.length[randomIndexItem];
    
    // Pull the thumbnail source from the item.links[0].href field
    // Update the document.body style background to the image url obtained above

  })
  .catch(e => console.error(e));