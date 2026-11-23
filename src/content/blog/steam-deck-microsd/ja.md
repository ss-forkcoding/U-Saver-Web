---
title: "Steam Deck SDカードの選び方と使い方:使えるmicroSD、フォーマット、ゲームの移動"
description: "Steam Deck SDカードの選び方をValveの公式案内でまとめました。UHS-IのmicroSD規格、カードの入れかたとフォーマット、ext4形式、内蔵ストレージのゲームをmicroSDに移す手順を確かめます。"
date: 2026-11-23
---

## この記事の要点

Steam Deck SDカードとして使えるのはmicroSDカードです。Valveは、UHS-I(クラス3以上)のmicroSDカードがサポートされていると案内しています。UHS-IIとUHS-IIIのカードも動作すると予想されていますが、高い転送速度はサポートされていません。

カードはSteam Deckで先にフォーマットしてから使います。Steam Deckはカードをext4形式にフォーマットします。フォーマットすると、カードにあったデータは消えます。

この記事は製品の順位ではなく、規格を基準にカードを選びます。特定のカードを試しておらず、推奨もしません。

「Steam Deckに入れるカードは何でもいいの?」「ゲームをカードに移すにはどこを開くの?」。Steam Deckに初めてカードを入れるときによく出る疑問です。この記事では、Steam Deck SDカードの規格、入れかたとフォーマット、ゲームの移しかたをValveの公式文書で確かめます。ほかの機器での使い方は[マイクロSDカードの使い方](/blog/ja/how-to-use-microsd)にまとめました。

## Steam Deck SDカードはどう選べばいいですか?

