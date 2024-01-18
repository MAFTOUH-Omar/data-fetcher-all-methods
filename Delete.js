const api = 'http://api-exemple-v1.com/';

const fetchDataDelete = async () => {
    try {
        const response = await axios.delete(api, {
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

// Appel de la fonction fetchDataDelete
fetchDataDelete();