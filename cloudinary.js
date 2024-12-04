import { v2 as cloudinary } from "cloudinary";

// Fonction pour se connecter à Cloudinary
const connectCloudinary = async () => {
    try {
        // Configuration de Cloudinary avec les variables d'environnement
        cloudinary.config({
            cloud_name: process.env.CLOUDINARY_NAME,
            api_key: process.env.CLOUDINARY_API_KEY,
            api_secret: process.env.CLOUDINARY_SECRET_KEY
        });

        console.log("Cloudinary connected successfully 🌥️");

    } catch (error) {
        console.error(`Cloudinary Connection Error: ${error.message}`);
        // Ici, on pourrait envisager de faire échouer l'application en cas de problème critique.
        process.exit(1); // Optionnel, arrête le processus si la connexion échoue
    }
};

export default connectCloudinary;
