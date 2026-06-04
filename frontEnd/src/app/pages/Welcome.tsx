import { Link } from "react-router";
import bg from "../../assets/images/Logo-Background.png";

export function Welcome() {
  return (
    <div
      className="min-h-screen flex items-center justify-center p-4 bg-cover bg-center  relative"
      style={{ backgroundImage: `url(${bg})` }}
    >
      {/* Overlay pour lisibilité 
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Contenu */}
      <div className="relative z-10 text-center max-w-2xl w-full">
        
        {/* Titre */}
        <h1 className="text-5xl font-semibold text-white mb-4 drop-shadow-lg">
          Bienvenue sur FevOneROLL
        </h1>

        {/* Sous-titre */}
        <p className="text-xl text-white/90 mb-10 drop-shadow-sm">
          Gestion complète de vos bancs d'essai
        </p>

        {/* Bouton */}
        <Link
          to="/login"
          className="inline-block px-20 py-4 text-[#E30613] rounded-lg bg-white hover:bg-white/75 transition-all duration-300 shadow-md hover:shadow-xl font-medium"
        >
          Accéder à la plateforme
        </Link>

      </div>
    </div>
  );
}