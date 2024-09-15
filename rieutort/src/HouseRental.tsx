import React from 'react';
import { Mail } from 'lucide-react';

interface HouseRentalProps {
  images: string[];
}

export const HouseRental: React.FC<HouseRentalProps> = ({ images }) => {

  const contactEmail = atob('cC5qZWhhbm5vQHdhbmFkb28uZnI='); // address papa wanadoo
  const handleEmailClick = () => {
    const subject = encodeURIComponent(`Location Rieutort, Puyvalador`);
    const body = encodeURIComponent(`Je suis interessé par la location de votre maison située à Rieutort, Puyvalador.`);
    window.location.href = `mailto:${contactEmail}?subject=${subject}&body=${body}`;
  };

  return (
    <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="space-y-4">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`House image ${index + 1}`}
            className="w-full h-80 object-cover"
          />
        ))}
      </div>
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-2">Charmante maison familiale à Rieutort Puyvalador - 4 chambres, cheminée, vue panoramique</h2>
        <p className="text-gray-600 mb-4">Rieutort, Puyvalador</p>
        <p className="text-gray-700 mb-4">Découvrez cette magnifique maison située dans le pittoresque village de Rieutort Puyvalador, parfaite pour des vacances reposantes en famille ou entre amis. Cette propriété spacieuse et lumineuse offre tout le confort nécessaire pour un séjour agréable.</p>

        <div className="text-gray-700 mb-4">
          <ul className="list-disc ml-4">
            <li className="mb-2"><b>4 chambres</b> confortables pouvant accueillir jusqu'à 8 personnes.</li>
            <li className="mb-2"><b>Grande salle à manger</b> ouverte avec une baie vitrée, offrant une vue imprenable sur les montagnes environnantes. Un espace idéal pour partager des repas en toute convivialité.</li>
            <li className="mb-2"><b>Salon chaleureux</b> équipé d'une belle cheminée, parfait pour se détendre après une journée d'activités en plein air.</li>
            <li className="mb-2"><b>Cuisine moderne et entièrement équipée</b>, comprenant tout le nécessaire pour préparer vos repas : four, plaques de cuisson au gaz, réfrigérateur</li>
            <li className="mb-2"><b>2 salles de bains</b> pour plus de confort et de praticité, équipées de douches.</li>
          </ul>
        </div>

        <p className="text-xl font-semibold mb-4">XXXX € la nuit</p>

        <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />

        <div className="text-gray-700 mb-4">
          <div className="mapouter">
            <div className="gmap_canvas">
              <iframe className="gmap_iframe" frameBorder="0" scrolling="no" marginHeight={0} marginWidth={0} src="https://maps.google.com/maps?width=600&height=400&hl=en&q=rieutort puyvalador&t=&z=10&ie=UTF8&iwloc=B&output=embed"></iframe>
            </div>
          </div>
        </div>

        <div className="grid justify-items-center">
          <button
            onClick={handleEmailClick}
            className="mb-2 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-sky-600 hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            <Mail className="mr-2 h-4 w-4" />
            Contacter la famille
          </button>
          <label>p.jehanno [arobase] wanadoo.fr</label>
        </div>
      </div>
    </div>
  );
};