export const RuleBook = {
  props: ['obtain', 'unrook'],
    template: `
        <div>
            
<h1>ルールブック</h1>


<details>
    <summary class="rule_name">冒頭</summary>
    <p>これから文字に下線を引いたものはプレイヤーに向けてしゃべってください<br>
        <span style="text-decoration: underline;">いつからこの空間にいるのだろうか数日、あるいは数週間かもしれない。<br>
        ああ...また時計の時計の音がくる。</span><br>
        （時計の音）<br>
        <span style="text-decoration: underline;">鈍い鐘の音が木霊する。一瞬頭が割れそうな痛みが走り額を押さえる。<br>
        ここでプレイヤー1は正気度判定を行ってください。</span><br>
        判定失敗時：正気度を１減少<br>
        <span style="text-decoration: underline;">徐々に痛みが引きあたりを見渡すといつものエレベータだとわかる。<br>
        また探索を再開しよう。<br>
        あなたの目的はこのタイムループから抜け出すすることです。<br>
        どんな手段を用いても構いません。あなたの正気度がなくなり、壊れてしまう前に<br>
        今後プレイヤーがタイムループを繰り返す度に正気度ロールを振り、<br>
        判定が失敗したら正気度を１現象させてください。</span>
    </p>
    
</details>
<hr>
<br>

<!-- エレベーター -->
<img class="rule_pho" src="photo/elevator.png">
<details>
    <summary class="rule_name">エレベーター</summary>
    <p>行き先や開閉、非常用のボタンがなく代わりに
        上矢印と下矢印のボタンがついている。<br>
        階数は表示されていない。<br>
        作りはゴムマットとステンレス製の壁で出来ている一般的な
        作りになっており、9人ぐらいが入れる広さをしている。<br>
        扉は開いており、奥から電球の光が差し込んでいる。
    </p>
    
    <h2>調べられる場所</h2>
    <details>
        <summary>ボタン</summary>
        <p>行き先や開閉、非常用のボタンがなく
            代わりに上矢印のボタンと↓矢印のボタンがある。<br>
            ボタンを押しても何も起きない。
        </p>
    </details>
    <details>
        <summary>扉</summary>
        <p>よく見るエレベーターの扉だ。<br>
            しかしよく見るとエレベーターと向こうの部屋の境に黒い線が
            存在しており、まるでを繋げているようにも感じる。
        </p>
    </details>
    <details>
        <summary>天井</summary>
        <p>６つの電灯が取り付けられているが、電気はついていない。<br>
            特に気になることはなく叩いたりしても天板が外れたりしない。</p>
    </details>
    <details>
        <summary>壁、床</summary>
        <p>壁や天井を調べても隠し通路や空洞などは見つからない<br>
            (判定：力)<br>
            はがしたり傷をつけたりできない
        </p>
    </details>
</details>
<br>
<hr>
<br>

<!-- 廊下 -->
<img class="rule_pho" src="photo/entrance.png">
<details>
    <summary class="rule_name">廊下</summary>
    <p>土間があり、そこから廊下があるため玄関廊下だと推測できる。<br>
        一番奥と少し手前の場所にそれぞれ扉がある。<br>
        そして電球からのが柔らかい雰囲気を醸し出している。
    </p>
    <h3>調べられる場所</h3>
    <details>
        <summary>扉（奥）</summary>
        <p>開かない。この扉を鍵は右手の扉を開けた先の黒い箱の中にある。</p>
        <button tyep="button" @click="unrook(0, 3)">解除</button>
    </details>
    <details>
        <summary>下棚</summary>
        <p>上と下の棚があり下の棚の中には男女の靴と小学生程度の大きさ
            の靴がいくつかある。<br>
            他には外で使う用途の道具が入っている。<br>           
        </p>
    </details>
    <details>
        <summary>上棚</summary>
        <p>上の棚は子供の身長一人分では届かない。何かを足場にすれば届きそうだ<br>
            二人で肩車したり何らを足場にした場合は届きそうだ<br>
            靴の調子を整えるための道具や特定のシーズンでしか使わない
            道具など下段よりも使用率が少なそうなものが入っている。<br>
            <strong class="rule_get">靴ベラ</strong>を入手</p>
            <button @click="obtain('shose')" type="button">靴ベラ</button>
    </details>
    <details>
        <summary>鏡</summary>
        <p>出かける前に自分の容姿を確認するための縦型鏡だ。<br>
            覗き込むと良い肌色の割に目がかなりやつれているのがわかる。</p>
    </details>
    <details>
        <summary>植木鉢</summary>
        <p>自分の胸の高さぐらいある観葉食部。<br>
            土の代わりに木のチップが詰まっている。<br>
            ヒントを意識して観察するとヒント（３）を入手できる
            <button @click="obtain('hint1_3')" type="button">入手：ヒント３</button>
        </p>

    </details>
    <details>
        <summary><b>ブレーカー</b></summary>
        <p>ブレーカーだ開くと部屋の割り振りがなされたスイッチがあり、ほとんどONにされてあるが<br>
            一番右端のみOFFになっている。<br>
            ONにしようとしてもトグルスイッチが外されておりONにすることが出来ない<br>
            推察系で成功判定時：
            右端のスイッチはどこに通電しているがわからないが無理やり取り付けられたように見える
        </p>
    </details>
</details>
<br>
<hr>
<br>

<!-- 子ども部屋 -->
<img class="rule_pho" src="photo/myroom.png">
<details>
    <summary class="rule_name">子ども部屋</summary>
    <details>
        <summary><b>初回入室時</b></summary>
        <p><span style="text-decoration: underline;">いつも通り扉を開けると普段と違い人がいた。<br>
        久しく人に会えたので思わず喜びが出る。机にうつ伏せになっている<br>
        ここからは自由にしてください</span>
        判定：洞察<br>
        <span style="text-decoration: underline;">成功時：茶髪の髪に白色のインナーからが入っており、<br>
        青いワンピースを身に付けている<br>
        近くにいると寝息が聞こえる<br></span>
        もし体をさすったり、声を掛けたりすると起きる<br>
        プレイヤー２を起こすと今後タイムループを繰り返すと最初からいる状態になる

        </p>
    </details>
    <p>約6畳ほどの広さ。勉強机やベット、収納スペースなどがある。<br>
        そのためここが子供部屋だと推測することが出来る。<br>
        なんだか妙に懐かしい気持ちになる。<br>
        判定：想起<br>
        ここが自分の部屋だと知ることができる。だがいま住んでいる部屋ではないことがわかる。
    </p>
    <h2>調べられる場所</h2>
    <details>
        <summary><b>クローゼット</b></summary>
        <p>
            薄い長そでのTシャツやズボン、上着などが何着か入っている。<br>
            下の棚には冬着で着るような服が収納されている。<br>
            ヒントを意識して探すとクローゼットの奥の奥に<strong class="rule_get">ヒント（４）</strong>を入手できる
            <button @click="obtain('hint1_4')" type="button">入手：ヒント４</button>
        </p>
    </details>
    <details>
        <summary><b>ベット</b></summary>
        <p>
            傷が少ない事と布団も使い古されていなことから<br>
            このベットが新品だとわかる。<br>
            ベット上に黒い箱がある。
        </p>
    </details>
    <details>
        <summary><b>黒い箱</b></summary>
        <p>
            小さな黒い箱。ロックが掛かっており、<br>
            四桁のパスワードを打つことで開くことができる。<br>
            パスワードは、、、ループの影響でうまく思い出せない。<br>
            判定：想起　成功時<br>
            パスワードは〇〇〇〇と知ることが出来る<br>
            パスワードで開錠すると<strong class="rule_get">鍵が入手できる</strong>
            <button @click="obtain('key1')" type="button">入手</button><br>
        </p>
    </details>
    <details>
        <summary><b>外の景色</b></summary>
        <p>
            高い位置に立っているようで大体二階から見た景色に見える。<br>
            外は快晴で桜の花が見える。
        </p>
    </details>
    <details>
        <summary><b>勉強机・棚</b></summary>
        <p>中には新品の文房具一式と小学４，５年で使う教科書類がはいってる。<br>
            勉強机の棚には６年生用の教科書や漫画が雑然と並べられている。</p>
    </details>
    <details>
        <summary><b>赤い箱</b></summary>
        <p>子供用ののこぎりやDIYで使う道具が入っている
            <strong class="rule_get">針金</strong>を入手
            <button @click="obtain('wire')" type="button">入手</button>
        </p>
    </details>
</details>
<br>
<hr>
<br>

<!-- リビング -->
<img class="rule_pho" src="photo/living.png">
<details>
    <summary class="rule_name">リビング</summary>
    <p>16畳ほどのLDKの部屋だ。<br>
    はき出し窓からくる太陽光が部屋全体を照らしている。<br>
    生活感があるが誰もいないため異様な雰囲気を感じる。<br>
    判定：想起<br>
    ここが自宅のリビングだと思い出す。だがなにか違和感を感じる。
    </p>
    <h3>調べられる場所</h3>
    <details>
    <summary><b>振り子時計</b></summary>
    <p>壁に掛けられているアンティーク調の振り子時計。<br>
        どことなく不思議な雰囲気がある。地盤がかけている。<br>
        時計の長針を進めれば時間を進めることができる。<br>
        （ただし逆行は動かせない）時間を進めるときは<br>
        ループ時にくる頭痛がわずかにする。<br>
        時計はアイテムの「水筒」で破壊でき破壊したら体験版は終了
    </p>
    <button tyep="button" @click="unrook(1, 1)">終了</button>
    </details>
    <details>
        <summary><b>はき出し窓</b></summary>
        <p>外から太陽の温かい光が差し込んでいる。
            庭には桜の花びらが落ちている
        </p>
    </details>
    <details>
        <summary><b>写真</b></summary>
        <p>女性と男性に挟まれた自分がいる。<br>
            今よりも二回りほど小さい。笑顔でカメラに向かってピースサインをしており、<br>
            とても幸せそうだ。
        </p>
    </details>
    <details>
        <summary><b>ヒント</b></summary>
        <p>扉上の木の部分をよく見ると<strong class="rule_get">ヒント（２）</strong>を入手できる
             <button @click="obtain('hint1_2')" type="button">入手</button>
        </p>
    </details>
    <details>
        <summary><b>キッチン</b></summary>
        <details>
            <summary><b>収納棚</b></summary>
            <p>包丁やアルミホイルなどの調理道具が収納されている。<br>
                それ以外は特になさそうだ
            </p>
            <details>
                <summary><b>冷蔵庫</b></summary>
                <p>中は冷えているが水や食べものは一切ない。
                </p>
            </details>
        </details>
    </details>
</details>

<!-- 道路 -->
 <br>
 <hr>
 <br>
 <img class="rule_pho" src="photo/road.png">
 <details>
    <summary class="rule_name">道路
    </summary>
    <p>住宅街の道路、入ってきた扉から左右の道路は描かれている<br>
        範囲から少し先に行くと見えない壁があり行くことが出来ない。<br>
        奥の道路も右の建物の少し行くと壁がある。<br>
        判定：想起<br>
        自分がよくこの場所を通っていたことを思い出す。<br>
        ここが通学路だったことを思い出す。<br>
    </p>
    <h3>調べられる場所</h3>
    <details>
        <summary><b>住宅</b></summary>
        <p>開けることはできない。鍵がかかっていて開かないのではなく<br>
            扉そのものが動かなくなっている。<br>
        </p>
    </details>
    <details>
        <summary><b>祠</b></summary>
        <p>鍵がかかっている。
            中には地蔵と何か物が入っている。
            祠の鍵を使うことで<strong class="rule_get">水筒</strong>を入手
            <button @click="obtain('bottle')" type="button">入手</button>
        </p>
    </details>
    <details>
        <summary><b>排水溝</b></summary>
        <p>中に何かかあるが取れない。<br>
            あともう少し腕が長ければ取れそうだ。<br>
            判定：器用<br>
            はりがねを付けた靴ベラで入手可能<br>
            鍵（リビング）を入手<button @click="obtain('key1')" type="button">鍵（リビング）</button>
        </p>
    </details>
 </details>
 <br>
<hr>
<br>
<img class="rule_pho" src="photo/class.png">
    <details>
    <summary class="rule_name">学校</summary>
    <p>大量の机が整然と並べられており、前には黒板があるためここが教室だと理解できる。
    </p>
    <h3>調べられる場所</h3>
   <details>
    <summary><b>黒板</b></summary>
    <p>黒板の中心に「卒業おめでとう！」と大々的に書かれ、<br>
        力の入った桜の絵が描かれている。<br>
        他にもイラストや感謝、応援の言葉が散りばめられている。
    </p>
   </details>
   <details>
    <summary><b>景色</b></summary>
    <p>運動場がありフェンス仕切られている。<br>
        その奥には見慣れた街の風景と桜が見える。
    </p>
   </details>
   <details>
    <summary><b>前の扉</b></summary>
    <p>開けることが出来ない。<br>
        鍵がかかっていて閉じているのではなく扉全体がその場で固定<br>
        されているように見える。
    </p>
   </details> 
   <details>
        <summary><b>自分の机</b></summary>
        <p>自分の机の上にはヒントの紙が2枚置かれている
            <strong class="rule_get">ヒント</strong>を入手
            <button @click="obtain('hint1_1')" type="button">ヒント</button>
            <button @click="obtain('hint1_map')" type="button">ヒントマップ</button>
        </p>
    </details>
    <details>
        <summary><b>教卓</b></summary>
        <p>金庫が置かれている。<br>
            アルファベットが掛かれたボタンがある
            番号は“take”中には小さな鍵（祠）がある。
            <strong class="rule_get">小さな鍵（祠）</strong>を入手
            <button @click="obtain('key2')" type="button">小さな鍵（祠）</button>
        </p>
    </details>
</details>
        </div>
    `
};