import './Footer.css'

function Footer(props) {
  return (
    <footer>
      <h1>アプリについて</h1>
      <div className="footer-ele">
        <h2>説明</h2>
        <p>基本的なメトロノームです。かわいいよね</p>
        <p>BPMは手で入力、スライダーで制御できます。40~218まで対応してます</p>
        <p>BEATのボタンは猫の動きの速さが変わります。音は変わらず4分音符です</p>
        <p>真ん中の「菜の花色」のボタンは猫の動きの再生・停止です。</p>
        <p>左の「山葵色」のボタンは音のミュートスイッチです。デフォルトでミュートです</p>
        <p>右の「桜色」のボタンはダークモードに入るボタンです。猫の様子が変わります</p>
        <p>ここに書いてないけど微妙に隠し機能入れました！探してみてね（スマホの人はすぐにわかるかも）</p>
        <p>謝罪：ごめんなさいー！
          リズムがあまり正確ではないし、実装が下手なので全体的に不安定です。
          猫かわいいでしょ？許して
        </p>

        <br />
        <h3>慣れている人向け</h3>
        <p>
          パソコンで見ている人はキーボード上で基本的な操作ができます。<br />
        </p>
        <code>Space</code>: 猫の動きの制御 <br />
        <code>b</code>: ミュートボタン <br />
        <code>n</code>: ダークモードボタン <br />
        <code>v</code>: BPMを下げる <br />
        <code>m</code>: BPMを上げる <br />


        <p>また、自作キーボードのREVIUNG5というキーボードで操作するとそれっぽくていい気分になります。</p>
        <p>遊舎工房さんで購入できます！以下キーボード購入ページのリンクです</p>
        <a href="https://shop.yushakobo.jp/products/consign_reviung5">REVIUNG5購入ページ</a>
        <p>その際のキーマップは上記のやつと合わせてください！QMKで編集できます。
        </p>
        <p>自分が作ったhexファイルは一応ここに置いて置きます。使う場合は落としてください</p>
        <p>
        <code>reviung5_Sheerlore.hex</code>というファイル名です。以下のリンクはGithubのページに飛びます
        </p>
        <a href="https://github.com/Sheerlore/reviung5_my_keymap/tree/main/for-norinori-cat">norinori-cat用hexファイル</a>
      </div>
      <div className="footer-ele">
        <h2>リンクなど</h2>
        <p>Twitter、Githubなどで気軽に意見ください!</p>
        <ul>
          <li>
            <a href="https://github.com/Sheerlore">Github</a>
          </li>
          <li>
            <a href="https://twitter.com/auaiyuma">Twitter</a>
          </li>
          <li>
            <a href="https://sheerlore.github.io/">他の作品の墓場</a>
          </li>
          <li>
            <a href="https://icons8.jp/">アイコン：https://icons8.jp/</a>
          </li>
        </ul>
      </div>
      <div className="footer-ele">
        <p>Thank you! (- v - )</p>
        <p>Copyright © 2021, Yuma Matsuzaki (uai) </p>
      </div>
    </footer>
  );
}


export default Footer;