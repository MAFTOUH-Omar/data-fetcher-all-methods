const api = 'http://api-exemple-v1.com/';
const putData = {
    // Les données que vous souhaitez envoyer avec la requête PUT
    key1: 'updatedValue1',
    key2: 'updatedValue2'
};

const fetchDataPut = async () => {
    try {
        const response = await axios.put(api, putData, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer YOUR_ACCESS_TOKEN',
                'Accept-Language': 'fr',
                // Ajoutez d'autres en-têtes selon les besoins de l'API
            }
        });
        console.log(response.data);
    } catch (error) {
        console.error('Une erreur s\'est produite : ', error);
    } finally {
        // Code exécuté quel que soit le résultat de la requête
    }
};

// Appel de la fonction fetchDataPut
fetchDataPut();