"use client"

import { Metadata } from 'next'
import Image from 'next/image'
import styles from './styles.module.css'
import React, { useState } from 'react';



export default function Home() {

  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isChecked) {
      window.location.href = 'https://tech-base.net/tb-250013/M-6(%E7%AC%AC%E5%9B%9B%E5%BC%BE)/app/login.php';
    }
  };

  return (
  <>
  <title>利用規約</title>
  <body>
    <div className={styles.container}>
      <h1>利用規約</h1>
      <div className={styles.content}>
      <div className={styles.scrollablecontent}>
        
    この利用規約（以下、「本規約」といいます。）は、Mission_6-1（以下、「当サイト」といいます。）がこのウェブサイト上で提供するサービス（以下、「本サービス」といいます。）の利用条件を定めるものです。登録ユーザーの皆さま（以下、「ユーザー」といいます。）には、本規約に従って、本サービスをご利用いただきます。
<br/>
<h3>第1条（適用）</h3>
1.	本規約は、ユーザーと当サイトとの間の本サービスの利用に関わる一切の関係に適用されるものとします。<br/>
2.	当サイトは本サービスに関し、本規約のほか、ご利用にあたってのルール等、各種の定め（以下、「個別規定」といいます。）をすることがあります。これら個別規定はその名称のいかんに関わらず、本規約の一部を構成するものとします。<br/>
3.	本規約の規定が前条の個別規定の規定と矛盾する場合には、個別規定において特段の定めなき限り、個別規定の規定が優先されるものとします。<br/>

<h3>第2条（利用登録）</h3>
4.	本サービスにおいては、登録希望者が本規約に同意の上、当サイトの定める方法によって利用登録を申請し、当サイトがこの承認を登録希望者に通知することによって、利用登録が完了するものとします。<br/>
5.	当サイトは、利用登録の申請者に以下の事由があると判断した場合、利用登録の申請を承認しないことがあり、その理由については一切の開示義務を負わないものとします。 <br/>
a.	利用登録の申請に際して虚偽の事項を届け出た場合<br/>
b.	本規約に違反したことがある者からの申請である場合<br/>
c.	その他、当サイトが利用登録を相当でないと判断した場合<br/>

<h3>第3条（ユーザーIDおよびパスワードの管理）</h3>
6.	ユーザーは、自己の責任において、本サービスのユーザーIDおよびパスワードを適切に管理するものとします。<br/>
7.	ユーザーは、いかなる場合にも、ユーザーIDおよびパスワードを第三者に譲渡または貸与し、もしくは第三者と共用することはできません。当サイトは、ユーザーIDとパスワードの組み合わせが登録情報と一致してログインされた場合には、そのユーザーIDを登録しているユーザー自身による利用とみなします。<br/>
8.	ユーザーID及びパスワードが第三者によって使用されたことによって生じた損害は、当サイトに故意又は重大な過失がある場合を除き、当サイトは一切の責任を負わないものとします。<br/>

<h3>第4条（利用料金および支払方法）</h3>
9.	ユーザーは、本サービスの有料部分の対価として、当サイトが別途定め、本ウェブサイトに表示する利用料金を、当サイトが指定する方法により支払うものとします。<br/>
10.	ユーザーが利用料金の支払を遅滞した場合には、ユーザーは年14．6％の割合による遅延損害金を支払うものとします。<br/>

<h3>第5条（禁止事項）</h3>
ユーザーは、本サービスの利用にあたり、以下の行為をしてはなりません。<br/>
11.	法令または公序良俗に違反する行為<br/>
12.	犯罪行為に関連する行為<br/>
13.	当サイト、本サービスの他のユーザー、または第三者のサーバーまたはネットワークの機能を破壊したり、妨害したりする行為<br/>
14.	当サイトのサービスの運営を妨害するおそれのある行為<br/>
15.	他のユーザーに関する個人情報等を収集または蓄積する行為<br/>
16.	不正アクセスをし、またはこれを試みる行為<br/>
17.	他のユーザーに成りすます行為<br/>
18.	当サイトのサービスに関連して、反社会的勢力に対して直接または間接に利益を供与する行為<br/>
19.	当サイト、本サービスの他のユーザーまたは第三者の知的財産権、肖像権、プライバシー、名誉その他の権利または利益を侵害する行為<br/>
20.	以下の表現を含み、または含むと当サイトが判断する内容を本サービス上に投稿し、または送信する行為 <br/>
a.	過度に暴力的な表現<br/>
b.	露骨な性的表現<br/>
c.	人種、国籍、信条、性別、社会的身分、門地等による差別につながる表現<br/>
d.	自殺、自傷行為、薬物乱用を誘引または助長する表現<br/>
e.	その他反社会的な内容を含み他人に不快感を与える表現<br/>
21.	以下を目的とし、または目的とすると当サイトが判断する行為 <br/>
a.	営業、宣伝、広告、勧誘、その他営利を目的とする行為（当サイトの認めたものを除きます。）<br/>
b.	性行為やわいせつな行為を目的とする行為<br/>
c.	面識のない異性との出会いや交際を目的とする行為<br/>
d.	他のユーザーに対する嫌がらせや誹謗中傷を目的とする行為<br/>
e.	当サイト、本サービスの他のユーザー、または第三者に不利益、損害または不快感を与えることを目的とする行為<br/>
f.	その他本サービスが予定している利用目的と異なる目的で本サービスを利用する行為<br/>
22.	宗教活動または宗教団体への勧誘行為<br/>
23.	その他、当サイトが不適切と判断する行為<br/>

<h3>第6条（本サービスの提供の停止等）</h3>
24.	当サイトは、以下のいずれかの事由があると判断した場合等、ユーザーに事前に通知することなく本サービスの全部または一部の提供を停止または中断することができるものとします。 <br/>
a.	本サービスにかかるコンピュータシステムの保守点検または更新を行う場合<br/>
b.	地震、落雷、火災、停電または天災などの不可抗力により、本サービスの提供が困難となった場合<br/>
c.	コンピュータまたは通信回線等が事故により停止した場合<br/>
d.	その他、当サイトが本サービスの提供が困難と判断した場合<br/>
25.	当サイトは、本サービスの提供の停止または中断により、ユーザーまたは第三者が被ったいかなる不利益または損害についても、一切の責任を負わないものとします。<br/>

<h3>第7条（著作権）</h3>
26.	ユーザーは、自ら著作権等の必要な知的財産権を有するか、または必要な権利者の許諾を得た文章、画像や映像等の情報に関してのみ、本サービスを利用し、投稿ないしアップロードすることができるものとします。<br/>
27.	ユーザーが本サービスを利用して投稿ないしアップロードした文章、画像、映像等の著作権については、当該ユーザーその他既存の権利者に留保されるものとします。ただし、当サイトは、本サービスを利用して投稿ないしアップロードされた文章、画像、映像等について、本サービスの改良、品質の向上、または不備の是正等ならびに本サービスの周知宣伝等に必要な範囲で利用できるものとし、ユーザーは、この利用に関して、著作者人格権を行使しないものとします。<br/>
28.	前項本文の定めるものを除き、本サービスおよび本サービスに関連する一切の情報についての著作権およびその他の知的財産権はすべて当サイトまたは当サイトにその利用を許諾した権利者に帰属し、ユーザーは無断で複製、譲渡、貸与、翻訳、改変、転載、公衆送信（送信可能化を含みます。）、伝送、配布、出版、営業使用等をしてはならないものとします。<br/>

<h3>第8条（利用制限および登録抹消）</h3>
29.	当サイトは、ユーザーが以下のいずれかに該当する場合には、事前の通知なく、投稿データを削除し、ユーザーに対して本サービスの全部もしくは一部の利用を制限しまたはユーザーとしての登録を抹消することができるものとします。 <br/>
a.	本規約のいずれかの条項に違反した場合<br/>
b.	登録事項に虚偽の事実があることが判明した場合<br/>
c.	決済手段として当該ユーザーが届け出たクレジットカードが利用停止となった場合<br/>
d.	料金等の支払債務の不履行があった場合<br/>
e.	当サイトからの連絡に対し、一定期間返答がない場合<br/>
f.	本サービスについて、最終の利用から一定期間利用がない場合<br/>
g.	その他、当サイトが本サービスの利用を適当でないと判断した場合<br/>
30.	前項各号のいずれかに該当した場合、ユーザーは、当然に当サイトに対する一切の債務について期限の利益を失い、その時点において負担する一切の債務を直ちに一括して弁済しなければなりません。<br/>
31.	当サイトは、本条に基づき当サイトが行った行為によりユーザーに生じた損害について、一切の責任を負いません。<br/>

<h3>第9条（退会）</h3>
ユーザーは、当サイトの定める退会手続により、本サービスから退会できるものとします。<br/>

<h3>第10条（保証の否認および免責事項）</h3>
32.	当サイトは、本サービスに事実上または法律上の瑕疵（安全性、信頼性、正確性、完全性、有効性、特定の目的への適合性、セキュリティなどに関する欠陥、エラーやバグ、権利侵害などを含みます。）がないことを明示的にも黙示的にも保証しておりません。<br/>
33.	当サイトは、本サービスに起因してユーザーに生じたあらゆる損害について一切の責任を負いません。ただし、本サービスに関する当サイトとユーザーとの間の契約（本規約を含みます。）が消費者契約法に定める消費者契約となる場合、この免責規定は適用されません。<br/>
34.	前項ただし書に定める場合であっても、当サイトは、当サイトの過失（重過失を除きます。）による債務不履行または不法行為によりユーザーに生じた損害のうち特別な事情から生じた損害（当サイトまたはユーザーが損害発生につき予見し、または予見し得た場合を含みます。）について一切の責任を負いません。また、当サイトの過失（重過失を除きます。）による債務不履行または不法行為によりユーザーに生じた損害の賠償は、ユーザーから当該損害が発生した月に受領した利用料の額を上限とします。<br/>
35.	当サイトは、本サービスに関して、ユーザーと他のユーザーまたは第三者との間において生じた取引、連絡または紛争等について一切責任を負いません。<br/>

<h3>第11条（サービス内容の変更等）</h3>
36. 当サイトは、ユーザーに通知することなく、本サービスの内容を変更しまたは本サービスの提供を中止することができるものとし、これによってユーザーに生じた損害について一切の責任を負いません。<br/>

<h3>第12条（利用規約の変更）</h3>
37. 当サイトは、必要と判断した場合には、ユーザーに通知することなくいつでも本規約を変更することができるものとします。なお、本規約の変更後、本サービスの利用を開始した場合には、当該ユーザーは変更後の規約に同意したものとみなします。<br/>

<h3>第13条（個人情報の取扱い）</h3>
38. 当サイトは、本サービスの利用によって取得する個人情報については、当サイト「プライバシーポリシー」に従い適切に取り扱うものとします。<br/>

<h3>第14条（通知または連絡</h3>
39. ユーザーと当サイトとの間の通知または連絡は、当サイトの定める方法によって行うものとします。当サイトは,ユーザーから,当サイトが別途定める方式に従った変更届け出がない限り,現在登録されている連絡先が有効なものとみなして当該連絡先へ通知または連絡を行い,これらは,発信時にユーザーへ到達したものとみなします。<br/>

<h3>第15条（権利義務の譲渡の禁止）</h3>
40. ユーザーは、当サイトの書面による事前の承諾なく、利用契約上の地位または本規約に基づく権利もしくは義務を第三者に譲渡し、または担保に供することはできません。<br/>

<h3>第17条（免責事項）</h3>
<p>41. 当サイトは、ユーザーによる利用者の個人情報の不正アクセスや漏洩について一切の責任を負いません。</p>

<h3>第18条 （クッキーの使用）</h3>
42. 当サイトは、利用者の利便性向上やサイトの機能向上のために、クッキーを使用する場合があります。クッキーによって収集される情報は、匿名の形式で利用されます。

<h3>第19条（準拠法・裁判管轄）</h3>
43.	本規約の解釈にあたっては、日本法を準拠法とします。<br/>
44.	本サービスに関して紛争が生じた場合には、当サイトの本店所在地を管轄する裁判所を専属的合意管轄とします。<br/>
以上<br/>

</div>
</div>
      </div>
      <div className={styles.agreement}>
      <form method="post" onSubmit={handleSubmit}>
      <input type="checkbox" id="agreement-checkbox" name="agreement-checkbox" checked={isChecked} onChange={handleCheckboxChange} />
      <label htmlFor="agreement-checkbox">利用規約に同意する</label><br/>
      <button type="submit" id="accept-button" name="accept-button">同意する</button>
    </form>
    </div>
      
</body>
    </>
  )
}
