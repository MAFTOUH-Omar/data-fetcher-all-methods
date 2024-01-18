const api = 'http://api-exemple-v1.com/';
const fetchData = async () => {
    try {
        const response = await axios.get(api, {
            headers: {
                'Content-Type': 'application/json', // Exemple d'en-tête pour spécifier le type de contenu
                'Authorization': 'Bearer YOUR_ACCESS_TOKEN', // Exemple d'en-tête d'autorisation avec un jeton d'accès
                'Accept-Language' : 'fr' // Spécifie la langue de préférence
            }
        });
        // Traitement de la réponse ici
        console.log(response.data);
    } catch (error) {
        // Gestion des erreurs
        console.error('Une erreur s\'est produite : ', error);
    } finally {
        // Code exécuté quel que soit le résultat de la requête
    }
};

fetchData();