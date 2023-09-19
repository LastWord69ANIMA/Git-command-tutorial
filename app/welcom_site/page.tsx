

import { Metadata } from 'next'
import Link from 'next/link'
import styles from './styles.module.css'
 

export const metadata: Metadata = {
  title: 'welcome_page!!',
}

export default function Page() {
    return (
    <>
    <header className={styles.header}>
      <h1>ようこそ、Mission6-1へ。</h1>
    </header>
    <nav className={styles.nav}>
        <ul>
        <li><Link href="https://tech-base.net/tb-250009/m6/login_form.php">メンバー1作成</Link></li>
        <li><Link href="https://tech-base.net/tb-250010/mission6/login.php">メンバー2作成</Link></li>
        <li><Link href="https://tech-base.net/tb-250016/m5/m5-101.php">メンバー3作成</Link></li>
        <li><Link href="https://tech-base.net/tb-250014/mission5/m5-01.php">メンバー4作成</Link></li>
        <li><Link href="https://tech-base.net/tb-250013/M-6(%E7%AC%AC%E5%9B%9B%E5%BC%BE)/app/Mission_6-1.php">本ページへ</Link></li>
        <li><Link href="https://tech-base.net/tb-250013/M-6(%E7%AC%AC%E5%9B%9B%E5%BC%BE)/app/main.php">スレッド作成ページへ</Link></li>
        <li><Link href="https://tech-base.net/tb-250013/M-6(%E7%AC%AC%E5%9B%9B%E5%BC%BE)/app/main_sub.php">スレッド一覧へ</Link></li>
        </ul>
    </nav>
    <main className={styles.main}>
        <section id="section1">
            <h2>謝辞</h2>
            <p>以上のサイトはインターンでのメンバーが作成した掲示板サイトです。</p>
            <p>私の身勝手なお願いを了承してくださったメンバー及び共にインターンへ取り組んだ皆様ありがとうございました。</p>
            <p>インターン先とのサーバー貸与期間が切れた場合、ここにある掲示板は全て閲覧できなくなります。ご了承ください。</p>
        </section>
        <section id="section2">
            <h2>説明</h2>
            <p>メンバー○○以外は私が作成したサイトです。本ページとありますが、その先は掲示板となっています。一応そこがメインページみたいなものです。</p>
        </section>
    </main>
    <footer className={styles.footer}>
        <p>Copyright ©Lastword69ANIMA ※著作権はありませんが、一応ここに記録。</p>
    </footer>
        </>
    )
  }

