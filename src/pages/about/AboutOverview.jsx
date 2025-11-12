function AboutOverview() {
  return (
    <div className="about-panel">
      <h2>Pourquoi React Router ?</h2>
      <p>
        React Router vous permet de déclarer la structure de navigation de votre
        application directement dans vos composants. Avec les routes imbriquées, vous
        pouvez facilement afficher différentes vues tout en conservant des parties de
        l&apos;interface partagées, comme ce layout.
      </p>
      <p>
        La balise <code>Outlet</code> rend le composant enfant correspondant à la route
        active. Ici, elle affiche soit cette présentation, soit la page de l&apos;équipe en
        fonction du lien sélectionné.
      </p>
    </div>
  )
}

export default AboutOverview

