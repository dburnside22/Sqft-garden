// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyBmZ6bPsZIJCDxmWctWkcrvpAAMiC7FwDY",
	authDomain: "plantdata-53c8c.firebaseapp.com",
	databaseURL: "https://plantdata-53c8c.firebaseio.com",
	projectId: "plantdata-53c8c",
	storageBucket: "plantdata-53c8c.appspot.com",
	messagingSenderId: "155688130868",
	appId: "1:155688130868:web:522d224f27c254c5e1ad61",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const database = firebase.firestore();

export function addPlant(plantData) {
	database
		.collection("plants")
		.doc(`${plantData.plantName}`)
		.set({
			plantName: `${plantData.plantName}`,
			spacing: 4,
			seedMonths: `${plantData.seedMonths}`,
			transplantMonths: `${plantData.transplantMonths}`,
			houseMonths: [],
		})
		.then(() => {
			console.log("it sent the data!");
		})
		.catch(() => {
			console.log("it didn't work out");
		});
}

export function udpatePlantData(plant){
	database.collection("plants").doc(`${plant.plantName}`).set(plant).then(console.log(`${plant.plantName} was updated`));

}

export async function getAllPlantData() {
	const allThePlants = await database.collection('plants').get()
    return allThePlants.docs.map(doc => doc.data());
}
