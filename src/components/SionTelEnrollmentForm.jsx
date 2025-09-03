import React, { useState } from "react";

// SionTel - Enrollment / Pre-registration Form
// UI/UX amélioré avec design moderne et professionnel
// Colors: green (#2EA24A) and blue (#36B4E6)

export default function SionTelEnrollmentForm() {
  const COLORS = {
    primary: "#2EA24A",
    accent: "#36B4E6",
  };

  const initial = {
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    birthDate: "",
    city: "",
    education: "",
    languages: [],
    terms: false,
  };

  const [form, setForm] = useState(initial);
  const [submitting, setSubmitting] = useState(false);
  const [errors, setErrors] = useState({});

  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox" && name === "languages") {
      const lang = value;
      setForm((s) => ({
        ...s,
        languages: checked ? [...s.languages, lang] : s.languages.filter((l) => l !== lang),
      }));
      return;
    }

    if (type === "checkbox") {
      setForm((s) => ({ ...s, [name]: checked }));
      return;
    }

    setForm((s) => ({ ...s, [name]: value }));
  }

  function handleFile(name, file) {
    setForm((s) => ({ ...s, [name]: file }));
  }

  function validate() {
    const e = {};
    if (!form.firstName) e.firstName = "Prénom requis";
    if (!form.lastName) e.lastName = "Nom requis";
    if (!form.phone && !form.email) e.contact = "Téléphone ou email requis";
    if (!form.birthDate) e.birthDate = "Date de naissance requise";
    if (!form.terms) e.terms = "Vous devez accepter les conditions";
    return e;
  }

  async function handleSubmit(evt) {
    evt.preventDefault();
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length) return;

    setSubmitting(true);

    // Example payload - adapt to your backend
    const payload = new FormData();
    Object.keys(form).forEach((k) => {
      if (form[k] === null) return;
      if (form[k] instanceof File) payload.append(k, form[k]);
      else if (Array.isArray(form[k])) payload.append(k, JSON.stringify(form[k]));
      else payload.append(k, form[k]);
    });

    // Simulate network request
    setTimeout(() => {
      setSubmitting(false);
      alert("Pré-inscription enregistrée !\nVérifiez votre email pour confirmation.");
      console.log("Payload (debug)");
      for (let pair of payload.entries()) console.log(pair[0], pair[1]);
      setForm(initial);
    }, 900);
  }

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
              <button onClick={() => window.location.hash = '#'} className="text-primary font-bold hover:text-green-600 transition-colors">Accueil</button>
              <button onClick={() => window.location.hash = '#formations'} className="hover:text-primary transition-colors">Formations</button>
              <a href="https://siontelgroupe.com/about-us/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">À propos</a>
              <a href="https://siontelgroupe.com/contact/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      <div className="py-8 px-4">
      <div className="w-full max-w-5xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden">
        {/* Header avec gradient */}
        <header className="bg-gradient-to-r from-primary to-accent p-8 text-white">
          <div className="flex items-center gap-6">
            {/* Logo SionTel */}
            <img 
              src="/assets/siontel-logo.jpg" 
              alt="SionTel Logo" 
              className="h-20 w-auto bg-white rounded-xl p-2 shadow-lg"
            />
            <div>
              <h1 className="text-3xl font-bold mb-2">Pré-inscription — Formation Relation Client</h1>
              <p className="text-blue-100 text-lg">SionTel — Centre d'appel, télémarketing & formation</p>
            </div>
          </div>
        </header>

        <div className="p-8">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Section Informations personnelles */}
            <section className="bg-gray-50 rounded-2xl p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-6 flex items-center">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white text-sm font-bold mr-3">1</div>
                Informations personnelles
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Prénom *</label>
                  <input 
                    name="firstName" 
                    value={form.firstName} 
                    onChange={handleChange} 
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-primary focus:outline-none transition-colors duration-200" 
                    placeholder="Votre prénom"
                  />
                  {errors.firstName && <p className="text-sm text-red-500 mt-1">{errors.firstName}</p>}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Nom *</label>
                  <input 
                    name="lastName" 
                    value={form.lastName} 
                    onChange={handleChange} 
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-primary focus:outline-none transition-colors duration-200" 
                    placeholder="Votre nom"
                  />
                  {errors.lastName && <p className="text-sm text-red-500 mt-1">{errors.lastName}</p>}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Date de naissance *</label>
                  <input 
                    type="date" 
                    name="birthDate" 
                    value={form.birthDate} 
                    onChange={handleChange} 
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-primary focus:outline-none transition-colors duration-200" 
                  />
                  {errors.birthDate && <p className="text-sm text-red-500 mt-1">{errors.birthDate}</p>}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Ville</label>
                  <input 
                    name="city" 
                    value={form.city} 
                    onChange={handleChange} 
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-primary focus:outline-none transition-colors duration-200" 
                    placeholder="Votre ville"
                  />
                </div>
              </div>
            </section>

            {/* Section Contact */}
            <section className="bg-blue-50 rounded-2xl p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-6 flex items-center">
                <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center text-white text-sm font-bold mr-3">2</div>
                Contact & Formation
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Téléphone</label>
                  <input 
                    name="phone" 
                    value={form.phone} 
                    onChange={handleChange} 
                    placeholder="+229 6X XX XX XX" 
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-accent focus:outline-none transition-colors duration-200" 
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
                  <input 
                    type="email" 
                    name="email" 
                    value={form.email} 
                    onChange={handleChange} 
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-accent focus:outline-none transition-colors duration-200" 
                    placeholder="votre@email.com"
                  />
                </div>

                <div className="md:col-span-2">
                  {errors.contact && <p className="text-sm text-red-500 mb-2">⚠️ {errors.contact}</p>}
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Niveau d'études</label>
                  <select 
                    name="education" 
                    value={form.education} 
                    onChange={handleChange} 
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-accent focus:outline-none transition-colors duration-200"
                  >
                    <option value="">-- Sélectionner --</option>
                    <option>Primaire</option>
                    <option>Collège</option>
                    <option>Lycée/Bac</option>
                    <option>BTS/DUT</option>
                    <option>Licence</option>
                    <option>Master et plus</option>
                  </select>
                </div>
              </div>
            </section>

            {/* Section Langues */}
            <section className="bg-green-50 rounded-2xl p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-6 flex items-center">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white text-sm font-bold mr-3">3</div>
                Langues parlées
              </h2>
              <div className="grid grid-cols-1 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">Sélectionnez toutes les langues que vous parlez</label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {['Français', 'Anglais', 'Fon', 'Goun', 'Yoruba', 'Dendi', 'Bariba', 'Portugais', 'Espagnol'].map((l) => (
                      <label key={l} className="flex items-center space-x-3 p-3 bg-white rounded-lg border-2 border-gray-200 hover:border-primary transition-colors cursor-pointer">
                        <input 
                          type="checkbox" 
                          name="languages" 
                          value={l} 
                          checked={form.languages.includes(l)} 
                          onChange={handleChange} 
                          className="w-4 h-4 text-primary focus:ring-primary border-gray-300 rounded"
                        />
                        <span className="text-sm font-medium">{l}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Section Conditions */}
            <section className="bg-gray-100 rounded-2xl p-6">
              <div className="space-y-4">
                <label className="flex items-start space-x-3 cursor-pointer">
                  <input 
                    type="checkbox" 
                    name="terms" 
                    checked={form.terms} 
                    onChange={handleChange} 
                    className="w-5 h-5 text-primary focus:ring-primary border-gray-300 rounded mt-1"
                  />
                  <div className="text-sm">
                    <span className="font-semibold text-gray-700">
                      J'accepte les <a className="text-primary underline hover:text-green-600" href="#">conditions de formation</a> et la <a className="text-primary underline hover:text-green-600" href="#">politique de confidentialité</a>. *
                    </span>
                    {errors.terms && <p className="text-red-500 mt-1">{errors.terms}</p>}
                  </div>
                </label>
              </div>
            </section>

            {/* Bouton de soumission */}
            <div className="flex flex-col items-center gap-4 pt-4">
              <button 
                type="submit" 
                disabled={submitting} 
                className="w-full md:w-auto px-8 py-4 bg-gradient-to-r from-primary to-accent text-white font-bold text-lg rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 disabled:opacity-50 disabled:transform-none"
              >
                {submitting ? (
                  <span className="flex items-center justify-center">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                    Enregistrement en cours...
                  </span>
                ) : (
                  'Soumettre ma pré-inscription 🚀'
                )}
              </button>
              <div className="text-sm text-gray-500 text-center">
                <p>Les champs marqués * sont obligatoires.</p>
                <p className="text-xs mt-1">Vos données sont sécurisées et confidentielles.</p>
              </div>
            </div>
          </form>

          <footer className="mt-8 pt-6 border-t border-gray-200 text-center">
            <p className="text-sm text-gray-500">© 2025 SionTel — Centre d'appel & Formation</p>
            <p className="text-xs text-gray-400 mt-1">Votre partenaire pour une carrière réussie dans la relation client</p>
          </footer>
        </div>
      </div>
      </div>
    </div>
  );
}
