import  styles from './styles.module.css'
 
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
    <html lang="ja">
    <body className={styles.body}>{children}</body>
    </html>
    </>
  )
}