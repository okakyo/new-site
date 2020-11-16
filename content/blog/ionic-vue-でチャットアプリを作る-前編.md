---
title: Ionic/ Vue でチャットアプリを作る (前編)
date: 2020-10-26T06:44:12.717Z
thumbnail: noimage.png
tags:
  - Ionic
  - TypeScript
  - Vue
  - チュートリアル
  - Firebase
isOpen: true
description: この記事では, Ionic / Vue を利用してチャットアプリを構築するまでの内容をまとめました。
---
チュートリアルで作成したリポジトリはこちらで公開しています。

## 環境構築

まず、@Ionic/cli をインストールして、新しいプロジェクトを立ち上げます。

```bash
npm i -g @ionic/cli
ionic start ionic-vue tabs --capacitor --type=vue
```

プロジェクトを生成後、動作確認するために、

```
cd ionic-vue
npm run serve
```

これにより、`http://localhost:8080` に移動で、次の画面が生成されていたら成功です。

![localhost](/img/post/ionic-vue-serve.png "running-view")

## コンポーネントの設計

続いて、コンポーネント周りを設計します。コンポーネントを管理することで、Web 上で使われる似たようなフレームワークを使いまわせたり、共有することができるようになります。

個人的には、Atoms はすでにCSS フレームワーク(Vuetify, Bulma など) がすでに定義されているものとして、　molecules, organisms, templates でディレクトリを管理します。pages はすでに別のディレクトリで表示されるものとしています。

## チャット回りの設計

### コンポーネント設計

コンポーネントの設計には、**Atomic Design** を採用しました。
![Atomic Design](https://bradfrost.com/wp-content/uploads/2013/06/atomic-design.png)



## 最後に

以上が、チュートリアルの前半になります。次回は、これらの情報をもとに、テストコードの実装、ならびにGitHub Actions を利用したCI/CD　を実装していきたいと考えています。

## 参考文献