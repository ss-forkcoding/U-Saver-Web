---
title: "How to Choose an SD Card Reader: Card Size, Capacity Standard, UHS Bus, and Connector"
description: "Choose an SD card reader by four things: card size, capacity standard (SDHC, SDXC, SDUC), bus interface (UHS-I, UHS-II, SD Express), and connector. Here is what to check for a computer or an iPhone, based on SD Association and Apple documents."
date: 2026-11-18
---

## Key takeaways

Choose an SD card reader by four things: card size, capacity standard, bus interface, and connector. A reader is a host device too. If the reader supports an older standard than your card, it may not read the card or may not reach the card's speed.

The SD Association says SDXC cards work only in SDXC or SDUC host devices. SDUC cards work only in SDUC host devices. The larger the card, the more the reader's capacity standard matters.

To copy at UHS-II speed, you need a UHS-II reader. The USB port between the reader and the computer also caps transfer speed.

"Which SD card reader should I buy?" "Why do readers vary so much in price?" These questions come up when people move cards to a computer or an iPhone. This guide doesn't recommend specific products. It shows how to read the markings on a reader and match them to your card and device.

## What should you look for in an SD card reader?

Check four things. The first three depend on the card. The last depends on your computer or iPhone.

| Factor | What to check | If it doesn't match |
| --- | --- | --- |
| Card size | SD slot, microSD slot, or an adapter | The card doesn't fit |
| Capacity standard | SDHC, SDXC, or SDUC support | The card may not work |
| Bus interface | UHS-I, UHS-II, or SD Express marking | The card works, but not at its speed |
| Connector | USB-A, USB-C, or Lightning, and port speed | It won't connect, or the port caps speed |

Card information is on the front of the card and on the package. To read card markings, see [how to read SD card speed classes](/blog/en/sd-card-speed-class) and [types of SD cards](/blog/en/what-is-sd-card).

## Do you need an SD card reader if your computer has an SD slot?

Not if the slot supports your card's standard. The [SD Association FAQ](https://www.sdcard.org/consumers/faq/) says that if your computer has an SD slot, you can transfer data by inserting the card. If there is no slot, or the slot is built to an earlier SD standard than your card, it suggests a USB reader/writer or a card adapter.

