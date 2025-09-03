# SionTel - Formulaire d'Inscription

Application React moderne pour le formulaire de pré-inscription aux formations de relation client de SionTel.

![SionTel Logo](public/assets/siontel-logo.jpg)

## 🚀 Fonctionnalités

- **Formulaire d'inscription** complet et simplifié
- **Page formations** avec modules spécialisés centre d'appel
- **Design responsive** avec Tailwind CSS
- **Navigation fluide** entre les pages
- **Validation** des champs obligatoires
- **UI/UX moderne** avec animations et transitions
- **Langues locales** du Bénin intégrées

## 🛠️ Technologies

- **React 18** - Framework JavaScript
- **Vite** - Build tool rapide
- **Tailwind CSS** - Framework CSS utilitaire
- **PostCSS** - Traitement CSS

## 📋 Pages

### Page d'accueil (Formulaire)
- Formulaire de pré-inscription simplifié
- Champs essentiels : nom, prénom, contact, date de naissance, ville, éducation, langues
- Validation en temps réel
- Design moderne avec gradient et sections colorées

### Page Formations
- 6 modules de formation spécialisés :
  - 📞 Relation Client & Télémarketing
  - 💬 Support Client Multicanal
  - 💻 Maîtrise des Outils CRM
  - 🌍 Anglais Commercial
  - ⭐ Qualité & Performance
  - 👥 Management d'Équipe

## 🎨 Design

- **Couleurs de marque** : Vert (#2EA24A) et Bleu (#36B4E6)
- **Logo SionTel** intégré
- **Navigation professionnelle** avec header fixe
- **Responsive design** pour mobile et desktop
- **Animations** et transitions fluides

## 📁 Structure du Projet

```
src/
├── components/
│   ├── SionTelEnrollmentForm.jsx  # Formulaire principal
│   └── FormationsPage.jsx         # Page formations
├── App.jsx                        # Routage simple
├── main.jsx                       # Point d'entrée
└── index.css                      # Styles Tailwind

public/
└── assets/
    └── siontel-logo.jpg          # Logo officiel

```

## 🚀 Installation et Développement

### Prérequis
- Node.js (version 16+)
- npm ou yarn

### Installation
```bash
# Cloner le repository
git clone https://github.com/[votre-username]/formulaire-sion.git

# Installer les dépendances
cd formulaire-sion
npm install
```

### Développement
```bash
# Lancer le serveur de développement
npm run dev

# Le projet sera accessible sur http://localhost:5173
```

### Build Production
```bash
# Construire pour la production
npm run build

# Prévisualiser le build
npm run preview
```

## 🌐 Navigation

- **Accueil** : Formulaire d'inscription principal
- **Formations** : Catalogue des formations disponibles
- **À propos** : Lien vers https://siontelgroupe.com/about-us/
- **Contact** : Lien vers https://siontelgroupe.com/contact/

## 📱 Responsive

L'application est entièrement responsive et optimisée pour :
- 📱 Mobile (320px+)
- 📱 Tablette (768px+)
- 💻 Desktop (1024px+)

## 🌍 Langues Supportées

**Internationales :**
- Français
- Anglais
- Portugais
- Espagnol

**Locales (Bénin) :**
- Fon
- Goun
- Yoruba
- Dendi
- Bariba

## 🔧 Configuration

Les couleurs de la marque sont configurées dans `tailwind.config.js` :

```javascript
theme: {
  extend: {
    colors: {
      primary: '#2EA24A',  // Vert SionTel
      accent: '#36B4E6',   // Bleu SionTel
    }
  }
}
```

## 📄 Licence

© 2025 SionTel — Centre d'appel & Formation

## 🤝 Contribution

Pour contribuer au projet :
1. Fork le repository
2. Créer une branche feature (`git checkout -b feature/AmazingFeature`)
3. Commit vos changements (`git commit -m 'Add some AmazingFeature'`)
4. Push sur la branche (`git push origin feature/AmazingFeature`)
5. Ouvrir une Pull Request

## 📞 Support

Pour toute question ou support :
- Site web : https://siontelgroupe.com
- Email : contact@siontelgroupe.com
