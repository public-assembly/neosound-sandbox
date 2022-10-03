import { AuthCheck } from 'components'

function Auth() {
  return (
    <section id="auth-flow" className="flex flex-col gap-4">
      <div>
        <h1 className="text-xl mb-4">Auth Flow</h1>
        <hr className="border border-b-0 border-dashed" />
        <AuthCheck />
      </div>
    </section>
  );
}

export default Auth
