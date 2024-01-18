const api = 'http://api-exemple-v1.com/';
const postData = {
    // Les données que vous souhaitez envoyer avec la requête POST
    key1: 'value1',
    key2: 'value2'
};

const fetchDataPost = async () => {
    try {
        const response = await axios.post(api, postData, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer YOUR_ACCESS_TOKEN',
                'Accept-Language': 'fr',
            }
        });
        console.log(response.data);
    } catch (error) {
        console.error('Une erreur s\'est produite : ', error);
    } finally {
        // Code exécuté quel que soit le résultat de la requête
    }
};

// Appel de la fonction fetchDataPost
fetchDataPost();