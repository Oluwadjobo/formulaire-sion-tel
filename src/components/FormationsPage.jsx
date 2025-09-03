import React from 'react';

export default function FormationsPage() {
  const COLORS = {
    primary: "#2EA24A",
    accent: "#36B4E6",
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-green-50">
      {/* Header de navigation */}
      <nav className="bg-white shadow-md border-b-4 border-primary">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <img 
                src="/assets/siontel-logo.jpg" 
                alt="SionTel" 
                className="h-12 w-auto"
              />
              <div>
                <h2 className="text-xl font-bold text-gray-800">SionTel</h2>
                <p className="text-sm text-gray-600">Centre d'appel & Formation</p>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-6 text-sm font-medium text-gray-700">
              <button onClick={() => window.location.hash = '#'} className="hover:text-primary transition-colors">Accueil</button>
              <button onClick={() => window.location.hash = '#formations'} className="text-primary font-bold">Formations</button>
              <a href="https://siontelgroupe.com/about-us/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">À propos</a>
              <a href="https://siontelgroupe.com/contact/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      <div className="py-12 px-4">
        {/* Section Formations */}
        <section className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-gray-800 mb-6">Nos Formations Centre d'Appel</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Développez vos compétences en relation client avec nos programmes de formation adaptés aux besoins du marché béninois et international.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {/* Formation 1 - Relation Client */}
            <div className="bg-white rounded-2xl shadow-lg p-6 border-l-4 border-primary hover:shadow-xl transition-shadow">
              <div className="text-3xl mb-4">📞</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Relation Client & Télémarketing</h3>
              <p className="text-gray-600 mb-4">Formation complète pour maîtriser les techniques de communication client et de vente par téléphone.</p>
              <ul className="text-sm text-gray-700 space-y-2 mb-4">
                <li>• Accueil téléphonique professionnel</li>
                <li>• Techniques de vente et de négociation</li>
                <li>• Gestion des objections</li>
                <li>• Fidélisation client</li>
              </ul>
              <div className="flex justify-between items-center">
                <span className="text-primary font-bold">Durée: 4 semaines</span>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Populaire</span>
              </div>
            </div>

            {/* Formation 2 - Support Client */}
            <div className="bg-white rounded-2xl shadow-lg p-6 border-l-4 border-accent hover:shadow-xl transition-shadow">
              <div className="text-3xl mb-4">💬</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Support Client Multicanal</h3>
              <p className="text-gray-600 mb-4">Apprenez à gérer le support client via téléphone, email, chat et réseaux sociaux.</p>
              <ul className="text-sm text-gray-700 space-y-2 mb-4">
                <li>• Support téléphonique avancé</li>
                <li>• Gestion des emails clients</li>
                <li>• Chat en temps réel</li>
                <li>• Réseaux sociaux professionnels</li>
              </ul>
              <div className="flex justify-between items-center">
                <span className="text-accent font-bold">Durée: 3 semaines</span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Nouveau</span>
              </div>
            </div>

            {/* Formation 3 - CRM */}
            <div className="bg-white rounded-2xl shadow-lg p-6 border-l-4 border-orange-500 hover:shadow-xl transition-shadow">
              <div className="text-3xl mb-4">💻</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Maîtrise des Outils CRM</h3>
              <p className="text-gray-600 mb-4">Formation pratique sur les logiciels de gestion de la relation client les plus utilisés.</p>
              <ul className="text-sm text-gray-700 space-y-2 mb-4">
                <li>• Navigation dans les CRM</li>
                <li>• Saisie et mise à jour des données</li>
                <li>• Génération de rapports</li>
                <li>• Suivi des performances</li>
              </ul>
              <div className="flex justify-between items-center">
                <span className="text-orange-500 font-bold">Durée: 2 semaines</span>
                <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm">Technique</span>
              </div>
            </div>

            {/* Formation 4 - Langues */}
            <div className="bg-white rounded-2xl shadow-lg p-6 border-l-4 border-purple-500 hover:shadow-xl transition-shadow">
              <div className="text-3xl mb-4">🌍</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Anglais Commercial</h3>
              <p className="text-gray-600 mb-4">Perfectionnez votre anglais pour les appels internationaux et élargissez vos opportunités.</p>
              <ul className="text-sm text-gray-700 space-y-2 mb-4">
                <li>• Vocabulaire commercial</li>
                <li>• Accent et prononciation</li>
                <li>• Expressions téléphoniques</li>
                <li>• Rédaction d'emails</li>
              </ul>
              <div className="flex justify-between items-center">
                <span className="text-purple-500 font-bold">Durée: 6 semaines</span>
                <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">International</span>
              </div>
            </div>

            {/* Formation 5 - Qualité */}
            <div className="bg-white rounded-2xl shadow-lg p-6 border-l-4 border-red-500 hover:shadow-xl transition-shadow">
              <div className="text-3xl mb-4">⭐</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Qualité & Performance</h3>
              <p className="text-gray-600 mb-4">Développez une approche qualité et apprenez à mesurer et améliorer vos performances.</p>
              <ul className="text-sm text-gray-700 space-y-2 mb-4">
                <li>• Standards de qualité</li>
                <li>• Indicateurs de performance</li>
                <li>• Amélioration continue</li>
                <li>• Gestion du stress</li>
              </ul>
              <div className="flex justify-between items-center">
                <span className="text-red-500 font-bold">Durée: 3 semaines</span>
                <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm">Performance</span>
              </div>
            </div>

            {/* Formation 6 - Leadership */}
            <div className="bg-white rounded-2xl shadow-lg p-6 border-l-4 border-indigo-500 hover:shadow-xl transition-shadow">
              <div className="text-3xl mb-4">👥</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Management d'Équipe</h3>
              <p className="text-gray-600 mb-4">Formation avancée pour devenir superviseur ou manager dans un centre d'appel.</p>
              <ul className="text-sm text-gray-700 space-y-2 mb-4">
                <li>• Leadership et motivation</li>
                <li>• Gestion d'équipe</li>
                <li>• Planification des ressources</li>
                <li>• Coaching et formation</li>
              </ul>
              <div className="flex justify-between items-center">
                <span className="text-indigo-500 font-bold">Durée: 5 semaines</span>
                <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm">Avancé</span>
              </div>
            </div>
          </div>

          {/* Avantages des formations */}
          <div className="bg-gradient-to-r from-primary to-accent rounded-2xl p-8 text-white mb-12">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold mb-4">Pourquoi choisir SionTel ?</h3>
              <p className="text-lg opacity-90">Des formations pratiques, un accompagnement personnalisé et des débouchés garantis</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-4xl mb-3">🎯</div>
                <h4 className="font-bold mb-2">Formation Pratique</h4>
                <p className="text-sm opacity-90">Mise en situation réelle avec nos partenaires</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-3">💼</div>
                <h4 className="font-bold mb-2">Placement Garanti</h4>
                <p className="text-sm opacity-90">85% de nos stagiaires trouvent un emploi</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-3">🏆</div>
                <h4 className="font-bold mb-2">Certification</h4>
                <p className="text-sm opacity-90">Diplôme reconnu par les entreprises</p>
              </div>
            </div>
          </div>

          {/* Call to action */}
          <div className="text-center bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Prêt à commencer votre formation ?</h3>
            <p className="text-gray-600 mb-6">Rejoignez-nous et transformez votre avenir professionnel</p>
            <button 
              onClick={() => window.location.hash = '#'}
              className="inline-block px-8 py-4 bg-gradient-to-r from-primary to-accent text-white font-bold text-lg rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 cursor-pointer"
            >
              S'inscrire maintenant 🚀
            </button>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-lg font-semibold mb-2">© 2025 SionTel — Centre d'appel & Formation</p>
          <p className="text-gray-400">Votre partenaire pour une carrière réussie dans la relation client</p>
        </div>
      </footer>
    </div>
  );
}
