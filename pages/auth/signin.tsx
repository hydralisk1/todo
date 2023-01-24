import { GetServerSideProps } from "next"
import { getProviders, signIn } from "next-auth/react"

export default function SignIn({ providers }:{ providers: typeof getProviders }) {
  return (
    <>
      {Object.values(providers).map((provider) => (
        <div key={provider.name}>
          <button onClick={() => signIn(provider?.id)}>
            Sign in with {provider.name}
          </button>
        </div>
      ))}
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const providers = await getProviders()
  return {
    props: { providers },
  }
}

// export async function getServerSideProps: GetServerSideProps<{
//   session: Session | null,
// }> = async (context) => {
//   const providers = await getProviders()
//   return {
//     props: { providers },
//   }
// }
