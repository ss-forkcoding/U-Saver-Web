---
title: "SD Card Reader for iPad: How to Connect, Import Photos, and Copy Files"
description: "An SD card reader for iPad plugs into the charging port and works with the Photos and Files apps. Here's which adapter you need, which card formats work, how to import and export photos, and what to check when the card doesn't appear, based on Apple's guides."
date: 2026-11-21
---

## Key takeaways

iPad has no SD card slot, so you need an SD card reader for iPad that plugs into the charging port. Import camera photos in the Photos app, and copy documents and other files in the Files app.

The card must have a single data partition formatted as APFS, macOS Extended (HFS+), exFAT, FAT32, or FAT. NTFS isn't on the list.

If the import screen doesn't appear, unplug the reader and the card, wait 30 seconds, then reconnect. If that doesn't help, restart the iPad and try a different card.

"I can't find where the card goes on my iPad." "I want to see my camera photos on the iPad right away." These are common first questions. The connection and the apps you use are nearly the same as on iPhone. For the iPhone version, see [how to use an iPhone SD card reader](/blog/en/iphone-sd-card-reader).

## How do you connect an SD card reader for iPad?

According to [Apple's guide to external storage on iPad](https://support.apple.com/guide/ipad/external-storage-devices-ipad75b7b23f/ipados), you attach the SD card reader to the iPad's charging port. The adapter depends on the port.

| iPad port | Readers and adapters named by Apple |
| --- | --- |
| USB-C | USB-C to SD Card Camera Reader |
| Lightning | Lightning to SD Card Camera Reader, Lightning to USB Camera Adapter, Lightning to USB 3 Camera Adapter |

All of them are sold separately. The card fits only one way, so don't force it into the slot. What to look for in a USB-C reader is covered in [USB-C SD card reader: how to use it](/blog/en/usb-c-sd-card-reader) and [how to choose an SD card reader](/blog/en/choose-sd-card-reader).

We didn't test any third-party readers for this article. If you use one, first check that the card shows up under Locations in the Files app.

## Which SD cards and formats work on iPad?

[Apple's camera adapter article](https://support.apple.com/en-us/118280) gives the same support list for iPhone and iPad.

| Item | Supported per Apple |
| --- | --- |
| Cards | SDSC, SDHC, SDXC, miniSD, microSD, MMC |
| Transfer protocols | Picture Transfer Protocol (PTP), Mass Storage Device protocol |
| Formats | APFS, APFS (encrypted), macOS Extended (HFS+), exFAT, FAT32, FAT |

The format list comes from [Apple's guide to external storage on iPad](https://support.apple.com/guide/ipad/external-storage-devices-ipad75b7b23f/ipados). The card needs a single data partition.

For a card you share with a camera and a computer, exFAT is the easy choice. [Microsoft's file system comparison](https://learn.microsoft.com/en-us/windows/win32/fileio/filesystem-functionality-comparison) limits a single FAT32 file to 4 GiB, so use exFAT for long videos. The steps are in [how to format a USB drive to exFAT](/blog/en/format-usb-exfat).

## How do you import photos from an SD card to iPad?

These steps follow [Apple's guide to importing photos on iPad](https://support.apple.com/guide/ipad/import-and-export-photos-and-videos-ipad99c6eb3e/ipados).

1. Plug the reader into the iPad's Lightning or USB-C port.
2. Insert the SD card into the reader.
3. Open the Photos app and tap Import.
4. Choose the photos and videos to import, then choose where to import them.
5. Tap Import All, or tap the items you want so a checkmark appears, tap Import, then tap Import Selected.
6. When it's done, choose whether to keep or delete the originals on the card.
7. Disconnect the reader.

[Apple's camera adapter article](https://support.apple.com/en-us/118280) also explains the iOS 18 layout: in Photos, tap Collections, scroll to Devices, and tap the card. If Devices doesn't appear, Apple says to update to the latest version.

## How do you export iPad photos to an SD card?

The same [Apple guide](https://support.apple.com/guide/ipad/import-and-export-photos-and-videos-ipad99c6eb3e/ipados) covers exporting.

1. Connect the reader with the card to your iPad.
2. In the Photos app, select the photos and videos to export.
3. Tap the Share button, then tap Export Unmodified Original.
4. Tap the card's name under Locations, then tap Save.

Edited photos are saved as the unmodified original. If the Hidden album is locked, its photos won't transfer. To unlock it, go to Settings > Apps > Photos and turn off Use Face ID, Use Touch ID, or Use Passcode. For the iPhone version, see [how to transfer photos from iPhone to an SD card](/blog/en/iphone-photos-to-sd-card).

## How do you copy files from an SD card in the Files app?

PDFs, documents, and compressed files that don't appear in Photos are handled in Files. These steps follow [Apple's guide to external storage on iPad](https://support.apple.com/guide/ipad/external-storage-devices-ipad75b7b23f/ipados) and [its guide to organizing files](https://support.apple.com/guide/ipad/organize-files-and-folders-ipadeb120505/ipados).

1. Open the Files app and tap Browse.
2. Tap the card's name under Locations. If you don't see Locations, tap Browse again.
3. Touch and hold the file you want, then choose Copy or Move.
4. To work with several files, tap Select, choose the files, then tap Move at the top of the screen.

Touch and hold the card's name to see Rename and Erase. According to [Apple's file transfer guide](https://support.apple.com/guide/ipad/transfer-files-ipad-a-storage-device-server-ipad8139864c/ipados), iPad models with a USB-C port can use Erase to format the card as APFS, ExFAT, or MS-DOS (FAT). Erasing deletes everything on the card.

When you're done, make sure the copy has finished, then remove the reader from the charging port. Apple's guide only describes removing it from the port.

## What should you check when the SD card doesn't show up on iPad?

These steps come from [Apple's camera adapter article](https://support.apple.com/en-us/118280).

| Step | Check | What to do |
| --- | --- | --- |
| 1 | Software version | If Devices doesn't appear, update to the latest version |
| 2 | Reader connection | Unplug the reader, wait 30 seconds, then reconnect it |
| 3 | Card connection | Remove the card, wait 30 seconds, then insert it again |
| 4 | iPad | Restart the iPad |
| 5 | Another card | Try a different card. If it works, suspect the data on the original card |

If other cards work but the original doesn't, Apple says to import the data to another device or computer first, then format the card in your camera. Formatting erases every photo on the card. If you suspect the card itself, start with [what to do when an SD card isn't working](/blog/en/sd-card-not-working).

Sometimes only some files are missing. The same article says Apple camera adapters import only content captured by digital cameras. Files that were renamed, edited, or copied onto the card may not import into Photos. Open the card in Files and copy them from there instead.

## How do you save iPhone photos to a USB drive?

The app below is described for iPhone and USB flash drives. We haven't checked how it behaves on iPad or with a card reader.

U-Saver, made by NextGenAI, is an app that saves photos, videos, and contacts to a regular USB drive formatted as exFAT or FAT32, and it requires iOS 26 or later. U-Saver is being prepared for release on the App Store, and in Korea it costs 4,900 KRW as a one-time purchase. U-Saver doesn't save messages, app data, or iPhone settings, and the contents of a USB drive saved with U-Saver aren't encrypted. Before you buy, read [Six things to check before using U-Saver](/blog/en/before-you-buy).

## FAQ: SD card reader for iPad

### I plugged in the reader and nothing happened.

Apple's guides don't say a window opens when you connect a reader. Look for the card in Import in the Photos app or under Locations in the Files app.

### Can I use a microSD card?

microSD is on the support list in Apple's camera adapter article. Check that your reader has a microSD slot. The size difference is explained in [microSD vs SD card](/blog/en/microsd-vs-sd).

### How fast is the transfer?

Apple's camera adapter article says that with the Lightning to USB 3 Camera Adapter, iPad Pro 12.9-inch (1st and 2nd generation) and iPad Pro 10.5-inch transfer at USB 3 speeds. It says all other adapters and devices use USB 2 speeds. We didn't measure actual speeds.

### Can I format an SD card on iPad?

Apple's file transfer guide says iPad models with a USB-C port can format a drive in the Files app. For a card you use in a camera, Apple recommends formatting it in the camera. Formatting erases everything on the card.

### Is the content on an SD card encrypted?

[Microsoft's comparison table](https://learn.microsoft.com/en-us/windows/win32/fileio/filesystem-functionality-comparison) lists no file system level encryption for exFAT. If you lose the card, someone else can read it, so store it carefully.
