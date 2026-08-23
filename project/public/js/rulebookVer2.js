export const RuleBook = {
  props: ['obtain', 'unrook'],
    template: `
        <div>
            <h1>ルールブック</h1>

<p>▶の印のあるものはクリックすれば開きます。</p>
<br>
<hr>
<br>
<details>
    <summary class="rule_name">冒頭</summary>
    <p>まずこのゲームの進め方、各機能のチュートリアルをします。<br>
        GMはプレイヤーに対してまだ画面の中の物をクリックしないように指示してください。<br>
        また、まだP1しかいないことも伝えてください。<br>
        そして以下の下線の引かれた内容をプレイヤーに伝えてください。<br>
        意味があっているのであれば言い方を変えても問題ありません。<br>
        <hr>
        <span class="rule_under">
        いつからこの空間にいるのだろうか数日、あるいは数週間彷徨っているかもしれない。<br>
        もうすぐ８：３０だ。このままではまた…<br>
        </span>

        ここで時間を５分を進めてください<br>

        <span class="rule_under">
        鈍い鐘の音が再び部屋中に木霊する。同時に頭が割れそうな痛みが襲い、手すりにもたれる。<br>
            </span>
        ここでプレイヤー１はレジリエンス判定を行ってください。<br>
        判定成功時：変化なし<br>
        失敗時：正気度を１減少<br>

        <span class="rule_under">
        徐々に痛みが引き、あたりを渡すといつもの暗いエレベーター内にいるとわかる。<br>
        さあ、また探索を再開しよう。<br>
        このループから抜け出すために。<br>
            
        P1の目的はこのループから抜け出すことです。<br>
        どんな手段手段を用いても構いません。あなたの精神力が０になる前にループから抜け出してください。<br>
            </span>
        また今後ループが発生すればレジリエンスのダイスロールを振り結果は最初に行ったレジリエンスの判定表を参考にしてください。<br>
        
    </p>
    <h3>最初のチュートリアル</h3>
    <p>
        <span class="rule_under">
        このゲームはプレイヤーはGMに対して画面上にある画像を見て部屋全体の情報や<br>
        物について質問し、情報を得ることが出来ます。<br>
        ここでの質問は、初回で物に対する情報で一つ、さらにそのものに対する<br>
        行動をするのであれば質問一つです。<br>
        例：ある花瓶について質問すると、質問一回分。さらにその花瓶に対してなにか行動を<br>
        起こす（花瓶を割るや、中を覗くなど）で質問一回分です。<br>
        質問は一人の一つとして、全員が使ったら時間を５分進めます。<br>
        状況によっては能力値のダイスロールの判定により正確な情報を得ることが出来ます。<br>

        試しにこの部屋全体の情報や一つの物に対してGMに質問してください。<br>

        一回プレイヤーが質問してGMが答えたら。次に移動について教えます。<br>
        次に移動方法を解説します。画面の右にマップがあります。<br>
        その中にあるボタンをクリックして下さい。<br>
        このようにプレイヤーはマップを移動します。ただし移動には時間を消費するので<br>
        むやみに移動してしまうとループの間隔が早まってしまうため気を付けてください。<br>
        ここで一度自由に探索をさせ、子供部屋に着いたらまたチュートリアルを再開します。<br>
        </span>
    </p>
</details>
<!-- ヒント -->
<details>
    <summary class="rule_name">ヒント</summary>
    ループブックの横にある現在ヒント番号を使い、<br>
    その番号に応じたものの内容を伝えてください。<br>
    ヒントが複数ある場合は数字が降られています。<br>
    ヒントの行動に付き一つだけ教えてください。<br>
    <details>
        <summary><b>1
        </b></summary>
        <details>
            <summary><b>1.1</b></summary>
            <p><span class="rule_under">１、いろいろな部屋を散策しよう<br>
                </span>
            </p>
        </details>
        <details>
            <summary><b>1.2</b></summary>
            <p><span class="rule_under">
                １：このままでは金庫の謎を解くことが出来ない。
                ヒントをすべて集めよう<br>
                ２：ヒントのある場所と今いる部屋の間取りは違う用だ。<br>
                今のままではわからないがなにかしら部屋の間取りや形から<br>
                推測することはできないだろうか
                </span>
            </p>
        </details>
        <details>
            <summary><b>1.3</b></summary>
            <p><span class="rule_under">
                １：暗号には左に記号右に1か2の数字がある。<br>
                1と2の数字で区別することはできないだろうか<br>
                ２：4つのアルファベットがあり、それが点線によって二つに分かれている<br>
                これもヒントになりそうだ
                </span>
            </p>
        </details>
    </details>
</details>
<br>
<h2>各部屋の説明</h2>
<br>
<hr>
<br>
<img class="rule_pho" src="photo/elevator.png">
<!-- エレベーター -->
<details>
    <summary class="rule_name">エレベーター</summary>
    <p>【目的】<br>
        とくになし<br>
    </p>
    <details>
        <summary><b>ロードのチュートリアル</b></summary>
        <p>このチュートリアルはセーブのチュートリアルが終わっていたら開始してください。<br><br>
            <span class="rule_under">
                ループをするとアイテムをすべて失ってしまいます。<br>
                そのため再度アイテムを集め直さないといけません。そのような行為を<br>
                省略するためロード機能があります。<br>
                セーブをしているはずなのでロードボタンを押してみましょう。<br>  
            </span>
            ここでプレイヤーにロードボタンを押させてください。<br>
            <span class="rule_under">
                ロードをすると６：００からセーブ地点までの行動を自動的に再現します。<br>
                初回の行動を省略することができるのでうまく活用してください。<br>
            </span>
            
        </p>
    </details>
    <p>
        【全体情報】<br>
        <span class="rule_under">
        作りはゴムマットとステンレス製の壁で出来ている。電気はついていないのか<br>
        明かりがなく、階数も表示されていない。<br>
        一般的な作りのエレベーターになっているように見えるが、違和感を感じる。<br>
        </span>
        <br>
        【GM申告：洞察】<br>
        成功：行き先ボタンや開閉ボタン、非常用のボタンがなく、代わりに上矢印、<br>
        下矢印のボタンがついている。<br>
        失敗：特になし。<br>
        もう一度ダイスロールをすれば確定で成功時の情報が手に入る。<br>
    </p>
    <h3>調べられる場所</h3>
    <details>
        <summary><b>ボタン</b></summary>
        <p><span class="rule_under">
            洞察のロールでこの情報を知っていれば、下２行の情報は飛ばしてよい。<br>
        行き先ボタンや開閉ボタン、非常用のボタンがなく、代わりに上矢印、<br>
        下矢印のボタンがついている。<br>
        </span>
        【行動】<br>
        ボタンを押しても何も起きないがわずかにくぼむ<br>
        </p>
    </details>
    <details>
        <summary><b>扉</b></summary>
        <p><span class="rule_under">
            よく見るエレベータの扉に見える。<br>
        しかしよく見るとエレベーターと向こうの部屋の境に黒い線が存在<br>
        しており、部屋同士を繋げているように見える。<br>
        </span>
        </p>
    </details>
    <details>
        <summary><b>天井</b></summary>
        <span class="rule_under">
        <p>６つの電灯が取り付けられているが、電気はついていない。<br>
            </span>
            【行動】<br>
            叩いたりしても天板が外れたり、電灯が壊れたりしない。<br>
        </p>
    </details>
    <details>
        <summary><b>床、壁</b></summary>
        <p>
            <span class="rule_under">調べても隠し通路や空洞などは見つからない<br></span>
        </p>
    </details>
</details>
<br>
<hr>
<br>
<img class="rule_pho" src="photo/entrance.png">
<!-- 玄関 -->
<details>
    <summary class="rule_name">玄関</summary>
    <p>【目的】<br>
        奥の扉の鍵を開けること。<br>
        初回は子供部屋に移動させること。<br>
        ヒント３を手に入れる。<br>
        全体情報：<br>
        <span class="rule_under">
        土間があり、そこから廊下があるため玄関廊下だと推測できる。<br>
        一番奥と右手にはそれぞれ扉がある。<br>
        そして電球からは柔らかい光が柔らかい雰囲気を醸し出している。<br>
        </span>
    </p>
    <h3>調べられる場所</h3>
    <details>
        <summary><b>扉（奥）</b></summary>
        <p><span class="rule_under">
            開かない。この扉の鍵は右手の扉を開けた先のベットの上にある黒い箱の中だ。<br>
        </span>
        </p>
    </details>
    <details>
        <summary><b>下棚</b></summary>
        <p><span class="rule_under">
            上と下の棚があり、下の棚の中には男女の靴と小学生程度の大きさの靴がいくつかある。<br>
        他にも外で使う用途の道具が入っている。<br>
        上の棚には特にない。<br>
        </span>
        </p>
    </details>
    <details>
        <summary><b>鏡</b></summary>
        <p><span class="rule_under">
            出かける前に自分の容姿を確認することが出来る。<br>
        </span>
        【行動】<br>
        P1が覗き込むと肌色が良いわりに目がやつれている。<br>
        P2が覗き込むと特に違和感はなく容姿を確認できる。<br>
        </p>
    </details>
    <details>
        <summary><b>植木鉢</b></summary>
        <p><span class="rule_under">
            背丈が高めの作り物の観葉植物。<br>
            土の代わりに木のチップが詰まっている。<br>
            </span>
            【自己申告：洞察】<br>
            ヒント３を入手（ダイスの結果で変わらない）<button @click="obtain('hint1_3')" type="button">入手：ヒント３</button><br>

        </p>
    </details>
</details>
<br>
<hr>
<br>
<img class="rule_pho" src="photo/myroom.png">
<!-- 子ども部屋 -->
<details>
    <summary class="rule_name">子ども部屋</summary>
    <p>【目的】<br>
        初回はP2と合流すること<br>
        ヒント３を入手<br>
        針金を入手<br>
    </p>
    <details>
        <summary><b>初回入場時</b></summary>
        <p>以下の内容を伝えてください。<br><br>
            <span class="rule_under">
            いつも通り扉を開けると普段と違い人がいた。<br>
            人に合えたのはいつぶりだろうか、あまりの出来事で<br>
            思わず喜びが出る。<br>
            その人は机にうつ伏せになっている。<br>
            </span>
            ここからはP1が自由にしてください。<br>
            【GM申告：洞察】<br>
            成功時：女の子であるとわかる。<br>
            茶髪にベージュインナーカラーが入っており、<br>
            青いワンピースを身に付けている。<br>
            失敗時：特になし<br>
            そのうつ伏せになっている人はP2です。<br>
            体をさすったり、声を掛けたりすると起きます。<br>
            P2が起きるとこれからは二人行動です。<br>
            もしタイムループした場合でも最初からP2がいるという<br>
            設定にしてください。<br>
            次に子供部屋にある黒い箱について質問されたら、<br>
            ダイスロールのチュートリアルを行います。<br>
            黒い箱について質問されたら以下の内容を伝えてください。<br>
            <span class="rule_under">
            小さな黒い箱。ロックが掛かっており、<br>
            四桁のパスワードを打つことで開くことができる。<br>
            パスワードは、、、ループの影響でうまく思い出せない。<br>
            </span>
            このように場合によっては問題が解決することがあります。<br>
            今回はP1の記憶がうまく思い出せないのでP1の”想起”の<br>
            ダイスロールを振ってください。<br>
            【GM申告：想起】<br>
            成功時：<br>
            パスワードは11月１１日と知ることができる。<br>
            失敗時：<br>
            思い出せない<br>
            もう一度ダイスロールをすれば確定で手に入る。<br>
            <span class="rule_under">
            このように場合によっては問題が解決することがあります。<br>
            GMから指示があった場合、対応する能力値のダイスロールを行ってください。
            </span>
            ここで再度自由に探索をさせ、道路に着いたらまたチュートリアルを再開します。<br>
        </p>
    </details>
    <p>
        全体情報：<br>
        <span class="rule_under">
        約６畳ほどの広さ。勉強机やベット、収納スペースなどがあるため、<br>
        子供部屋だと推測できる。<br>
        この部屋にいると妙に懐かしい気持ちになる。<br>
        </span>
        【自己申告：想起】<br>
        成功：<br>
        ここは自分が住んでいた部屋だと思い出す。<br>
        だが同時にその言い方はすこし違う気がすると感じる。<br>
        失敗：<br>
        とくになにもない。<br>
        失敗したら成功時の情報を得られない。<br>
    </p>
    <h3>調べられる場所</h3>
    <details>
        <summary><b>クローゼット</b></summary>
        <p><span class="rule_under">
            薄い長そでのTシャツやズボン、上着などが何着か書けられている。<br>
        下の棚には冬着で着るような服が収納されている。<br>
        </span>
        【自己申告：洞察】<br>
        ヒント４を入手（ダイスの結果で変わらない）<button @click="obtain('hint1_4')" type="button">入手：ヒント４</button><br>
        </p>
    </details>
    <details>
        <summary><b>ベット</b></summary>
        <p><span class="rule_under">
            比較的に新しいベット。<br>
        上には黒い箱がある。<br>
        </span>
        </p>
    </details>
    <details>
        <summary><b>黒い箱</b></summary>
        <p><span class="rule_under">
            小さな黒箱。ロックが掛かっており、四桁のパスワードを<br>
            打つことで開くことが出来る。<br>
            パスワードは...ループの影響でうまく思い出せない。<br>
            </span>
            【GM申告：想起】<br>
            成功時：<br>
            パスワードは11月１１日と知ることができる。<br>
            失敗時：<br>
            思い出せない<br>
            もう一度ダイスロールをすれば確定で手に入る。<br>
            パスワードを知れば箱に入っている鍵が入手できる。<button @click="obtain('key1')" type="button">入手：鍵</button>
            <br><br><br>
        </p>
    </details>
    <details>
        <summary><b>勉強机・その近くのたな</b></summary>
        <p><span class="rule_under">
            勉強机の中には鉛筆や消しゴムなどの文房具が入っており、<br>
            上には６年生用の教科書が雑然と置かれている。<br>
            近くの棚には小学４，５年生で使う教科書が入っている。<br>
            </span>
        </p>
    </details>
    <details>
        <summary><b>赤い箱</b></summary>
        <p><span class="rule_under">
            中には子ども用ののこぎりやDIYで使う道具が入っている。<br>
        はりがねを入手できる。<button @click="obtain('wire')" type="button">入手</button><br>
        </span>
        </p>
    </details>
    <details>
        <summary><b>外の景色</b></summary>
        <p><span class="rule_under">
            高い場所に建てられており、二階から見える景色に見える。<br>
            外は快晴で桜が見える。<br>
            </span>
        </p>
    </details>
</details>
 <br>
 <hr>
 <br>
 <img class="rule_pho" src="photo/living.png">
 <!-- リビング -->
 <details>
    <summary class="rule_name">リビング</summary>
    <p>【目的】<br>
        振り子時計を水筒で破壊すること。<br>
        全体情報：<br>
        <span class="rule_under">
        １６畳ほどのLDKの部屋。<br>
        はき出し窓からくる太陽光が部屋全体を照らしている。<br>
        生活感はあるが誰もいない。<br>
        </span>
        【自己申告：想起】<br>
        判定成功時：<br>
        ここが自宅のリビングだと思い出す。だがなにか違和感を感じる。<br>
        判定失敗時：<br>
        何も思い出せない<br>
        失敗したら成功時の情報は得られない。<br>
    </p>
    <h3>調べられる場所</h3>
    <details>
        <summary><b>振り子時計</b></summary>
        <p><span class="rule_under">
            壁に掛けられているアンティーク調の振り子時計。<br>
            どことなく不思議な雰囲気を感じ、時計の盤が<br>
            ６：００から８：３０までしかない。<br>
            </span>
            【行動】<br>
            針を時計回しに進めば時刻を進めることが出来る。<br>
            反時計回りに針を動かそうとしても動かない。<br>
            また時計はアイテムの水筒で破壊することができ、<br>
            破壊したら体験版終了。<button tyep="button" @click="unrook(1, 1)">終了</button><br>
        </p>
    </details>
    <details>
        <summary><b>はき出し窓</b></summary>
        <p><span class="rule_under">
            外から太陽の温かいが差し込んでいる。<br>
            庭には桜の花びらが落ちている。<br>
            </span>
        </p>
    </details>
    <details>
        <summary><b>立てかけ写真</b></summary>
        <p><span class="rule_under">
            女性と男性に挟まれたP1がいる。<br>
            今よりもすこしだけ幼く見え、ひと回り小さい。<br>
            笑顔でこちらに向かってピースサインをしており、<br>
            幸せそうだ。<br>
            </span>
        </p>
    </details>
    <details>
        <summary><b>扉上の木の部分</b></summary>
        <p>【自己申告：洞察】<br>
            よく見るとヒントが貼ってあり、取ることができる。（ダイスの結果に依存しない）<br>
        </p>
    </details>
    <details>
        <summary><b>キッチン</b></summary>
        <details>
            <summary><b>収納棚</b></summary>
            <p><span class="rule_under">
                包丁やアルミホイルなどの調理道具が収納されている。<br>
                </span>
            </p>
        </details>
        <details>
            <summary><b>冷蔵庫</b></summary>
            <p><span class="rule_under">
                中は冷えているが水や食べ物はない<br>
                </span>
            </p>
        </details>
    </details>
 </details>
 <br>
 <hr>
 <br>
 <img class="rule_pho" src="photo/road.png">
 <!-- 道路 -->
 <details>
    <summary class="rule_name">道路</summary>
    <p>【目的】<br>
        リビングの鍵を入手する<br>
        水筒を入手する<br>
    </p>
    <details>
        <summary><b>初回入場時</b></summary>
        <p><span class="rule_under">
            プレイヤーは６：００分からしてきた行動を自動で取るロード機能が存在します。<br>
            もし決まった動作があるのならばどの行動の終了時にセーブボタンを押してください。<br>
            一度道路をまで来たので一度セーブをしてみましょう。<br>
            セーブはメニューにあるセーブのボタンを押すことでセーブされます。<br>
            </span>
            ここで再度自由に探索をさせ、ループが発生したらまたチュートリアルを再開します。
        </p>
    </details>
        全体情報：<br>
        <span class="rule_under">
        住宅街の道路。<br>
        左右のと奥の道路から数メートル移動すると見えない壁があり行くことができない。<br></span>
        【自己申告：想起】<br>
        成功時：ここがP1が使っていた通学路だと思い出す。<br>
        失敗時：P1がこの場所をよく使っていたような気がすると思い出す。<br>
        失敗したら成功時の情報は得られない
    </p>
    <h3>調べられる場所</h3>
    <details>
        <summary><b>住宅</b></summary>

        <p><span class="rule_under">
            開けることはできない。鍵が掛けられて開かないのではなく、<br>
            扉そのものが動かない。<br>
            </span>
        </p>
    </details>
    <details>
        <summary><b>祠</b></summary>
        <p><span class="rule_under">
            鍵がかかっている。中には地蔵と何か物が入っている。<br>
            </span>
            【行動】<br>
            祠の鍵を使うことで水筒を入手できる。<button @click="obtain('bottle')" type="button">入手：水筒</button><br>
            鍵以外の方法で開けることはできない<br>
        </p>
    </details>
    <details>
        <summary><b>排水溝</b></summary>
        <p><span class="rule_under">
            正方形の1メートルほどの大きさ。排水溝の間を覗くと中で何か小さなものが<br>
            光っているが隙間が小さくて見えない。<br>
            </span>
            【自己申告：筋力】<br>
            成功：排水溝の蓋を持ち上げることができる<br>
            失敗：持ち上げられない<br>
            【行動】<br>
            蓋を持ち上げれた状態なら、中にある光る物の正体は鍵であるとわかる。<br>
            ただし取ろうとしても距離があり取れない<br>
            あともう少し腕が長ければ取れそうだ。<br>
            ここでプレイヤーがアイテムの針金を利用すれば鍵（リビング）を入手できる。<button @click="obtain('key1')" type="button">入手鍵（リビング）</button><br>
            ほかにも取る距離を延ばす方法があればとることが可能。<br>
            ただしその辺には枝などの距離を伸ばせそうなものはない。<br>
        </p>
    </details>
 </details>
 <br>
 <hr>
 <br>
 <img class="rule_pho" src="photo/class.png">
 <!-- 学校 -->
 <details>
    <summary class="rule_name">学校</summary>
    <p>【目的】<br>
        ヒントのある場所を知る。<br>
        祠の鍵を入手する。<br>
        全体情報：<br>
        <span class="rule_under">
        大量の机が整然と並べられており、前には黒板があり「卒業おめでとう」と書かれている。<br>
        </span>
    </p>
    <h3>調べられる場所</h3>
    <details>
        <summary><b>景色</b></summary>
        <p><span class="rule_under">
            運動場がありフェンスで仕切られている。<br>
            その奥には町の風景と桜が見える。<br>
            </span>
        </p>
    </details>
    <details>
        <summary><b>前の扉</b></summary>
        <p><span class="rule_under">
            開けることができない。<br>
            鍵がかかっていて閉じているのではなく、扉全体がその場で固定されているように見える。<br>
            </span>
        </p>
    </details>
    <details>
        <summary><b>とある机</b></summary>
        <p><span class="rule_under">
            机の上にはヒントの紙と金庫が置かれている。金庫にはアルファベットが配置されたボタンがある。
            <button @click="obtain('hint1_1')" type="button">入手：ヒント</button>
            <button @click="obtain('hint1_map')" type="button">入手：ヒントマップ</button><br>
            </span>
            【行動】<br>
            暗号は”take”。GMにその答えを提示すれば開けることができる。<br>
            中には小さな鍵（祠）がある。<button @click="obtain('key2')" type="button">入手：小さな鍵（祠）</button><br>
        </p>
    </details>
 </details>

        </div>
    `
};