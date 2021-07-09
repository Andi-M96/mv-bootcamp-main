const fsp = require('fs').promises; // Node.js file system module with promises
/**
 * This code illustrates how to load JSON data into an array.
 * 
 */
 async function loadAndPrint() {
    // wait for the json file to be read
    try {
        const rawData = await fsp.readFile('./restaurants.json');
        // convert the file data into JS objects (arrays)
        const restaurantsArray = (JSON.parse(String(rawData)));
        for (i=0; i<restaurantsArray.length; i++) {
            console.log('            ')
            const currentRestaurant = restaurantsArray[i];
            console.log(currentRestaurant.name)
            console.log('----------')
            const menus = currentRestaurant.menus;
//nested for loop for menus 
            for (j=0; j<menus.length; j++){
                const currentMenu = menus[j]
                console.log(currentMenu.title)
                const currentMenuItems = currentMenu.items
                for (a=0; a<currentMenuItems.length; a++){
                    const currentMenuItem = currentMenuItems[a]
                    console.log (currentMenuItem.name)
                }
            }
            console.log(restaurantsArray[i].name);
        }
    } catch (error) {
        // if we get here, our file read has filed
        console.error('problem reading the file'+error);
    }
}
loadAndPrint()