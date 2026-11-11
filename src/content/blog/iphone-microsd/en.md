---
title: "Micro SD for iPhone: How to Connect a microSD Card, Move Photos, and Check the Format"
description: "To use a micro SD for iPhone, you need a card reader with a microSD slot. Here are the readers, card formats by capacity, and the steps in the Photos and Files apps, based on Apple and SD Association guides."
date: 2026-11-12
---

## Key takeaways

To use a micro SD for iPhone, put the card in a card reader and plug the reader into your iPhone's charging port. iPhone has no card slot.

microSD is on the supported list in Apple's guide to camera adapters. But a microSD card is smaller than a regular SD card, so first check that your reader has a microSD slot.

Once connected, use the Photos app to import or export photos and videos, and the Files app to move documents and other files.

"Can I open the microSD from my old phone on my iPhone?" "How do I get action cam videos onto my iPhone?" These are common questions about using a micro SD for iPhone. Connecting a regular SD card is covered in [Can you plug an SD card into an iPhone?](/blog/en/iphone-sd-card-slot) This post covers what's different with microSD.

## Can you use a micro SD card with an iPhone?

Yes. [Apple's guide to camera adapters](https://support.apple.com/en-us/118280) lists SDSC, SDHC, SDXC, miniSD, microSD, and MMC as supported cards.

You connect it through a card reader. [Apple's guide to external storage](https://support.apple.com/guide/iphone/external-storage-devices-iph95baac91f/ios) says to attach an SD card reader to the charging port using a compatible connector or adapter.

According to the [SD Association FAQ](https://www.sdcard.org/consumers/faq/), microSD and SD cards differ only in form factor, size, number of pins, and whether they have a write-protect switch. The logic and electronics are identical. So you use a microSD card on iPhone the same way you use an SD card.

## How is microSD different from an SD card?

Size is the main difference. These figures come from the [SD Association's capacity standards](https://www.sdcard.org/developers/sd-standard-overview/capacity-sd-sdhc-sdxc-sduc/).

| Card | Size | When connecting to iPhone |
| --- | --- | --- |
| SD | 32 x 24 x 2.1 mm | Insert into a reader with an SD slot |
| microSD | 11 x 15 x 1.0 mm | Insert into a reader with a microSD slot |

A microSD card won't fit directly into a reader that has only an SD slot. Before you buy a reader, check its description for a microSD slot. We haven't tested third-party card readers, and we don't recommend any specific product.

## Which reader does your iPhone need?

iPhone 15 and later models use USB-C. Earlier models use Lightning. [Apple's USB-C guide](https://support.apple.com/en-us/105099) lists "SD cards using SD card adapters" among the devices you can connect.

| iPhone connector | Reader named in Apple's guide | What to check for microSD |
| --- | --- | --- |
| USB-C | USB-C to SD Card Camera Reader | Whether the reader has a microSD slot |
| Lightning | Lightning to SD Card Camera Reader | Whether the reader has a microSD slot |

The full walkthrough is in [how to use an iPhone SD card reader](/blog/en/iphone-sd-card-reader).

## What format does a micro SD card need?

iPhone reads storage formatted as exFAT, FAT32, FAT, APFS, or macOS Extended (HFS+), with a single data partition. The source is [Apple's guide to external storage](https://support.apple.com/guide/iphone/external-storage-devices-iph95baac91f/ios).

Each microSD capacity class has a default file system, according to the [SD Association's capacity standards](https://www.sdcard.org/developers/sd-standard-overview/capacity-sd-sdhc-sdxc-sduc/).

| Label on the card | Capacity | Default file system | On iPhone's format list |
| --- | --- | --- | --- |
| microSD | Up to 2 GB | FAT12, FAT16 | Yes, as FAT |
| microSDHC | Over 2 GB up to 32 GB | FAT32 | Yes |
| microSDXC | Over 32 GB up to 2 TB | exFAT | Yes |

FAT32 can't store a file larger than 4 GB. For long videos, use an exFAT card. A card formatted as NTFS on another device isn't on Apple's list, so you'll need to reformat it. The steps are in [how to format a USB drive to exFAT](/blog/en/format-usb-exfat). Formatting erases everything on the card.

## How to view a microSD card on iPhone

These steps follow [Apple's guide to external storage](https://support.apple.com/guide/iphone/external-storage-devices-iph95baac91f/ios).

1. Insert the microSD card into the reader's microSD slot. Don't force it; it fits only one way.
2. Plug the reader into your iPhone's USB-C or Lightning connector.
3. Open the Files app and tap Browse.
4. Tap the card's name below Locations. If you don't see Locations, tap Browse again.
5. When you're done, remove the reader from the charging port.

Steps for copying and moving files are in [how to use an iPhone SD card reader](/blog/en/iphone-sd-card-reader).

## How to import photos from a microSD card to iPhone

Photos and videos on a microSD card from a camera or action cam go through the Photos app. These steps follow [Apple's import guide](https://support.apple.com/guide/iphone/import-and-export-photos-and-videos-iph480caa1f3/ios).

1. Connect the reader with the card to your iPhone.
2. Open the Photos app and tap Import.
3. Select the photos and videos, then select your import destination.
4. Tap Import All, or tap the items you want, tap Import, then tap Import Selected.
5. When it's done, choose whether to keep or delete them on the card.

According to [Apple's guide to camera adapters](https://support.apple.com/en-us/118280), this imports content captured by digital cameras. Files that were renamed, edited, or copied onto the card may not import. Try copying those in the Files app.

## How to move iPhone photos to a microSD card

The same Apple guide explains how to export photos and videos to a connected memory card.

1. Connect the reader with the card to your iPhone.
2. In the Photos app, select the photos and videos.
3. Tap the Share button, then tap Export Unmodified Original.
4. Tap the card below Locations, then tap Save.

For edited photos, the unmodified original is exported. Photos in the Hidden album won't be transferred if the album is locked. More limits to check first are in [how to transfer photos from iPhone to an SD card](/blog/en/iphone-photos-to-sd-card).

## What should you check if the card doesn't appear?

This combines [Apple's guide to camera adapters](https://support.apple.com/en-us/118280) with the external storage guide.

| Order | What to check | What to do |
| --- | --- | --- |
| 1 | Card slot | Make sure the microSD is fully inserted in the reader's microSD slot |
| 2 | Reader | Disconnect the reader, wait 30 seconds, then reconnect |
| 3 | Card | Remove the card, wait 30 seconds, then reinsert it |
| 4 | iPhone | Restart your iPhone |
| 5 | Card format | Check the format and partition count on a Mac or PC. NTFS isn't on Apple's list |
| 6 | Another card | If a different card works, the data on the original card may be the problem |

## Want regular backups to a USB drive?

The app below is described for USB drives. We haven't checked how it works with card readers. USB connections and formats are covered in the [iPhone external storage guide](/blog/en/iphone-usb-drive-guide).

U-Saver, made by NextGenAI, is an app that saves photos, videos, and contacts to a regular USB drive formatted as exFAT or FAT32, and it requires iOS 26 or later. U-Saver is being prepared for the App Store, and in Korea it costs 4,900 KRW as a one-time purchase. U-Saver doesn't save messages, app data, or iPhone settings, and the contents of a USB drive saved with U-Saver aren't encrypted. Before you buy, read [Six things to check before using U-Saver](/blog/en/before-you-buy).

## FAQ: micro SD for iPhone

### Can I insert a microSD card directly into my iPhone?

No. iPhone has no card slot, so you connect a card reader with a microSD slot to the charging port.

### Can a reader with only an SD slot read microSD?

A microSD card is smaller than the SD slot and won't fit as is. Adapters that bring microSD up to SD size exist, but we haven't tested that combination. After connecting, check that the card appears under Locations in the Files app.

### Can I use a 128 GB microSD card with iPhone?

Under the SD Association standard, microSDXC cards over 32 GB use exFAT by default. exFAT is on Apple's list of external storage formats.

### Can I open a microSD card from an Android phone on my iPhone?

If the card's format is on Apple's list and it has a single data partition, you can open it in the Files app. If not, copy the data somewhere else and then format the card.

### Is the content of a microSD card encrypted?

[Microsoft's comparison table](https://learn.microsoft.com/en-us/windows/win32/fileio/filesystem-functionality-comparison) lists no file system level encryption for exFAT. microSD cards are small and easy to lose, so store them carefully.
