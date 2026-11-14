---
title: "iPhoneのバックアップを外付けHDDに取る方法:直接つなぐ手順とパソコン経由の手順"
description: "iPhoneのバックアップを外付けHDDに取るには、写真、ビデオ、連絡先、ファイルを項目ごとにHDDへコピーします。iPhoneに直接つなぐ手順、MacやWindowsパソコンを経由する手順、電源の条件をAppleとMicrosoftの案内をもとにまとめました。"
date: 2026-11-14
---

## この記事の要点

iPhoneのバックアップを外付けHDDに取るには、写真、ビデオ、連絡先、ファイルを項目ごとにHDDへコピーします。方法は2つです。HDDをiPhoneに直接つないでファイルアプリで保存するか、MacやWindowsパソコンに写真を取り込むときに保存先としてHDDを選びます。

Appleの案内では、外付けハードドライブをiPhoneで使うときは外部電源が必要な場合が多いと説明しています。直接つないで使えないときは、まず電源を確認してください。

メッセージ、アプリのデータ、iPhoneの設定をHDDに移す標準の方法はありません。この3つはiCloudかパソコンへのバックアップで保管してください。

「家にある外付けHDDにiPhoneの写真を移せる?」「HDDを挿してもiPhoneに表示されない」。HDDは容量が大きく、写真やビデオをまとめて置くのに向いています。この記事では、HDDをバックアップ用に準備する方法、2つの保存手順、消す前に確認することを順にまとめます。

## iPhoneのバックアップを外付けHDDに取る方法は?

パソコンがあるかどうかと、HDDの電源の取り方で方法が決まります。

| 区分 | iPhoneに直接つなぐ | パソコン経由で保存 |
| --- | --- | --- |
| 必要なもの | 外付けHDD、端子に合うケーブルかアダプタ | MacまたはWindowsパソコン、iPhoneのケーブル |
| 使うアプリ | 写真アプリ、連絡先アプリ、ファイルアプリ | Macのイメージキャプチャ、Windowsのフォトアプリ |
| 入るもの | 写真、ビデオ、連絡先、ファイル | 写真、ビデオ |
| 電源 | HDDによっては外部電源が必要です | HDDはパソコンにつなぎます |
| HDDの形式 | Appleの一覧にある形式 | パソコンが読める形式 |

パソコンがなければ、直接つなぐ方法を使ってください。HDDがiPhoneに表示されない、またはNTFSでフォーマットし直しにくいなら、パソコン経由が合っています。パソコンなしでできるバックアップは[パソコンなしのiPhoneバックアップ](/blog/ja/backup-iphone-without-computer)にまとめました。

## iPhoneのバックアップ用に外付けHDDを準備する方法

