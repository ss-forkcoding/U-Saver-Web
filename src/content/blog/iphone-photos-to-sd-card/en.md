---
title: "Transferring Photos from iPhone to SD Card: Steps, Card Formats, and Limits"
description: "A guide to transferring photos from iPhone to SD card: the reader you need, which card format to use, how to export originals from Photos, and what to check before you delete anything, based on Apple's guides."
date: 2026-11-11
---

## Key takeaways

Transferring photos from iPhone to SD card takes a card reader. Insert the card into the reader, plug the reader into your iPhone's charging port, then use Export Unmodified Original in the Photos app to save to the card.

Edited photos are saved as the unmodified original. If the Hidden album is locked, the photos in it won't be transferred.

A FAT32 card can't store a file larger than 4 GB. Use an exFAT card if you're moving long videos too.

"I want to keep my iPhone photos on the same SD card as my camera shots." "My iPhone is full and I don't have a computer." These are common reasons people look into transferring photos from iPhone to SD card. This guide covers only the direction from iPhone to card. To bring photos from a card into your iPhone, see [how to use an iPhone SD card reader](/blog/en/iphone-sd-card-reader).

## What do you need for transferring photos from iPhone to SD card?

iPhone has no SD card slot, so you need a card reader. [Apple's guide to external storage](https://support.apple.com/guide/iphone/external-storage-devices-iph95baac91f/ios) names the readers below. Both are sold separately.

| iPhone connector | Reader named in Apple's guide |
| --- | --- |
| USB-C | USB-C to SD Card Camera Reader |
| Lightning | Lightning to SD Card Camera Reader |

The card needs a single data partition formatted as APFS, macOS Extended (HFS+), exFAT, FAT32, or FAT. NTFS isn't on the list. Connector differences are covered in [Can you plug an SD card into an iPhone?](/blog/en/iphone-sd-card-slot)

We haven't tested third-party card readers. If you use one, first check that the card appears under Locations in the Files app.

## Which SD card should you transfer to?

The default file system depends on the card's capacity, according to [the SD Association's capacity standards](https://www.sdcard.org/developers/sd-standard-overview/capacity-sd-sdhc-sdxc-sduc/).

| Standard | Capacity | Default file system | Videos over 4 GB |
| --- | --- | --- | --- |
| SD | Up to 2 GB | FAT12, FAT16 | Can't be stored |
| SDHC | Over 2 GB up to 32 GB | FAT32 | Can't be stored |
| SDXC | Over 32 GB up to 2 TB | exFAT | Can be stored |
| SDUC | Over 2 TB up to 128 TB | exFAT | Can be stored |

[Microsoft's file system comparison](https://learn.microsoft.com/en-us/windows/win32/fileio/filesystem-functionality-comparison) lists a maximum file size of 4 GiB for FAT32. To move long videos to a card of 32 GB or less, reformat it as exFAT. Formatting erases everything on the card. See [how to format a USB drive to exFAT](/blog/en/format-usb-exfat) for the steps.

## How to transfer photos from iPhone to SD card

These steps follow [Apple's guide to importing and exporting photos](https://support.apple.com/guide/iphone/import-and-export-photos-and-videos-iph480caa1f3/ios).

1. Insert the SD card into the reader. It fits only one way, so don't force it.
2. Plug the reader into the USB-C or Lightning connector on your iPhone.
3. Open the Photos app and select the photos and videos you want to move.
4. Tap the Share button, then tap Export Unmodified Original.
5. Tap the card's name below Locations, then tap Save.
6. When it's done, open the card in the Files app and check that the photos open.

[Apple's guide to camera adapters](https://support.apple.com/en-us/118280) adds a step after step 4: tap the Back button until you see the Cancel button, then select the card in the Locations section. Use this if you don't see the card's name right away.

The same steps for a USB drive are in [how to transfer photos from iPhone to USB](/blog/en/iphone-photos-to-usb).

## Which photos get skipped or changed on the way to the SD card?

Here are the limits from Apple's guides.

| Situation | Result | What to do |
| --- | --- | --- |
| Photo edited in Photos | The unmodified original is saved | Check edited results separately |
| Hidden album is locked | Photos in it aren't transferred | Go to Settings > Apps > Photos and turn off Use Face ID, Use Touch ID, or Use Passcode |
| Video over 4 GB on a FAT32 card | It can't be stored | Use an exFAT card |
| Card has more than one partition | Your iPhone may not read it | Format it with a single data partition |

To move long videos on their own, see [how to transfer videos from iPhone to USB](/blog/en/iphone-videos-to-usb).

## What if the photos won't open on another device?

iPhone can save photos as HEIF and videos as HEVC. Devices that don't support these formats may not open the files on the card.

According to [Apple's guide to HEIF and HEVC](https://support.apple.com/en-us/116944), if you go to Settings > Camera > Formats and choose Most Compatible, new photos and videos are saved as JPEG and H.264. Photos you already took keep their format.

## What to check before deleting photos from your iPhone

- The photos and videos actually open when you browse the card in the Files app.
- The number of files on the card is the same as or larger than the number of items you selected.
- Important photos have another copy somewhere other than the SD card. If the card fails, you can lose the photos on it.

Be extra careful if iCloud Photos is on. [Apple's iCloud Photos guide](https://support.apple.com/en-us/108782) says that photos you delete on one device are deleted everywhere you use iCloud Photos. You can recover them from Recently Deleted for 30 days, then they're deleted permanently.

## Want to save to a USB drive on a regular basis?

The app below is described for USB drives. We haven't checked how it works with SD cards or card readers.

U-Saver, made by NextGenAI, is an app that saves photos, videos, and contacts to a regular USB drive formatted as exFAT or FAT32, and it requires iOS 26 or later. U-Saver is available on the App Store, and in Korea it costs 4,900 KRW as a one-time purchase. U-Saver doesn't save messages, app data, or iPhone settings, and the contents of a USB drive saved with U-Saver aren't encrypted. Before you buy, read [Six things to check before using U-Saver](/blog/en/before-you-buy).

## FAQ: transferring photos from iPhone to SD card

### Does moving photos to an SD card reduce quality?

Export Unmodified Original saves the original file before any edits. For edited photos, the original is saved, not the edited version, so check those separately.

### Can I use an SD card of 64 GB or more?

By the SD Association's standard, SDXC cards over 32 GB use exFAT. exFAT is on Apple's list of supported external storage formats.

### A video over 4 GB won't save to my SD card.

The card is probably FAT32. Copy what's on the card somewhere else, then format it as exFAT.

### Some photos didn't transfer to the SD card.

Check whether the Hidden album is locked. According to Apple's guide, photos in a locked Hidden album aren't transferred.

### How fast is the transfer?

Apple's guide to camera adapters says iPhone 15 Pro, iPhone 15 Pro Max, iPhone 16 Pro, and iPhone 16 Pro Max support USB 3 transfer speeds, and that all other adapters and devices use USB 2 speeds. We haven't measured actual speeds.

### Is the content of an SD card encrypted?

[Microsoft's comparison table](https://learn.microsoft.com/en-us/windows/win32/fileio/filesystem-functionality-comparison) lists no file system level encryption for exFAT or FAT32. If you lose the card, someone else can see your photos, so store it carefully.
