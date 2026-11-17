---
title: "A2 SD Card vs A1: What the App Performance Class Means"
description: "An A2 SD card meets the App Performance Class 2 minimums for running apps stored on the card. Here are the A1 and A2 IOPS requirements, when you actually get A2 performance, how A1 and A2 differ from speed classes, and how to choose, based on SD Association documents."
date: 2026-11-18
---

## Key takeaways

An A2 SD card meets App Performance Class 2, a minimum performance level for running apps and app data stored on the card. A1 is the earlier, lower level.

The requirements cover small random reads and writes (IOPS) plus sustained sequential writing. A1 means 1500 read IOPS and 500 write IOPS. A2 means 4000 read IOPS and 2000 write IOPS. Both require 10 MB/s sustained sequential writing.

You only get A2 performance when both the device and the card support A2. If either side is A1, expect A1 performance.

"Is an A2 SD card always faster than A1?" "Does my camera need A2?" These questions come up often when you shop for a card. This guide explains what A1 and A2 mean, the minimum numbers, how they differ from other speed markings, and how to choose. For every marking on a card, see [types of SD cards](/blog/en/what-is-sd-card).

## What are the A1 and A2 app performance classes?

SD cards were long used mainly for photos, videos, and music. That kind of work is mostly sequential writing of large files. Installing apps on a card changes that. Apps read and write small pieces of data all over the card.

