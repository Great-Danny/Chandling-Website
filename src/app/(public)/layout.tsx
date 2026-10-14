import { MainNav } from '@/components/navigation/main-nav'
import { Footer } from '@/components/navigation/footer'

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <MainNav />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </>
  )
}