直接つなぐ場合、HDDは次の条件を満たす必要があります。[Appleの外部ストレージの案内](https://support.apple.com/guide/iphone/external-storage-devices-iph95baac91f/ios)によると、外部ストレージはデータパーティションが1つである必要があります。形式はAPFS、APFS(暗号化)、macOS拡張(HFS+)、exFAT、FAT32、FATのいずれかです。

| 確認すること | 基準 | やること |
| --- | --- | --- |
| 形式 | Appleの一覧にある形式 | NTFSならデータを移してからフォーマットし直すか、パソコン経由にします |
| パーティション | データパーティションが1つ | 複数あればMacかパソコンで1つにします |
| ファイルサイズ | FAT32は1ファイル4GiBまで | 長い動画はexFATかAPFSに保存します |
| 電源 | HDDが自分で電源を取れるか | 取れなければ下の電源の方法を使います |

FAT32の4GiBの制限は[Microsoftのファイルシステム比較表](https://learn.microsoft.com/en-us/windows/win32/fileio/filesystem-functionality-comparison)によるものです。同じ表では、exFATの1ファイルの最大サイズは2^64-1バイトです。WindowsパソコンでもHDDを開くなら、exFATが合っています。フォーマットするとHDDのデータはすべて消えるので、先に別の場所へコピーしてください。手順は[exFATフォーマット方法](/blog/ja/format-usb-exfat)にあります。USBメモリを例にしていますが、MacのディスクユーティリティとWindowsの手順は外付けHDDでも同じです。

## iPhoneに外付けHDDをつなぐと電源は必要ですか?

必要な場合が多いです。[Appleの外部ストレージの案内](https://support.apple.com/guide/iphone/external-storage-devices-iph95baac91f/ios)では、外付けハードドライブをiPhoneで使うときは外部電源が必要な場合が多いと説明しています。HDDが自分で電源を取れない場合は、次の方法を使います。

| iPhoneの端子 | Appleの案内にある電源の取り方 |
| --- | --- |
| USB-C | 電源付きのUSBハブを経由してつなぎます |
| Lightning | Lightning - USB 3カメラアダプタにUSB電源アダプタをつなぎます |

この記事では特定のHDDを試しておらず、おすすめもしません。消費電力も測っていません。メーカーの仕様に電源の条件があれば、それに従ってください。ケーブルとアダプタの種類は[iPhone 外付けSSDの使い方](/blog/ja/iphone-external-ssd-connect)と[iPhoneのOTG接続の条件](/blog/ja/iphone-otg-usb)にまとめました。

## iPhoneに外付けHDDを直接つないでバックアップする手順

HDDをつなぎ、ファイルアプリで「ブラウズ」をタップします。「場所」の下にHDDの名前が出たら始めます。

### 写真とビデオをHDDに保存します

[AppleのiCloud写真のダウンロードの案内](https://support.apple.com/en-us/111762)に沿った手順です。

1. 写真アプリで「ライブラリ」を開きます。
2. 「選択」をタップし、保存する写真とビデオを選びます。
3. 共有ボタンをタップし、「未編集のオリジナルを書き出す」をタップします。
4. ファイルの画面で戻る矢印をタップし、「場所」の下のHDDを選びます。
5. 「保存」をタップします。

iCloud写真を使っている場合、オリジナルのダウンロードにはWi-Fiが必要です。大きな動画を移すコツは[iPhoneの動画をUSBに移す方法](/blog/ja/iphone-videos-to-usb)をご覧ください。

### 連絡先とファイルをHDDに保存します

連絡先は[Appleの連絡先の書き出しの案内](https://support.apple.com/guide/iphone/export-contacts-iph075ddebf2/ios)に沿って、連絡先アプリのリストを長押しして「書き出す」を選びます。送信や保存の方法で「"ファイル"に保存」を選び、HDDを選びます。

書類やファイルは、ファイルアプリで長押しして「コピー」を選びます。HDDのフォルダを開き、空いているところを長押しして「ペースト」を選びます。出典は[Appleのファイル転送の案内](https://support.apple.com/guide/iphone/transfer-files-iphone-a-storage-device-iphe9aff429a/ios)です。項目別の手順は[iPhoneバックアップを外付けSSDに取る方法](/blog/ja/backup-iphone-to-ssd)と同じです。

## パソコン経由でiPhoneの写真を外付けHDDにバックアップする手順

HDDをパソコンにつないでから、iPhoneをケーブルでつなぎます。iPhoneに「このコンピュータを信頼しますか?」と出たら「信頼」をタップします。

### Macではイメージキャプチャを使います

[Appleのイメージキャプチャの案内](https://support.apple.com/guide/image-capture/transfer-images-to-your-mac-imgcp1003/mac)に沿った手順です。

1. Macでイメージキャプチャを開きます。
2. サイドバーの「デバイス」の下でiPhoneを選びます。
3. 読み込む写真とビデオを選びます。
4. ウインドウ下部の読み込み先のメニューで「その他」を選び、HDDのフォルダを選びます。
5. 「ダウンロード」か「すべてをダウンロード」をクリックします。

Appleの案内によると、Live Photosは静止画のファイルとビデオのファイルの2つとして保存されます。

### Windowsパソコンではフォトアプリを使います

[Appleの写真転送の案内](https://support.apple.com/en-us/120267)では、Microsoft StoreからAppleデバイスアプリを入れるよう説明しています。そのあとは[Microsoftの写真の取り込みの案内](https://support.microsoft.com/en-us/windows/apps/photos/import-photos-and-videos-from-phone-to-pc)に沿った手順です。

1. iPhoneの電源を入れ、ロックを解除します。Microsoftの案内では、ロックされたデバイスはパソコンが見つけられません。
2. スタートボタンを選び、フォトアプリを開きます。
3. 「インポート」を選び、つないだiPhoneを選びます。
4. 取り込む項目を選び、保存先としてHDDのフォルダを選びます。

iCloud写真を使っている場合は、パソコンに取り込む前にオリジナルをiPhoneにダウンロードしておきます。Appleの案内では、Windowsとの互換性を高めるには設定アプリの「カメラ」>「フォーマット」で「互換性優先」を選ぶよう説明しています。この設定はこれから撮る写真とビデオにだけ適用されます。

## 外付けHDDへのバックアップとAppleのバックアップの違いは?

HDDへのバックアップは、ファイルのコピーを別に置くことです。Appleのバックアップは、iPhoneの情報と設定もあわせて保存します。

| 区分 | 外付けHDDへのコピー | iCloudバックアップ | パソコンへのバックアップ |
| --- | --- | --- | --- |
| 保存先 | 外付けHDD | iCloud | MacまたはWindowsデバイス |
| 入るもの | 写真、ビデオ、連絡先、ファイル | デバイスの設定、ホーム画面の配置など、iCloudと同期されない情報 | iPhoneのデータ |
| メッセージ、アプリのデータ | 入りません | Appleのバックアップ範囲に従います | Appleのバックアップ範囲に従います |
| 新しいiPhoneへの移行 | ファイルを1つずつ入れ直します | バックアップで移行できます | バックアップで移行できます |

出典は[AppleのiPhoneのバックアップの案内](https://support.apple.com/guide/iphone/back-up-iphone-iph3ecf67d29/ios)です。Appleの案内では、パソコンへのバックアップはMacに保存すると説明しています。バックアップの保存先を外付けHDDに変える方法は、Appleの案内にはありません。新しいiPhoneにそのまま移すならAppleのバックアップを使い、写真とビデオのコピーはHDDに別に置いてください。

## 外付けHDDにバックアップしたあとに確認する5つのこと

次の5つのうち1つでも「いいえ」なら、iPhoneの写真を消さないでください。

1. HDDの写真がファイルアプリかパソコンで開けます。
2. いちばん長い動画が最後まで再生されます。
3. HDDに保存した写真とビデオの数が、選んだ数と同じです。
4. 連絡先カードのファイルがHDDに入っています。
5. HDDが壊れたりなくなったりしても困らないよう、別の場所にもう1つコピーがあります。

[Microsoftの比較表](https://learn.microsoft.com/en-us/windows/win32/fileio/filesystem-functionality-comparison)では、exFATとFAT32はファイルシステムレベルの暗号化に対応していません。exFATのHDDを持っている人は誰でも内容を開けるので、保管場所に気をつけてください。

## USBメモリに定期的に保存するには?

次のアプリはUSBメモリを前提に紹介します。外付けHDDでの動作は確認していません。

NextGenAIが作ったU-Saverは、一般的なUSBメモリに写真、ビデオ、連絡先を保存するアプリで、exFATかFAT32のUSBメモリを使い、iOS 26以降で動作します。U-SaverはApp Storeでの公開を準備中で、韓国での価格は4,900ウォンの買い切りです。U-Saverはメッセージ、アプリのデータ、iPhoneの設定を保存せず、U-Saverで保存したUSBメモリの内容は暗号化されません。購入前に[U-Saverを使う前に確認したい6つのこと](/blog/ja/before-you-buy)をご確認ください。

USBメモリにバックアップする手順は[iPhoneバックアップをUSBメモリに取る方法](/blog/ja/backup-iphone-to-usb)にあります。

## iPhoneバックアップと外付けHDDのよくある質問

### iPhone全体を外付けHDDにバックアップできますか?

Appleの案内では、iPhoneのバックアップの保存先はiCloudとパソコンです。外付けHDDには、写真、ビデオ、連絡先、ファイルを項目ごとに保存します。

### HDDを挿してもiPhoneに表示されません。

まず電源を確認してください。USB-CのiPhoneなら電源付きのUSBハブを、LightningのiPhoneならLightning - USB 3カメラアダプタにUSB電源アダプタをつないで試します。それでも表示されなければ、Macかパソコンで形式とパーティションの数を確認してください。

### NTFSの外付けHDDにiPhoneの写真をバックアップできますか?

NTFSはAppleの外部ストレージの形式一覧にないため、直接つなぐ方法では使えません。Windowsパソコンを経由すれば、形式を変えずにフォトアプリで取り込めます。直接つないで使うなら、データを別の場所に移してからexFATにフォーマットしてください。

### 4GBを超える動画がHDDに保存できません。

HDDがFAT32の可能性が高いです。FAT32は1ファイルが4GiBを超えられません。exFATかAPFSにフォーマットしてから保存し直してください。

### 外付けHDDへのバックアップにメッセージは含まれますか?

含まれません。メッセージを保管するなら、iCloudかパソコンでiPhoneをバックアップしてください。
