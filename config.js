// Configuration des informations personnelles

const profileConfig = {
    // Informations de base


    name: "MARSA BLANCA",
    jobTitle: "Développeuse Web",
    bio: "Découvrez l'authenticité des saveurs méditerranéennes au cœur de votre ville. Notre restaurant vous propose une cuisine raffinée préparée avec des ingrédients frais et locaux. Un voyage culinaire qui éveillera vos papilles !",
    address: "Adresse complète du client",
    profileImage: "https://i.ibb.co/mFXPvSJM/marsablanca.jpg",
    





    // Réseaux sociaux
    socialLinks: {
        facebook: "daisyparkhouse",
        instagram: "daisyparkhouse",
        tiktok: "daisyparkhouse",
        whatsapp: "+1234567890",
        telegram: "daisyparkhouse",
        linkedin: "daisyparkhouse",
        snapchat: "nomdutilisateur",
        email: "contact@example.com",
        website: "https://mon-site.com",
        maps: "https://maps.app.goo.gl/example",
        phone: "+213658546209"
    },
    






    // Activation des icônes (mettre true pour afficher, false pour masquer)
    enabledIcons: {
        facebook: true,      // Afficher Facebook
        instagram: true,     // Afficher Instagram
        tiktok: true,        // Afficher TikTok
        whatsapp: true,      // Afficher WhatsApp
        telegram: true,      // Afficher Telegram
        linkedin: true,     // Afficher LinkedIn (mettre true pour l'activer)
        website: true,       // Afficher Site Web
        maps: true,          // Afficher Maps
        phone: true,         // Afficher Téléphone
        snapchat: true,      // Afficher Snapchat
        email: true          // Afficher Email
    },
    
};



























// Ne pas modifier ci-dessous
if (typeof module !== 'undefined' && module.exports) {
    module.exports = profileConfig;
} else {
    window.profileConfig = profileConfig;
}
