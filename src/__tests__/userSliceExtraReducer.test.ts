import reducer, { fetchSearchResults, UserState } from 'src/features/user/userSlice';

const mockData = {
  page: 1,
  results: [
    {
      adult: false,
      backdrop_path: '/nvjcKJCDPU9bDEEyTyneTj4PnuO.jpg',
      genre_ids: [14, 28],
      id: 268,
      original_language: 'en',
      original_title: 'Batman',
      overview:
        'DCコミックスの誇るスーパー・ヒーローを巨費を投じて映画化した大作。ゴッサム・シティの闇に跳梁し悪を粉砕するバットマンと犯罪組織の新ボス・ジョーカーとの戦い。単純明解な娯楽編にはせずにひねった作品を目指していたのか、バットマンの誕生の秘密やジョーカーの設定などかなり暗めで、マニアックな仕上がりになっている。ニコルソン怪演。',
      popularity: 44.617,
      poster_path: '/7Xg8iDGWeR9iUzzmFaqWnwY0zDN.jpg',
      release_date: '1989-06-23',
      title: 'バットマン',
      video: false,
      vote_average: 7.2,
      vote_count: 5557,
    },
    {
      adult: false,
      backdrop_path: '/rpOqHZMNIaI4qP4r7nw1B7oA0mx.jpg',
      genre_ids: [878, 28, 14],
      id: 415,
      original_language: 'en',
      original_title: 'Batman & Robin',
      overview:
        '“A FREEZE IS COMING!” すべてを氷づけにしようとする怪人Mr.フリーズがゴッサム・シティーに出現。事もあろうに、誘惑フェロモンと猛毒キスを武器にするポイズン・アイビーと手を組んだ！　対するバットマンも、ロビンとバットガールという味方を得て迎え撃つが！3代目バットマンに選ばれたジョージ・クルーニー、初登場のバットガールにアリシア・シルヴァーストーン、注目の悪役にはアーノルド・シュワルツェネッガーら、豪華スターが共演。機能性がアップしたバットモービルや、より奇抜さを増したゴッサム・シティーなど、本シリーズならではの斬新なデザインも充実。',
      popularity: 26.285,
      poster_path: '/xOM1XLe4hmMvzQKWLMIEqRexBfA.jpg',
      release_date: '1997-06-20',
      title: 'バットマン＆ロビン／Mr.フリーズの逆襲',
      video: false,
      vote_average: 4.3,
      vote_count: 3720,
    },
    {
      adult: false,
      backdrop_path: '/wNyhtxSazhYVSG1So8zgGTqVFVo.jpg',
      genre_ids: [28, 16, 80, 18],
      id: 382322,
      original_language: 'en',
      original_title: 'Batman: The Killing Joke',
      overview: '',
      popularity: 31.515,
      poster_path: '/nxncAAL1FUKtQWs4uhs5jf1MVut.jpg',
      release_date: '2016-07-24',
      title: 'バットマン：キリングジョーク',
      video: false,
      vote_average: 6.6,
      vote_count: 1302,
    },
    {
      adult: false,
      backdrop_path: '/snlu32RmjldF9b068UURJg8sQtn.jpg',
      genre_ids: [28, 80, 14],
      id: 414,
      original_language: 'en',
      original_title: 'Batman Forever',
      overview:
        '大都市ゴッサムシティ。敏腕検事だったデントは、法廷で硫酸をかけられた事件をきっかけに怪人トゥー・フェイスと化して悪事を働くように。一方、バットマンの表の顔、大富豪ウェインの会社で働く研究員ニグマは、自分の発明したマインドコントロール装置が無視されたことを逆恨みし、クイズで相手を翻弄する怪人リドラーに生まれ変わる。正義の味方バットマンは、多重人格の権威チェイス博士とこれら新たな敵に立ち向かっていく。',
      popularity: 25.927,
      poster_path: '/vR2LxcLnraW4f5b0w0dbgE3OAWG.jpg',
      release_date: '1995-06-16',
      title: 'バットマン フォーエヴァー',
      video: false,
      vote_average: 5.4,
      vote_count: 3838,
    },
    {
      adult: false,
      backdrop_path: '/lh5lbisD4oDbEKgUxoRaZU8HVrk.jpg',
      genre_ids: [28, 80, 18],
      id: 272,
      original_language: 'en',
      original_title: 'Batman Begins',
      overview:
        '大富豪の家庭に育ったブルース・ウェインは少年時代、井戸で遭遇したコウモリの大群に圧倒的な衝撃を受け、またさらには彼の両親が目の前で殺されて大きなショックを抱え込む。やがて父の遺した企業を受け継いだブルースだったが、強いトラウマと親の仇への復讐心は消えず、犯罪者の心理を知るため自ら罪人となる。そんな彼はある日、デュガードという男と運命的な出会いを果たし、不正と闘うことを決意。そして彼の薦めにより、ヒマラヤの奥地に潜む“影の同盟”なる自警団のもとで心身を鍛え、心の闇を解放する。こうして彼は、ゴッサム・シティへと舞い戻って来る。街は悪の組織と暴力がはびこり、腐敗が進んでいた。自らの使命に確信を持ったブルースは、全身黒いコスチュームを身に纏ったバットマンとなり、巨悪と対峙する道を選ぶのだった。',
      popularity: 50.482,
      poster_path: '/mx5zvtwTTWBwlNzBZCKvbcjJFIH.jpg',
      release_date: '2005-06-10',
      title: 'バットマン ビギンズ',
      video: false,
      vote_average: 7.7,
      vote_count: 16280,
    },
    {
      adult: false,
      backdrop_path: '/3xnfbtgJmVotajqM57iKib3ftnT.jpg',
      genre_ids: [878, 80, 28, 16, 9648],
      id: 40662,
      original_language: 'en',
      original_title: 'Batman: Under the Red Hood',
      overview: '',
      popularity: 42.118,
      poster_path: '/dEujs48u3n4cmh15ITtHHDFxSaS.jpg',
      release_date: '2010-07-27',
      title: 'バットマン:アンダー・ザ・レッドフード',
      video: false,
      vote_average: 7.8,
      vote_count: 1098,
    },
    {
      adult: false,
      backdrop_path: '/moYfd709S8xnb8Od2yeG5VBt9Bp.jpg',
      genre_ids: [28, 14],
      id: 364,
      original_language: 'en',
      original_title: 'Batman Returns',
      overview:
        'クリスマス近いゴッサムシティ。市民は謎の怪人ペンギンの出現に戦慄していた。一方、市の電力を独占しようとたくらむ実業家マックスは、秘密を知った秘書セリーナを殺害しようと窓から突き落す。命を取りとめた彼女は女性の犯罪者、キャットウーマンとなって社会とマックスに復讐を誓う。やがて手を組んだキャットウーマンとペンギンは、マスコミ操作でネガティブキャンペーンを張り、邪魔者バットマンを追放しようたくらむ。',
      popularity: 34.99,
      poster_path: '/t9NsqijUnyMnAPiVngLjO5DjPSh.jpg',
      release_date: '1992-06-19',
      title: 'バットマン リターンズ',
      video: false,
      vote_average: 6.8,
      vote_count: 4648,
    },
    {
      adult: false,
      backdrop_path: '/mX3WOJPBzzl4kj4xU5lL7qfD6C3.jpg',
      genre_ids: [28, 12, 14],
      id: 209112,
      original_language: 'en',
      original_title: 'Batman v Superman: Dawn of Justice',
      overview:
        'スーパーマンが、メトロポリスでゾッド将軍と死闘を繰り広げてから2年。当時、現場に居合わせたブルース・ウェインは人知を超えた戦いで出た被害により友人や部下を失い、ゴッサム・シティでバットマンとして悪と戦う彼にとって看過できない事件だった。スーパーマンは世界各地で人々を救い続けていた。新聞記者クラーク・ケントとして過ごす日常では、同僚ロイス・レインとの仲もさらに深まっていた。大企業レックス・コーポレーション社長レックス・ルーサーは異星人とそのテクノロジーに強い興味を抱き２年前に墜落した宇宙船や異星人の遺体を独自に研究していた。',
      popularity: 76.008,
      poster_path: '/m4qy5aDJtF5CSdBiyCL2c1xfsMh.jpg',
      release_date: '2016-03-23',
      title: 'バットマン vs スーパーマン ジャスティスの誕生',
      video: false,
      vote_average: 5.9,
      vote_count: 14870,
    },
    {
      adult: false,
      backdrop_path: '/iZGSm0E3oOgkcmwKqAm5hTDpHAL.jpg',
      genre_ids: [10751, 16, 12],
      id: 177271,
      original_language: 'en',
      original_title: 'Lego Batman: The Movie - DC Super Heroes Unite',
      overview:
        'バットマンたちヒーローの活躍を描いたLEGO長編アニメ。「マン・オブ・ザ・イヤー」の授賞式に現れたジョーカーたち。ダークナイトは彼らを一網打尽にするが、実はゴッサムの権力構造を変える秘密兵器を握っていたのはレックス・ルーサーだった。',
      popularity: 2.536,
      poster_path: '/zpK8M3V6dAqPFLsMTrhvqcylmuw.jpg',
      release_date: '2013-05-21',
      title: 'LEGO バットマン：ザ・ムービー ＜ヒーロー大集合＞',
      video: false,
      vote_average: 6.5,
      vote_count: 182,
    },
  ],
  total_pages: 1,
  total_results: 9,
};

describe('userSlice/toggleFavoritesList', () => {
  const initialState: UserState = {
    searchResults: null,
    favoritesList: [],
    isLoading: false,
  };

  test('取得が成功した場合、取得したデータを正しく格納できているか。', () => {
    const action = { type: fetchSearchResults.fulfilled.type, payload: mockData };
    const state = reducer(initialState, action);
    expect(state.isLoading).toEqual(false);
    expect(state.searchResults).toEqual(mockData);
  });

  test('取得が失敗した場合、取得したデータを破棄し、エラーメッセージを格納しているか。', () => {
    const action = { type: fetchSearchResults.rejected.type, payload: mockData };
    const state = reducer(initialState, action);
    expect(state.searchResults).toBeNull();
    expect(state.error).toBeTruthy();
    expect(state.isLoading).toEqual(false);
  });

  test('取得中はLoadingフラグが有効になっているか。', () => {
    const action = { type: fetchSearchResults.pending.type, payload: mockData };
    const state = reducer(initialState, action);
    expect(state.searchResults).toBeNull();
    expect(state.error).toBe('');
    expect(state.isLoading).toEqual(true);
  });
});