Valveが公開している規格に合わせます。下の表は[SteamサポートのSteam Deckガイド](https://help.steampowered.com/ja/faqs/view/69E3-14AF-9764-4C28)と[Steam Deckの技術仕様](https://www.steamdeck.com/ja/tech)をまとめたものです。

| 確かめること | Valveの案内 |
| --- | --- |
| カードの大きさ | microSD。スロットは本体の底面にあります |
| 容量規格 | SD、SDHC、SDXCに対応 |
| バス方式 | UHS-I(クラス3以上)のカードをサポート |
| UHS-II、UHS-IIIのカード | 動作すると予想。高い転送速度はサポートされない |
| ファイルシステム | Steam Deckがext4にフォーマット |

Valveは「クラス3」がカードのどの表示を指すかを書いていません。カードに書かれたU3は、UHSスピードクラス3の表示です。速度の表示は[SDカードのV30とは?](/blog/ja/sd-card-speed-class)に、UHS-IとUHS-IIの違いは[UHSスピードクラスとは?](/blog/ja/uhs-sd-card)にまとめました。

UHS-IIのカードは、Steam DeckではUHS-IIの速度で動きません。値段が高いなら、Valveの案内に合うUHS-Iのカードで足りるかを先に考えてください。

## Steam Deck SDカードは何TBまで使えますか?

この記事で確かめたValveの文書には、最大容量が書かれていません。技術仕様はSD、SDHC、SDXCに対応するとだけ書いています。SDXC規格の上限は2TBです。容量規格の違いは[SDXCとは?](/blog/ja/sdhc-vs-sdxc)にあります。

大容量のカードには偽物がまじりやすくなります。新しいカードの実際の容量は[SDカードの偽物の見分け方](/blog/ja/fake-sd-card)で確かめてください。

## Steam DeckにmicroSDカードを入れてフォーマットするには?

本体の設定でフォーマットします。[Valveの案内](https://help.steampowered.com/ja/faqs/view/69E3-14AF-9764-4C28)の手順です。

1. カードを本体底面のスロットに挿します。
2. Steamボタンを押して「設定」を開きます。
3. 「システム」→「SDカードのフォーマット」を選びます。
4. 終わるまで待ちます。Valveは、完了まで数分かかる場合があると書いています。

フォーマットすると、カードの元のデータは消えます。カメラやスマホで使っていたカードなら、写真と動画を先に別の場所へコピーします。パソコンでカードを開く方法は[SDカードをパソコンにつなぐ方法](/blog/ja/sd-card-to-pc)にあります。

## Steam Deckでフォーマットしたカードはどんな形式ですか?

ext4です。[Steam DeckのFAQ](https://www.steamdeck.com/ja/faq)は、microSDカードが大文字小文字を区別しない(casefold)機能付きのext4を使い、Steam Deckがカードを適切な形式にフォーマットすると書いています。

| 機器 | カードの形式 | 根拠 |
| --- | --- | --- |
| Steam Deck | ext4 | [Steam DeckのFAQ](https://www.steamdeck.com/ja/faq) |
| iPhone | APFS、Mac OS拡張、exFAT、FAT32、FATを読める | [Appleの外部ストレージの案内](https://support.apple.com/guide/iphone/external-storage-devices-iph95baac91f/ios) |

Appleが挙げるiPhoneの対応形式に、ext4はありません。この記事は、Steam DeckでフォーマットしたカードをiPhoneで試していません。Steam Deckのカードをほかの機器で使い直すには、その機器でフォーマットし直す必要がある場合があります。ほかの機器向けのフォーマットは[マイクロSDカードフォーマット方法](/blog/ja/format-microsd)にあります。

## 内蔵ストレージのゲームをSDカードに移せますか?

移せます。[Valveの案内](https://help.steampowered.com/ja/faqs/view/69E3-14AF-9764-4C28)によると、Steam Deckは標準で内蔵ストレージを使い、接続したストレージは「Steam」→「設定」→「ストレージ」で管理します。

移す手順は[Steamのゲームのインストールフォルダー移動の案内](https://help.steampowered.com/en/faqs/view/4BD4-4528-6B2E-8327)に従います。この案内はSteamクライアント全体の文書です。

1. カードをSteam Deckでフォーマットし、ストレージとして使えるようにします。
2. 「Steam」→「設定」→「ストレージ」を開きます。
3. ゲームが入っているドライブ(内蔵ストレージ)を選びます。
4. 移すゲームを選び、「移動」を選びます。

同じSteamの案内によると、「移動」を使えば、インストール済みのゲームをアンインストールせずに移せます。

## Nintendo Switch用のカードとは何が違いますか?

どちらもmicroSDですが、形式と公式の規格案内が違います。

| 項目 | Steam Deck | Nintendo Switch |
| --- | --- | --- |
| バス方式 | UHS-I。UHS-IIの速度はサポートされない | UHS-I。UHS-II規格には対応しない |
| 公式の最大容量 | 確かめたValveの文書には記載なし | microSDXCの2TB |
| フォーマット | Steam Deckがext4にフォーマット | 本体の設定でフォーマット |
| 根拠 | [Valveの案内](https://help.steampowered.com/ja/faqs/view/69E3-14AF-9764-4C28) | [Switch SDカードの使い方](/blog/ja/switch-microsd) |

Switchで使っていたカードは、Steam Deckでフォーマットし直してから使います。フォーマットすると、Switchが保存した画面写真やソフトのデータは消えます。

## Steam DeckがSDカードを認識しないときは?

Valveの案内と、一般的なカードの確認を合わせた手順です。

1. カードがmicroSDで、UHS-Iに対応しているか確かめます。
2. 「設定」→「システム」→「SDカードのフォーマット」をもう一度実行します。カードのデータは消えます。
3. カードをパソコンにつなぎ、容量が正しく表示されるか確かめます。
4. 表示の容量と実際の容量が違うなら、[SDカードの偽物の見分け方](/blog/ja/fake-sd-card)で確かめます。
5. パソコンでも読めないなら、[microSDが認識しない・フォーマットできないときの確認手順](/blog/ja/sd-card-not-working)に従います。

## iPhoneの写真もSDカードに移したいときは?

iPhoneはSteam Deckと違う形式を使います。iPhoneでカードを使うには、exFATなどiPhoneが読める形式でフォーマットしたカードを、カードリーダーでつなぎます。つなぎかたは[micro SDをiPhoneで使う方法](/blog/ja/iphone-microsd)と[SDカードリーダーのiPhoneでの使い方](/blog/ja/iphone-sd-card-reader)にあります。USBメモリに移す方法は[iPhoneの写真をUSBに移す方法](/blog/ja/iphone-photos-to-usb)にまとめました。

## Steam Deck SDカードのよくある質問

### Steam Deck SDカードは何を基準に選びますか?

microSDであること、UHS-Iに対応していること、Valveが書いた「クラス3以上」を基準にします。UHS-IIのカードはSteam Deckでは速くなりません。この記事は特定の製品を推奨しません。

### パソコンでexFATにフォーマットしたカードをそのまま使えますか?

Valveは、Steam Deckで使う前にカードをフォーマットする必要があると案内しています。Steam Deckの「SDカードのフォーマット」でフォーマットし直してください。

### カードをフォーマットすると内蔵ストレージのゲームも消えますか?

「SDカードのフォーマット」の対象はカードです。内蔵ストレージにインストールしたゲームはカードにありません。カードに移したゲームはカードと一緒に消えます。

### Steam DeckはmicroSDから起動できますか?

できます。[Steam DeckのFAQ](https://www.steamdeck.com/ja/faq)は、microSDからの起動をサポートしていると書いています。

### UHS-IIのカードは使えませんか?

Valveは動作すると予想しています。ただし、UHS-IIの高い転送速度はサポートされていません。
