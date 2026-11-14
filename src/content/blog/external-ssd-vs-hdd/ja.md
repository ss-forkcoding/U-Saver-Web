---
title: "外付けSSDとHDDの違い:速度、電源、耐衝撃性、iPhoneでの使い方"
description: "外付けSSDとHDDの違いを、記録方式、速度、電源、衝撃、容量あたりの価格で比較しました。iPhoneに接続するときの電源条件とProRes収録の基準も、Appleの案内をもとにまとめています。"
date: 2026-11-15
---

## この記事の要点

外付けSSDとHDDの違いは、データを記録する部品にあります。HDDは回転するディスクに磁気で記録し、SSDは動く部品のないフラッシュメモリに記録します。

この違いから、SSDは速く衝撃に強くなります。HDDは同じ容量を安く買えます。

iPhoneにつなぐときは、電源の条件がいちばん大きく違います。Appleは、外付けHDDをiPhoneで使うときは外部電源が必要な場合が多いと案内しています。

「写真のバックアップ用に外付けHDDとSSDのどちらを買うべき?」「SSDは認識されるのにHDDだけ反応しない」。どちらも同じ違いから生まれる疑問です。この記事は、メーカー、Apple、Microsoftの資料をもとに2つを比べます。特定の製品は試しておらず、おすすめもしません。

## 外付けSSDとHDDは何が違いますか?

記録方式が違い、ほかの違いの多くはそこから生まれます。

| 項目 | 外付けHDD | 外付けSSD |
| --- | --- | --- |
| 記録方式 | 回転するディスクと読み書きヘッド | フラッシュメモリ、動く部品なし |
| 速度 | 大きなファイルやストリーミングに十分 | より速い |
| 衝撃 | 動く部品がある | 動く部品がなく衝撃に強い |
| 起動時の電力 | ディスクを回すため多く使う | 少なく済む |
| 容量あたりの価格 | 安い | 高い |
| 寿命 | 長く使われてきた技術 | 書き込み回数に限りがある |