Mac slots differ by model. [Apple's Mac SD card slot guide](https://support.apple.com/HT204384) lists the following.

| Item | Apple's guide |
| --- | --- |
| Supported cards | MMC, Default Speed, High Speed, UHS-I |
| UHS-II models | Mac Studio (2022 or later), MacBook Pro (2021 or later), iMac (2020), iMac Pro |
| miniSD, microSD | Use an adapter |
| Not supported | SDIO cards |
| Caution | Cards thicker than 2.1 mm might damage the slot |

A UHS-I slot still reads a UHS-II card, just not at UHS-II speed. If you need UHS-II speed, use a separate UHS-II reader.

## How do capacity standards affect SD card reader compatibility?

The [SD Association's capacity guide](https://www.sdcard.org/consumers/about-sd-memory-card-choices/sd-sdhc-sdxc-and-sduc-card-capacity-choices/) lists which cards work in which host devices. A reader counts as a host device.

| Reader or device standard | Cards it can use |
| --- | --- |
| SD | SD |
| SDHC | SD, SDHC |
| SDXC | SD, SDHC, SDXC |
| SDUC | SD, SDHC, SDXC, SDUC |

The [SD Association's capacity table](https://www.sdcard.org/developers/sd-standard-overview/capacity-sd-sdhc-sdxc-sduc/) defines SDHC as over 2 GB up to 32 GB, SDXC as over 32 GB up to 2 TB, and SDUC as over 2 TB up to 128 TB. A 64 GB card is SDXC, so it needs a reader that supports SDXC or higher. File systems by standard are in [SDHC card vs SDXC vs SDUC](/blog/en/sdhc-vs-sdxc).

The same guide says to confirm a device's support by its SD logo or user manual before inserting a card. Look for SDXC or SDUC on the reader's package or in the manufacturer's manual.

## Which SD card reader works best with a UHS-II card?

A reader with the same bus interface as the card. The [SD Association's bus interface page](https://www.sdcard.org/consumers/about-sd-memory-card-choices/bus-interface-speed-standards-for-large-size-data-transfer/) says any high speed card can be used in UHS-I, UHS-II, or SD Express host devices. Performance comes from a card that matches the fastest interface the host supports.

| Card | Reader | Result |
| --- | --- | --- |
| UHS-I | UHS-I | UHS-I performance |
| UHS-I | UHS-II | Works; UHS-I performance |
| UHS-II | UHS-I | Works; no UHS-II performance |
| UHS-II | UHS-II | UHS-II performance |
| SD Express | No SD Express support | Works over the UHS-I interface |

The SD Express row comes from the [SD Association FAQ](https://www.sdcard.org/consumers/faq/), which says SD Express cards maintain the UHS-I interface. Maximum bus speeds and pin layouts are in [UHS SD card guide](/blog/en/uhs-sd-card).

If you use only UHS-I cards, a UHS-II reader won't make them faster. This guide didn't measure actual reader speeds.

## Can an SD card reader read microSD cards?

If the reader has a microSD slot, insert the card directly. If it has only an SD slot, use an adapter that converts microSD to SD size. Apple also says to use an adapter for microSD cards in a Mac's SD slot.

An adapter doesn't change the card's capacity standard or bus interface. Check the reader's SDXC and UHS markings the same way. Sizes and adapters are covered in [micro SD card and SD card](/blog/en/microsd-vs-sd).

## What should you check in an SD card reader for iPhone?

[Apple's camera adapter guide](https://support.apple.com/en-us/118280) lists the Lightning to SD Card Camera Reader and the Apple USB-C to SD Card Reader. Supported cards are SDSC, SDHC, SDXC, miniSD, microSD, and MMC.

| What to check | Apple's guide |
| --- | --- |
| Connector | A reader that fits the iPhone's Lightning or USB-C port |
| Card format | A single data partition formatted as exFAT, FAT32, FAT, APFS, or macOS Extended (HFS+) |
| Transfer speed | iPhone 15 Pro, 15 Pro Max, 16 Pro, and 16 Pro Max support USB 3 speeds; other devices and adapters use USB 2 speeds |

Format requirements come from [Apple's external storage guide](https://support.apple.com/guide/iphone/external-storage-devices-iph95baac91f/ios). NTFS isn't on the list. To change the format, see [how to format an SD card](/blog/en/format-sd-card).

This guide didn't test third-party readers on an iPhone. Connection steps and photo imports are in [how to use an iPhone SD card reader](/blog/en/iphone-sd-card-reader). Reader types are covered in [SD card reader for iPhone: the complete guide](/blog/en/iphone-sd-card-guide).

## How to choose an SD card reader, step by step

1. Note the card's size (SD or microSD), capacity standard (SDHC, SDXC, SDUC), and bus interface (UHS-I, UHS-II, SD Express) from the front of the card.
2. Check your computer's manual for an SD slot and whether it supports that standard. If it does, you don't need a reader.
3. Check the port you'll plug into. Computers use USB-A or USB-C. iPhones use Lightning or USB-C.
4. Check the reader's manual for your card's capacity standard. An SDXC card needs SDXC or higher.
5. If the card is UHS-II and you want that speed, choose a reader marked UHS-II.
6. For microSD, get a reader with a microSD slot or an SD adapter.
7. After the first connection, confirm the card appears and files open.

If the card shows a different capacity than its label, see [how to spot a fake SD card](/blog/en/fake-sd-card).

## How do you save iPhone photos to a USB flash drive?

The app below is described for USB flash drives. Connection requirements are in [how to use a flash drive with an iPhone](/blog/en/iphone-flash-drive-guide).

U-Saver, made by NextGenAI, is an app that saves photos, videos, and contacts to a regular USB drive formatted as exFAT or FAT32, and it requires iOS 26 or later. U-Saver is being prepared for release on the App Store, and in Korea it costs 4,900 KRW as a one-time purchase. U-Saver doesn't save messages, app data, or iPhone settings, and drives saved with U-Saver aren't encrypted. Before you buy, read [Six things to check before using U-Saver](/blog/en/before-you-buy).

## FAQ: choosing an SD card reader

### Will an SDHC reader read an SDXC card?

According to the SD Association, SDHC host devices use only SD and SDHC cards. For an SDXC card, use a reader that supports SDXC or higher.

### Does a UHS-II reader make a UHS-I card faster?

No. A UHS-I card runs over the UHS-I interface. The SD Association says UHS-II devices perform best with cards that support at least UHS-II.

### My Mac has an SD slot. Do I still need a reader?

It depends on the card. In Apple's guide, only Mac Studio (2022 or later), MacBook Pro (2021 or later), iMac (2020), and iMac Pro have UHS-II slots. On other models, use a UHS-II reader if you need UHS-II speed.

### Can I use a third-party SD card reader with an iPhone?

This guide didn't test third-party readers. Apple's guide covers Apple camera adapters. If you use a third-party reader, first check that the card appears under Locations in the Files app.

### Will files copy at the maximum speed on the reader's box?

Not necessarily. The SD Association says a card's actual speed depends on the card's performance and the device. The USB port between the reader and the computer also caps transfer speed.
