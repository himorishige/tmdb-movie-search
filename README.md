# はじめに

このページは[TMDb](https://www.themoviedb.org/)のAPIを利用した映画検索のWebアプリケーションのリポジトリです。

![注目の映画一覧___TMDb_Search](https://user-images.githubusercontent.com/71954454/125216126-25dded00-e2f8-11eb-8c4f-9f8820b5c1a2.png)

## 利用技術

- React
- ChakraUI
- Redux Toolkit
  - CreateAsyncThunk
  - RTK Query
- Storybook
- AWS Amplify

今回のアプリケーションは、Reactをベースに、ChakraUIキットを利用してUIを組み込んでおり、レイアウト、コンポーネントの確認用には部分的にStorybookを利用しています。  
状態管理にはRedux Toolkitを利用しており、お気に入りリスト、検索結果の取得データ、APIへの読み込み状況をRedux Storeへ格納しています。なお、お気に入りリストについては並行してLocalStorageにも保存を行い、データの永続化を行っています。  
トップページのトレンド一覧、ムービーの詳細情報についてはRTK Queryを利用してAPIからの情報を取得しています。一度取得した情報についてはRTK Queryのキャッシュ機能を利用し短期間での再読み込みが発生しないようにしています。

## 初期設定

### 環境変数ファイルの設定

起動するにあたり`.env`ファイルの設置が必要です。  
TMDbのAPI KEYを追記の上プロジェクトルートに配置してください。

[TMDb API Overview](https://www.themoviedb.org/documentation/api)

```bash
SKIP_PREFLIGHT_CHECK=true # Storybook用
REACT_APP_THE_MOVIE_DB_API_KEY=******** # TMDbのAPI KEY
REACT_APP_API_BASE_URL=https://api.themoviedb.org/3/ # TMDbのAPI URL
REACT_APP_API_IMAGE_BASE_URL=https://image.tmdb.org/t/p/w500 # TMDbの画像配信URL
```

### パッケージ類のインストール

```bash
$ yarn install
```

## 起動方法

### 開発モードでの起動

```bash
$ yarn start
```

[http://localhost:3000](http://localhost:3000)でアクセスできます。

### ビルドファイルの構築

```bash
$ yarn build
```

`build`ディレクトリにビルドファイルが書き出されます。

### Storybookの起動

```bash
$ yarn storybook
```

[http://localhost:6006](http://localhost:6006)でアクセスできます。

### Jestの起動

```bash
$ yarn test
```

各ディレクリに配置したテストコードが実行されます。
