---
title: "SD Card Reader for iPhone: The Complete Guide to Cards, Formats, Photos, and Fixes"
description: "Everything to check before using an SD card reader for iPhone: the right reader for your port, supported cards and formats, Photos vs. Files, and what to do when the card doesn't show up."
date: 2026-11-13
---

## Key takeaways

An iPhone has no SD card slot. To use an SD card, you need an SD card reader for iPhone that plugs into the charging port.

Three things need to match: a reader that fits your iPhone's port, a single data partition, and a format on Apple's list.

SDXC cards over 32 GB use exFAT by default. A FAT32 card can't store a file larger than 4 GB.

"How do I get my camera photos onto my iPhone?" "I plugged in the reader and the card doesn't show up." These are the usual questions the first time someone uses an SD card with an iPhone. This guide covers the whole picture and links to detailed steps for each job.

## What can you do with an SD card reader for iPhone?

The app you use depends on the job. Find yours in the table and follow the link for detailed steps.

| What you want to do | App | Detailed guide |
| --- | --- | --- |
| Check for a slot and the reader you need | None | [Can you plug an SD card into an iPhone?](/blog/en/iphone-sd-card-slot) |
| Import camera photos to your iPhone | Photos | [How to use an iPhone SD card reader](/blog/en/iphone-sd-card-reader) |
| Save iPhone photos to the card | Photos | [Transferring photos from iPhone to SD card](/blog/en/iphone-photos-to-sd-card) |
| Use a microSD card | Photos, Files | [Micro SD for iPhone](/blog/en/iphone-microsd) |
| Change the card's format | Files | [How to format an SD card as FAT32 or exFAT](/blog/en/format-sd-card) |
| Reformat a microSD from another device | Files | [How to reformat a micro SD card](/blog/en/format-microsd) |
| Fix a card that isn't recognized | Files | [SD card corrupted or not recognized?](/blog/en/sd-card-not-working) |

## Which SD card reader for iPhone do you need?

Your iPhone's port decides the reader. According to [Apple](https://support.apple.com/en-us/105099), iPhone 15 and later models have a USB-C connector. Earlier models use Lightning.

| iPhone port | Reader named in Apple's guide |
| --- | --- |
| USB-C | USB-C to SD Card Camera Reader |
| Lightning | Lightning to SD Card Camera Reader |

