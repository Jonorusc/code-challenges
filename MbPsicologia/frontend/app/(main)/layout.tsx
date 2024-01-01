export const metadata = {
  title: 'Desafio-JoãoLucas',
  description:
    'This is my technical exam for the web developer position at MBPsicologia',
  openGraph: {
    type: 'website',
    url: 'https://www.linkedin.com/in/jaum-lu/',
    images: [
      {
        url: 'https://res.cloudinary.com/jaumlu/image/upload/v1688753296/y2xixoqgvt3zdkhkhl3s.png',
        alt: 'DevByLucas'
      }
    ]
  }
}
export default function MainLayoyt({
  children
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