The [SD Association's Application Performance Class page](https://www.sdcard.org/developers/sd-standard-overview/application-performance-class/) says the class was created for this need. It assures a combination of random and sequential performance.

| Class | Defined in | Notes |
| --- | --- | --- |
| A1 (Application Performance Class 1) | SD Physical 5.1 | The first app performance level |
| A2 (Application Performance Class 2) | SD Physical 6.0 | Higher than A1, using Command Queuing and Cache functions |

The SD Association says the App Performance Class applies to UHS SDHC and SDXC cards. Capacity standards are covered in [SDHC card vs SDXC vs SDUC](/blog/en/sdhc-vs-sdxc), and bus interfaces in [UHS SD card guide](/blog/en/uhs-sd-card).

## What are the A1 and A2 minimum speeds?

| Class | Random read | Random write | Sustained sequential write |
| --- | --- | --- | --- |
| A1 | 1500 IOPS | 500 IOPS | 10 MB/s |
| A2 | 4000 IOPS | 2000 IOPS | 10 MB/s |

The A1 figures come from Table 1 of the [SD Association white paper](https://www.sdcard.org/downloads/pls/latest_whitepapers/Application_Peformance_Class_White_Paper.pdf). The A2 figures appear next to A1 in a footnote of the [Samsung PRO Plus microSD data sheet](https://download.semiconductor.samsung.com/resources/data-sheet/2023_samsung_data_sheet_microsd_card_pro_plus_v1.1.pdf).

IOPS is the number of read or write commands handled per second. The SD Association defines it here as the number of 4 KB read or write commands per second. These are minimums measured under conditions set by the specification. The Samsung data sheet adds that performance may vary by host device.

## Does an A2 SD card give A2 performance in every device?

No. The SD Association says A2 performance is available only when an A2 host is combined with an A2 card. When A1 and A2 are mixed, at least A1 performance is available.

| Device | Card | Expected performance |
| --- | --- | --- |
| Supports A2 | A2 | A2 |
| Supports A2 | A1 | A1 |
| Doesn't support A2 | A2 | At least A1 |
| Doesn't support A2 | A1 | A1 |

A device reads the card's app performance class from a field in the card's SD Status register. As a user, you compare the A1 or A2 symbol on the card with what the device supports.

## How do A1 and A2 differ from speed classes?

Both are speed markings, but they measure different things.

| Marking | What it measures | Best fit |
| --- | --- | --- |
| Speed class (Class 10, U3, V30) | Minimum sequential write speed | Video recording |
| App performance class (A1, A2) | Random read/write IOPS plus sequential write speed | Running apps installed on the card |
| Bus interface (UHS-I, UHS-II) | Maximum speed of the link between card and device | Large transfers |

Video recording writes large data at a steady rate, so speed class is what counts. Running apps means handling small data at random, so IOPS is what counts. How to read speed classes is covered in [Class 10 SD card, U3, and V30](/blog/en/sd-card-speed-class).

One card can carry U3, V30, and A2 at the same time. Each marking promises something different. For a video recording device, check the speed class in the manual first.

## Why does random performance matter for apps?

The SD Association white paper points to Adoptable Storage in Android Marshmallow. This feature lets users run apps from the installed microSD card.

According to the white paper, Android ran a benchmark on the card before adopting it. If the card performed at less than 25 percent of the internal memory, a pop-up said the card appeared to be slow. The white paper says Google later released an update that tests against a fixed threshold instead.

The white paper says A1 cards are set at a level that passes this test. It adds that Google can't guarantee the result, because the benchmark also depends on the device environment.

## How do you choose between an A1 and an A2 SD card?

1. Check the memory card section of your device's manual for an A1 or A2 recommendation.
2. In the same section, check the supported capacity standard (SDHC, SDXC) and card size (SD, microSD). Sizes are covered in [micro SD card and SD card](/blog/en/microsd-vs-sd).
3. If you plan to install and run apps from the card, choose A1 or higher.
4. If the manual says the device supports A2, expect A2 performance from an A2 card.
5. If video recording is the main use, match the speed class in the manual (U3, V30, and so on) first.
6. If storing photos and videos is the main use, A1 or A2 isn't required. Look at capacity and speed class first.

This guide doesn't recommend specific products. Real performance varies by card even within the same class. This guide didn't measure IOPS for any card.

## Do you need an A2 SD card for an iPhone?

A1 and A2 describe performance for running apps installed on the card. An iPhone uses a card reader to move photos, videos, and files from an SD card.

[Apple's camera adapter guide](https://support.apple.com/en-us/118280) lists SDSC, SDHC, SDXC, and microSD cards as supported. The same guide says iPhone 15 Pro, iPhone 15 Pro Max, iPhone 16 Pro, and iPhone 16 Pro Max support USB 3 transfer speeds, and all other adapters and iOS devices use USB 2 speeds. The guide lists no A1 or A2 requirement. This guide didn't measure speeds by class on an iPhone.

The steps are in [how to use an iPhone SD card reader](/blog/en/iphone-sd-card-reader).

## How do you save iPhone photos to a USB flash drive?

The app below is described for USB flash drives. Connection requirements are in [how to use a flash drive with an iPhone](/blog/en/iphone-flash-drive-guide).

U-Saver, made by NextGenAI, is an app that saves photos, videos, and contacts to a regular USB drive formatted as exFAT or FAT32, and it requires iOS 26 or later. U-Saver is being prepared for release on the App Store, and in Korea it costs 4,900 KRW as a one-time purchase. U-Saver doesn't save messages, app data, or iPhone settings, and drives saved with U-Saver aren't encrypted. Before you buy, read [Six things to check before using U-Saver](/blog/en/before-you-buy).

## FAQ: A2 SD card and A1

### Is an A2 SD card always faster than an A1 card?

No. The SD Association says A2 performance needs both an A2 host and an A2 card. In a device without A2 support, expect at least A1 performance.

### Can a card without A1 or A2 run apps?

A card without the marking doesn't promise the app performance class minimums. The white paper says a device can run its own benchmark to judge a card that doesn't indicate a class.

### Does a camera need an A2 SD card for video?

Speed class is the standard for video recording. The [SD Association FAQ](https://www.sdcard.org/consumers/faq/) lists U3 and V30 for Full HD to 4K recording. Follow the marking in your camera's manual.

### Do A1 and A2 differ in sequential write speed?

No. The Samsung data sheet lists 10 MB/s sustained sequential write for both. The difference is random read and write IOPS.

### Do microSD cards have A1 and A2?

Yes. The Samsung PRO Plus microSD data sheet lists the A1 and A2 requirements. The SD Association says the class applies to UHS SDHC and SDXC cards.
