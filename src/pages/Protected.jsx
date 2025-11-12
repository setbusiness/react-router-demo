import { useMemo } from 'react'

function ProtectedPage() {
  const token = useMemo(
    () => (typeof window !== 'undefined' ? window.localStorage.getItem('token') : null),
    [],
  )

  return (
    <section className="content-card protected-card">
      <h1>Section protégée</h1>
      <p>
        Félicitations ! Vous voyez cette page parce qu&apos;un token est présent dans le{' '}
        <code>localStorage</code>.
      </p>
      <p>
        Dans une application réelle, vous pourriez vérifier ce token auprès d&apos;une API sécurisée
        avant d&apos;afficher des données sensibles.
      </p>
      <div className="token-preview">
        <span>Token actuel :</span>
        <code>{token}</code>
      </div>
    </section>
  )
}

export default ProtectedPage

