# DENX NEW Site

## 製作者: Oka Kyohei

## このリポジトリについて
DENX の公式サイトを新しく実装するために作ったリポジトリである

## 特徴
- DENX のホームページをGridsome を利用してサイトを構築する
- Gridsomeを利用して、サーバーレスによるサイト管理を行う。
- Netlify を利用して、DENX のサイトを管理する
- DENX の記事をNetlify CMS を利用して記事の管理を行う(任意)
- StoryBook を利用して、各コンポーネントを可視化できるようにした

## 使用ライブラリ
- Gridsome (including Vue.js)
- Pug
- Vuetify
- Netlify CLI
- StoryBook

## ライブラリについての説明
- .github 
    - Github Actions の設定やプルリクのテンプレを設定する
- .storybook 
    - Storybook の設定、コンポーネントのカタログを見れるように設定するためのファイル
- src
    - components：各Web コンポーネントをここに整理している。コンポーネント設計をもとに一部解釈を変更した
        - Card    ：カードのコンポーネント
        - layout  ：Grid のコンポーネントを定義している
        - lists   ：リストコンポーネントを定義している
        - menu    ： 
        - header  ：ヘッダーの定義
        - 
    - layout
        - `<Layout>` コンポーネントを定義している
    - pages
        - 各URL のページを定義している。Vue ファイルを定義すると自動レンダリングしてくれる
    - template
        - ここはよくわからん（公式サイトでみて）
    - favicon.png
        - Favicon のアイコン。.ico ではこのライブラリは定義することができないので、.png で実装すること
    - main.js
        - ここで、このリポジトリのVue.js を管理している
        - HTML のメタ情報をここで定義することができる

- static
    - 静的ファイルをここへデプロイする
- gridsome.config.js / gridosme.server.js 
    - どちらも拡張ライブラリの導入するために実装されている
    - 今回は、Vuetify, Pug を有効にするために定義した

- その他：
    - GGRKS🙌

