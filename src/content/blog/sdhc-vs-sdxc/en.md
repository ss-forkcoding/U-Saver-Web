---
title: "SDHC Card vs SDXC vs SDUC: Capacity, File System, and Device Compatibility"
description: "An SDHC card holds up to 32 GB and uses FAT32. SDXC and SDUC cards hold more and use exFAT. Here is how the three capacity standards differ and how to check which one your device supports, based on SD Association documents."
date: 2026-11-17
---

## Key takeaways

An SDHC card holds more than 2 GB and up to 32 GB. SDXC goes up to 2 TB, and SDUC goes up to 128 TB. All three are SD capacity standards.

Each standard has a default file system. SDHC uses FAT32. SDXC and SDUC use exFAT.

Newer devices read older cards, but not the other way around. A device that supports only SDHC can't use an SDXC card.

"I bought a 64 GB card and my camera won't read it." "Should I buy an SDHC card or an SDXC card?" These questions come up often. This guide explains how the three standards differ and how to check which one your device supports. For every card type, see [types of SD cards](/blog/en/what-is-sd-card).

## What is an SDHC card, and how is it different from SDXC and SDUC?

The standards differ in capacity range and default file system. The table follows the [SD Association's capacity overview](https://www.sdcard.org/developers/sd-standard-overview/capacity-sd-sdhc-sdxc-sduc/).

| Standard | Capacity | Default file system |
| --- | --- | --- |
| SD | Up to 2 GB | FAT12, FAT16 |
| SDHC | Over 2 GB, up to 32 GB | FAT32 |
| SDXC | Over 32 GB, up to 2 TB | exFAT |
| SDUC | Over 2 TB, up to 128 TB | exFAT |

The logo on the front of the card shows its standard. microSD cards follow the same standards with "micro" added, such as microSDHC and microSDXC. Size differences are in [micro SD card and SD card](/blog/en/microsd-vs-sd).

## Can you use an SDXC card in an SDHC device?

No. The [SD Association's compatibility guide](https://www.sdcard.org/consumers/sd-sdhc-sdxc-and-sduc-card-capacity-choices/) lists which cards each type of device can use.

| Device standard | Cards it can use |
| --- | --- |
| SD device | SD |
| SDHC device | SD, SDHC |
| SDXC device | SD, SDHC, SDXC |
| SDUC device | SD, SDHC, SDXC, SDUC |

The [SD Association FAQ](https://www.sdcard.org/consumers/faq/) also says existing SD and SDHC devices aren't compatible with SDXC cards. SD and SDHC cards work in SDXC devices.

SDUC cards work only in SDUC devices. Before you buy a card larger than 2 TB, confirm that your device supports SDUC.

## How do you check which standard your device supports?

The SD Association recommends checking the SD logo on the device or the user manual before you insert a card.

1. Look for an SDHC, SDXC, or SDUC logo on the device or near the card slot.
2. If there's no logo, check the memory card section of the manual for supported standards and maximum capacity.
3. If the manual doesn't say, search the manufacturer's support page by model name.
4. Choose a card with the capacity you need within the supported standards.

Some manuals list a maximum capacity even for SDXC devices. Follow the number in the manual.

## Should you buy an SDHC card or an SDXC card?

If your device supports both, choose by capacity and file size.

| Situation | Standard to choose |
| --- | --- |
| Device supports up to SDHC only | SDHC card (32 GB or less) |
| You need more than 32 GB | SDXC |
| You save video files over 4 GB | SDXC, with exFAT as the default format |
| You need more than 2 TB | SDUC (requires an SDUC device) |

FAT32 stores files up to 4 GiB each, according to [Microsoft's file system comparison](https://learn.microsoft.com/en-us/windows/win32/fileio/filesystem-functionality-comparison). Copying a long video to an SDHC card can hit that limit.

Speed is marked separately from capacity. Also check the speed class, such as Class 10, U3, or V30, and the bus interface, such as UHS-I.

## Can you use an SDHC card or SDXC card with an iPhone?

Yes, with a card reader. The supported card list in [Apple's camera adapter guide](https://support.apple.com/en-us/118280) includes SDSC, SDHC, SDXC, miniSD, microSD, and MMC.

[Apple's external storage guide](https://support.apple.com/guide/iphone/external-storage-devices-iph95baac91f/ios) says a storage device must have only a single data partition. It must be formatted as APFS, macOS Extended (HFS+), exFAT, FAT32, or FAT. Both FAT32, the SDHC default, and exFAT, the SDXC default, are on the list.

The steps are in [how to use an iPhone SD card reader](/blog/en/iphone-sd-card-reader).

## How do you format an SD card to match its standard?

The SD Association recommends the SD Memory Card Formatter over the general formatting tools in operating systems. It says generic tools may result in less than optimal card performance.

1. Copy the photos and files on the card to another storage device first. Formatting erases everything on the card.
2. If the device you'll use the card in, such as a camera, has a format menu, format it there.
3. On a PC or Mac, use the SD Memory Card Formatter.

Detailed steps are in [how to format an SD card](/blog/en/format-sd-card) and [how to reformat a micro SD card](/blog/en/format-microsd). If the card isn't recognized, see [SD card corrupted or not recognized?](/blog/en/sd-card-not-working)

## How do you save iPhone photos to a USB flash drive?

The app below is described for USB flash drives. Connection requirements are in [how to use a flash drive with an iPhone](/blog/en/iphone-flash-drive-guide).

U-Saver, made by NextGenAI, is an app that saves photos, videos, and contacts to a regular USB drive formatted as exFAT or FAT32, and it requires iOS 26 or later. U-Saver is being prepared for release on the App Store, and in Korea it costs 4,900 KRW as a one-time purchase. U-Saver doesn't save messages, app data, or iPhone settings, and drives saved with U-Saver aren't encrypted. Before you buy, read [Six things to check before using U-Saver](/blog/en/before-you-buy).

## FAQ: SDHC card, SDXC, and SDUC

### Is a 32 GB card SDHC or SDXC?

In the SD Association table, SDHC covers over 2 GB up to 32 GB, and SDXC covers over 32 GB up to 2 TB. A 32 GB card falls in the SDHC range.

### What happens if I put a 64 GB SDXC card in an SDHC device?

According to the SD Association, SDHC devices use only SD and SDHC cards. The 64 GB SDXC card won't work in that device.

### Can I use an SDHC card in an SDXC device?

Yes. SDXC devices use SD, SDHC, and SDXC cards.

### Is microSDXC the same standard as SDXC?

The capacity standard is the same. Only the size differs: microSD is 11 x 15 x 1.0 mm, and SD is 32 x 24 x 2.1 mm.

### Why do SDXC cards use exFAT?

The SD Association set exFAT as the default file system for SDXC. exFAT doesn't have the 4 GiB file limit of FAT32. The format differences are in [how to format a USB drive to exFAT](/blog/en/format-usb-exfat).
