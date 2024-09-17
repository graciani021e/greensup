
// Initialize Cloud Firestore and get a reference to the servic

//Cria alguma coisa
export async function create(table, data, identifier) {

  const connection = collection(db, table);
  await setDoc(doc(connection, "zecaviado"), {
    name: "San Francisco", state: "CA", country: "USA",
    capital: false, population: 860000,
    regions: ["west_coast", "norcal"] })
  await setDoc(doc(connection, identifier), data);

  return 'paumolao'; 
}