Both readers are named in [Apple's guide to external storage](https://support.apple.com/guide/iphone/external-storage-devices-iph95baac91f/ios), and both are sold separately. We haven't tested third-party card readers, and this guide doesn't recommend a specific product. If you use one, check that the card appears under Locations in the Files app after you connect it.

## Which SD cards and formats can an iPhone read?

[Apple's camera adapter guide](https://support.apple.com/en-us/118280) lists SDSC, SDHC, SDXC, miniSD, microSD, and MMC cards as supported.

The card must have a single data partition formatted as APFS, APFS (encrypted), macOS Extended (HFS+), exFAT, FAT32, or FAT. That list comes from [Apple's guide to external storage](https://support.apple.com/guide/iphone/external-storage-devices-iph95baac91f/ios). NTFS isn't on it.

Each SD capacity standard has a default file system, according to the [SD Association](https://www.sdcard.org/developers/sd-standard-overview/capacity-sd-sdhc-sdxc-sduc/).

| Standard | Capacity | Default file system |
| --- | --- | --- |
| SD | Up to 2 GB | FAT12, FAT16 |
| SDHC | Over 2 GB up to 32 GB | FAT32 |
| SDXC | Over 32 GB up to 2 TB | exFAT |
| SDUC | Over 2 TB up to 128 TB | exFAT |

In [Microsoft's file system comparison](https://learn.microsoft.com/en-us/windows/win32/fileio/filesystem-functionality-comparison), the maximum file size is 4 GiB for FAT32 and 2^64-1 bytes for exFAT. To move long videos to a card, use exFAT. The steps to change the format are in [how to format an SD card](/blog/en/format-sd-card).

## How to connect an SD card to your iPhone for the first time

These steps follow [Apple's guide to external storage](https://support.apple.com/guide/iphone/external-storage-devices-iph95baac91f/ios).

1. Get a reader that fits your iPhone's port.
2. Check that the card is exFAT or FAT32, and reformat it if needed.
3. Plug the reader into the iPhone's charging port.
4. Insert the SD card into the reader. It fits only one way, so don't force it.
5. Open the Files app, tap Browse, and tap the card's name under Locations.
6. When you're done, remove the reader from the charging port.

An iPhone doesn't open a window when you connect a reader. If you don't see Locations, tap Browse again.

## Should you use Photos or Files?

It depends on what you're moving.

| What you want to do | App | Source |
| --- | --- | --- |
| Save camera photos and videos to your iPhone | Import in Photos | [Apple's camera adapter guide](https://support.apple.com/en-us/118280) |
| Save iPhone photos and videos to the card | Export Unmodified Original in Photos | [Apple's import and export guide](https://support.apple.com/guide/iphone/import-and-export-photos-and-videos-iph480caa1f3/ios) |
| Copy PDFs, documents, and other files | Files | [Apple's guide to external storage](https://support.apple.com/guide/iphone/external-storage-devices-iph95baac91f/ios) |
| Rename, erase, or format the card | Files | [Apple's file transfer guide](https://support.apple.com/guide/iphone/transfer-files-iphone-a-storage-device-iphe9aff429a/ios) |

When you export an edited photo, the unmodified original is saved. Photos in the Hidden album aren't transferred if the album is locked. The full steps are in [transferring photos from iPhone to SD card](/blog/en/iphone-photos-to-sd-card).

iPhone models with USB-C can format a card in the Files app. Touch and hold the card's name under Locations, tap Erase, and choose a format. Erasing deletes everything on the card. With a Lightning iPhone, use a Mac or a Windows PC.

## What if your iPhone doesn't show the SD card or won't import?

This list combines [Apple's camera adapter guide](https://support.apple.com/en-us/118280) and its guide to external storage.

| Order | What to check | What to do |
| --- | --- | --- |
| 1 | iOS version | If Photos has no Devices section, update to the latest iOS |
| 2 | Reader connection | Disconnect the reader, wait 30 seconds, then reconnect it |
| 3 | Card connection | Remove the card, wait 30 seconds, then insert it again |
| 4 | iPhone | Restart your iPhone |
| 5 | Format and partitions | Check the card on a Mac or PC. Reformat it if it's NTFS or has several partitions |
| 6 | Another card | Test a different card. If that one works, suspect the data on the original card |

Sometimes only some photos are missing. Apple camera adapters import only content captured by digital cameras. Files that were renamed, edited, or copied to the card might not import. Try copying those in the Files app instead. If the card itself isn't recognized, see [SD card corrupted or not recognized?](/blog/en/sd-card-not-working)

## How is an SD card different from a USB flash drive?

The formats an iPhone reads and the steps in the Files app are the same. The connection is what differs. An SD card needs a reader, while a USB-C flash drive plugs straight into a USB-C iPhone.

| | SD card | USB flash drive |
| --- | --- | --- |
| Connection | Needs a card reader | A USB-C drive plugs straight into a USB-C iPhone |
| Format | A format on Apple's list, single data partition | Same |
| App | Files, Photos | Same |

If you're moving a card straight from a camera, an SD card reader is the easier route. For flash drive connections and formats, see the [iPhone flash drive guide](/blog/en/iphone-usb-drive-guide).

## How do you back up to a USB drive regularly?

The app below is described for USB flash drives. We haven't tested how it works with card readers.

U-Saver, made by NextGenAI, is an app that saves photos, videos, and contacts to a regular USB drive formatted as exFAT or FAT32, and it requires iOS 26 or later. U-Saver is being prepared for release on the App Store, and in Korea it costs 4,900 KRW as a one-time purchase. U-Saver doesn't save messages, app data, or iPhone settings, and the contents of a USB drive saved with U-Saver aren't encrypted. Before you buy, read [Six things to check before using U-Saver](/blog/en/before-you-buy).

## SD card reader for iPhone FAQ

### Can I plug an SD card straight into my iPhone?

No. An iPhone has no SD card slot, so you connect a card reader to the charging port.

### Does an iPhone read microSD cards?

microSD is on the supported list in Apple's camera adapter guide. Check that your reader has a microSD slot. For details, see [Micro SD for iPhone](/blog/en/iphone-microsd).

### How fast is the transfer?

Apple's camera adapter guide says iPhone 15 Pro, iPhone 15 Pro Max, iPhone 16 Pro, and iPhone 16 Pro Max support USB 3 transfer speeds, and all other adapters and iOS devices use USB 2 speeds. We haven't measured real-world speeds.

### How do I save videos over 4 GB to a card?

Use an exFAT card. FAT32 can't store a single file over 4 GiB.

### Is an SD card encrypted?

[Microsoft's comparison table](https://learn.microsoft.com/en-us/windows/win32/fileio/filesystem-functionality-comparison) lists no file system level encryption for exFAT or FAT32. If you lose the card, someone else can read it, so store it carefully.