記録方式、衝撃、容量あたりの価格、寿命は[Western DigitalのHDDとSSDの比較](https://www.westerndigital.com/solutions/ssd-vs-hdd)によるものです。速度と起動時の電力は[SolidigmのSSDとHDDの比較](https://solidigm.com/products/technology/ssd-vs-hdd-which-is-best-for-you.html)によるものです。前者はHDDメーカー、後者はSSDメーカーの資料です。

## 外付けSSDとHDDの速度はどれくらい違いますか?

Solidigmは、SSDは電気回路を使い動く部品がないため、HDDより速いと説明しています。HDDはヘッドをディスク上で動かしてデータを探します。

ただし外付けの場合、速度はドライブだけでは決まりません。iPhoneの端子、ケーブル、ドライブのうち、いちばん遅いものが速度を決めます。

| iPhone | 最大規格 | 条件 |
| --- | --- | --- |
| iPhone 15 Pro、16 Pro、17 Pro、18 Proの各モデル、iPhone Duo | USB 3.2 Gen 2、最大10Gbit/s | 10Gbit/sに対応するUSB 3ケーブルを別に使います |
| そのほかのUSB-C iPhone | USB 2 | iPhoneに付属のケーブルもUSB 2の速度です |
| LightningのiPhone | USB 2 | アダプタに関係なくUSB 2の速度です |

出典は[AppleのUSB-Cの案内](https://support.apple.com/en-us/105099)と[Appleのカメラアダプタの案内](https://support.apple.com/en-us/118280)です。USB 2で接続すると、速いSSDでも規格の上限は超えられません。

この記事では外付けHDDとSSDの転送速度を測っていません。製品を比べるときは、メーカーの仕様にある読み書き速度を確認してください。

## iPhoneにつなぐとき、外付けSSDとHDDは何が違いますか?

電源の条件が違います。形式と使うアプリは同じです。基準は[Appleの外部ストレージの案内](https://support.apple.com/guide/iphone/external-storage-devices-iph95baac91f/ios)です。

| 確認すること | 外付けHDD | 外付けSSD |
| --- | --- | --- |
| 電源 | 外部電源が必要な場合が多いです | Appleの案内に個別の電源の記載はありません |
| 形式 | APFS、APFS(暗号化)、Mac OS拡張(HFS+)、exFAT、FAT32、FAT | 同じです |
| パーティション | データパーティションが1つ | 同じです |
| 使うアプリ | ファイルアプリ | 同じです |

外付けHDDが自分で電源を取れない場合、Appleは次の構成を案内しています。

1. USB-CのiPhoneは、電源付きUSBハブを経由して接続します。
2. LightningのiPhoneは、USB電源アダプタをつないだLightning - USB 3カメラアダプタを経由して接続します。

接続の手順は[iPhoneに外付けHDDをつなぐ方法](/blog/ja/iphone-hard-drive-connect)と[iPhone 外付けSSDの使い方](/blog/ja/iphone-external-ssd-connect)にまとめました。挿しても表示されないときは[外付けドライブが認識されないときの対処](/blog/ja/iphone-drive-not-detected)をご覧ください。

## ProResで収録するなら、どちらを選べばよいですか?

Appleの基準に合う書き込み速度と電力を先に確認します。[AppleのProResの案内](https://support.apple.com/en-us/109041)によると、iPhone 15 Pro、16 Pro、17 Pro、18 Proの各モデルは、USB-Cで接続した外部ストレージにProResを直接収録できます。

| 条件 | Appleの案内の基準 |
| --- | --- |
| 形式 | exFAT。パスワードで暗号化したドライブには対応しません |
| ケーブル | 10Gbit/s以上のUSB 3ケーブル |
| 4K60 ProRes | 書き込み速度が毎秒220MB以上、最大消費電力4.5W |
| 4K120 ProRes | 書き込み速度が毎秒440MB以上、最大消費電力4.5W、収録のたびに先にフォーマットし直す |
| 速度が足りないとき | Slow Recording Speedのメッセージが出ることがあります |

外付けHDDでもSSDでも、この基準を製品の仕様で確認してください。Solidigmの説明どおりHDDは起動時に多くの電力を使うので、4.5Wの条件もあわせて見てください。Appleは、ProResファイルはHEVCファイルの最大30倍の大きさになると説明しています。

## 写真や動画のバックアップにはどちらが合いますか?

使い方で選びます。下の表は、上のメーカー資料の違いを用途に当てはめたものです。

| こんなとき | 合うほう | 理由 |
| --- | --- | --- |
| 大量のデータを長く保管する | 外付けHDD | 容量あたりの価格が安いです |
| 持ち歩いてよく接続する | 外付けSSD | 動く部品がなく衝撃に強いです |
| ハブなしでiPhoneにつなぐ | 外付けSSD | 外付けHDDは外部電源が必要な場合が多いです |
| 大きな動画をよく移す | 外付けSSD | 速いです。ただしiPhoneがUSB 3に対応していると差が大きくなります |

iPhoneでは、どちらにも同じ方法で写真と動画を保存します。項目ごとの手順は[iPhoneを外付けHDDにバックアップする方法](/blog/ja/backup-iphone-external-drive)と[iPhoneを外付けSSDにバックアップする方法](/blog/ja/backup-iphone-to-ssd)にあります。4GBを超える動画を保存するなら、[exFATフォーマット方法](/blog/ja/format-usb-exfat)を参考にexFATでフォーマットしてください。

## Windowsでの管理方法も違いますか?

違います。[Microsoftのドライブ最適化の案内](https://support.microsoft.com/en-us/windows/defragment-your-windows-10-pc-048aefac-7f1f-4632-d48a-9700c4ec702a)によると、WindowsはHDDをデフラグし、SSDにはTRIMを実行します。

1. タスクバーの検索に「defrag」と入力します。
2. 「ドライブのデフラグと最適化」を開きます。
3. ドライブを選び、「分析」か「最適化」を選びます。

Windowsは既定で週に1回、ドライブを自動で最適化します。スケジュールは同じ画面の「スケジュールされた最適化」で変えられます。

## USBメモリに定期的に保存したいときは?

次のアプリはUSBメモリを前提に紹介します。外付けSSDと外付けHDDでの動作は確認していません。

NextGenAIが作ったU-Saverは、一般的なUSBメモリに写真、ビデオ、連絡先を保存するアプリで、exFATかFAT32のUSBメモリを使い、iOS 26以降で動作します。U-SaverはApp Storeでの公開を準備中で、韓国での価格は4,900ウォンの買い切りです。U-Saverはメッセージ、アプリのデータ、iPhoneの設定を保存せず、U-Saverで保存したUSBメモリの内容は暗号化されません。購入前に[U-Saverを使う前に確認したい6つのこと](/blog/ja/before-you-buy)をご確認ください。

## 外付けSSDとHDDの違いのよくある質問

### 外付けSSDはいつも外付けHDDより速いですか?

ドライブ自体はSSDのほうが速いです。ただしUSB 2で接続するiPhoneでは、規格が速度を制限します。iPhoneのモデルとケーブルもあわせて確認してください。

### iPhoneで外付けHDDが表示されないのはなぜですか?

まず電源を確認してください。Appleは、外付けHDDは外部電源が必要な場合が多いと案内しています。電源付きUSBハブか、USB電源アダプタをつないだUSB 3カメラアダプタを使ってください。

### NTFSの外付けHDDやSSDはiPhoneで使えますか?

NTFSはAppleの外部ストレージの形式一覧にありません。データを別の場所に移してから、exFATでフォーマットしてください。

### SSDは書き込み回数のせいですぐ壊れますか?

Western Digitalの比較表には、SSDは書き込み回数に限りがあると書かれています。寿命は製品ごとに違うので、メーカーの仕様と保証条件を確認してください。大切なデータは1か所だけに置かないでください。

### 外付けHDDは衝撃に弱いですか?

HDDはディスクとヘッドが動く構造です。Western Digitalは、SSDは動く部品がないため衝撃に強いと説明しています。
