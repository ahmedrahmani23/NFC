// Configuration des informations personnelles

const profileConfig = {
    // Informations de base


    name: "PRESTIVA LIMO",
    bio: "The best limousine transportation from Montréal",
    profileImage: "https://i.ibb.co/3yMpY6bR/logo.jpg",
    





    // Réseaux sociaux
    socialLinks: {
        facebook: "https://www.facebook.com/share/16dysjBQvt/?mibextid=wwXIfr",
        instagram: "https://www.instagram.com/riyadmahrez26.7?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
        tiktok: "https://www.tiktok.com/@chebkhaled?is_from_webapp=1&sender_device=pc",
        whatsapp: "+1 (438) 454-8500",
        telegram: "+1 (438) 454-8500",
        linkedin: "daisyparkhouse",
        snapchat: "https://www.snapchat.com/@sheikh_tidiane?sender_web_id=792b2a4d-05d3-4e8f-a5e0-1aeb89eba722&device_type=desktop&is_copy_url=true",
        email: "contact@prestivalimo.com",
        website: "https://prestiva-limo.ca/",
        maps: "https://share.google/T1z7NAFbftnLYNKZy",
        phone: "+1 (438) 454-8500"
    },
    






    // Activation des icônes (mettre true pour afficher, false pour masquer)
    enabledIcons: {
        facebook: false,      // Afficher Facebook
        instagram: false,     // Afficher Instagram
        tiktok: false,        // Afficher TikTok
        whatsapp: true,      // Afficher WhatsApp
        telegram: true,      // Afficher Telegram
        linkedin: false,     // Afficher LinkedIn (mettre true pour l'activer)
        website: true,       // Afficher Site Web
        maps: false,          // Afficher Maps
        phone: true,         // Afficher Téléphone
        snapchat: false,      // Afficher Snapchat
        email: true,         // Afficher Email
    },
    
};



























// Ne pas modifier ci-dessous
if (typeof module !== 'undefined' && module.exports) {
    module.exports = profileConfig;
} else {
    window.profileConfig = profileConfig;
}
