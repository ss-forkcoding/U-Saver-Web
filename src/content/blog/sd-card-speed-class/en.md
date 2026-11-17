---
title: "Class 10 SD Card, U3, and V30: How to Read SD Card Speed Classes"
description: "A Class 10 SD card guarantees a minimum write speed of 10 MB/s for video recording. Here is what Class 10, U3, and V30 mean, how they differ from the maximum speed on the package, and how to pick a card for your device, based on SD Association documents."
date: 2026-11-17
---

## Key takeaways

A Class 10 SD card guarantees a minimum write speed of 10 MB/s when recording video. Class 10, U1, and V10 all stand for the same 10 MB/s.

There are four families of speed class: Class 2 to 10, U1 and U3, V6 to V90, and E150 to E600. The "up to XX MB/s" on the package is a different number. It's the manufacturer's maximum speed, not a guaranteed minimum.

Choose a card with the same or higher class than your device's manual asks for, in the same family. If the manual asks for V30, use a V30 card or higher.

"Is a Class 10 SD card good enough?" "What's the difference between U3 and V30?" These questions come up often when you shop for a card. This guide explains each speed marking and the steps to pick a card for your device. For sizes, capacities, and every marking, see [types of SD cards](/blog/en/what-is-sd-card).

## What do the speed markings on an SD card mean?

A card usually carries several kinds of speed markings.

| Marking | Meaning | Examples |
| --- | --- | --- |
| Speed class | Minimum write speed guaranteed for video recording | Class 10, U3, V30 |
| Bus interface | Maximum speed of the link between card and device | UHS-I, UHS-II, SD Express |
| App performance class | Performance when running apps installed on the card | A1, A2 |
| Manufacturer's rated speed | Maximum read or write speed stated by the maker | Up to XX MB/s |

The [SD Association's speed class page](https://www.sdcard.org/developers/sd-standard-overview/speed-class/) says speed classes assure minimum sequential write performance under conditions defined in the standard. Video has to be written at a constant rate to avoid dropped frames, so speed class matters most for video recording.

The manufacturer's rated speed isn't a guaranteed minimum. A SanDisk data sheet says its rated speeds are based on internal testing, and performance may be lower depending on the host device and usage conditions.

## What do Class 10, U3, and V30 mean?

The SD Association defines four families of speed class. The number in each symbol indicates the minimum write speed.

| Family | Markings | Bus interface |
| --- | --- | --- |
| Speed Class | Class 2, 4, 6, 10 | Class 10 for High Speed or faster |
| UHS Speed Class | U1, U3 | UHS-I, UHS-II, UHS-III |
| Video Speed Class | V6, V10, V30, V60, V90 | V30 for UHS; V60 and V90 for UHS-II or faster |
| SD Express Speed Class | E150, E300, E450, E600 | SD Express |

Here is where the numbers come from.

- **Class 10, U1, V10:** The SD Association says all three indicate the same 10 MB/s write speed.
- **V30:** A [Samsung data sheet](https://download.semiconductor.samsung.com/resources/data-sheet/2023_samsung_data_sheet_microsd_card_pro_plus_v1.1.pdf) describes V10 and V30 as sustained video capture rates of 10 MB/s and 30 MB/s.
- **U3:** A [SanDisk data sheet](https://documents.sandisk.com/content/dam/asset-library/en_us/assets/public/sandisk/product/memory-cards/high-endurance-uhs-i-microsd/data-sheet-high-endurance-uhs-i-microsd.pdf) describes U3 and V30 together as performance options for a sustained video capture rate of 30 MB/s.

The SD Association created Video Speed Class for high-resolution 4K and 8K recording and for newer flash memory such as 3D NAND.

## Which SD card speed do you need for each type of video?

The [SD Association FAQ](https://www.sdcard.org/consumers/faq/) lists typical uses for each class.

| Marking | Typical use |
| --- | --- |
| Class 2 | H.264, MPEG-4, MPEG-2 video recording |
| Class 4 | MPEG-2 (HDTV) video recording |
| Class 6, V6 | SD to HD video recording |
| Class 10, U1, V10 | HD to Full HD video recording |
| U3, V30 | Full HD to 4K video recording |
| V60 | 4K to 8K video recording |
| V90 | 8K video recording |

These are typical uses. Even at 4K, the speed you need depends on your device's quality settings. Your device's manual is the final word.

## Is a Class 10 SD card enough for 4K video?

If your manual asks for Class 10, yes. If it asks for U3 or V30, a Class 10 card isn't enough.

The SD Association says you won't get the expected write speed when the device and card use different families of markings. Its examples:

| Device requires | Card marking | Result |
| --- | --- | --- |
| Class 4 | Class 4, 6, 10 | Works |
| U1 | U1, U3 | Works |
| V10 | V10, V30 | Works |
| Class 10 | U1 | Expected speed not available, even at the same number |
| U1 | V10 | Expected speed not available, even at the same number |

Pick the same or a higher number within the same family. Some cards, like those in the Samsung and SanDisk data sheets above, carry Class 10, U3, and V30 at once. Check the markings on both the card and the package.

## How do you pick the right SD card speed for your device?

1. Find the recommended speed class in the memory card section of your device's manual. The SD Association says devices can show the speed class symbol on the product, package, or manual.
2. In the same section, check the supported capacity standard (SDHC, SDXC). See [SDHC card vs SDXC vs SDUC](/blog/en/sdhc-vs-sdxc).
3. Check whether the device takes SD or microSD. See [micro SD card and SD card](/blog/en/microsd-vs-sd).
4. Choose a card with the same or a higher number in the same family as the manual.
5. If you need V60 or V90, also confirm the device supports UHS-II. In the SD Association table, UHS-I mode goes up to V30.

## Why does a card record slower than its marking?

The SD Association describes two causes.

| Cause | What happens | What to do |
| --- | --- | --- |
| Slow bus mode | Class 10 needs High Speed mode or faster, U1 and U3 need SDR50/DDR50 or faster, and V60 and V90 need UHS-II or faster | Check which bus interface your device supports |
| Fragmentation | Deleting and writing files over and over scatters free space and slows writing | Move your data off the card, then format it |

Speed class writes assume sequential writing to unfragmented free space. Even with enough free space overall, heavy fragmentation can stop a device from recording at its speed class. The SD Association says to move data to other storage and reformat the card in that case.

Formatting erases everything on the card. Copy your photos and videos somewhere else first. The steps are in [how to format an SD card](/blog/en/format-sd-card).

## Does SD card speed matter on an iPhone?

An iPhone reads an SD card through a card reader. Transfer speed is also limited by the reader and the iPhone's USB speed.

[Apple's camera adapter guide](https://support.apple.com/en-us/118280) says iPhone 15 Pro, iPhone 15 Pro Max, iPhone 16 Pro, and iPhone 16 Pro Max support USB 3 transfer speeds. All other adapters and iOS devices use USB 2 speeds. This guide didn't measure actual transfer speeds.

The steps are in [how to use an iPhone SD card reader](/blog/en/iphone-sd-card-reader).

## How do you save iPhone photos to a USB flash drive?

The app below is described for USB flash drives. Connection requirements are in [how to use a flash drive with an iPhone](/blog/en/iphone-flash-drive-guide).

U-Saver, made by NextGenAI, is an app that saves photos, videos, and contacts to a regular USB drive formatted as exFAT or FAT32, and it requires iOS 26 or later. U-Saver is being prepared for release on the App Store, and in Korea it costs 4,900 KRW as a one-time purchase. U-Saver doesn't save messages, app data, or iPhone settings, and drives saved with U-Saver aren't encrypted. Before you buy, read [Six things to check before using U-Saver](/blog/en/before-you-buy).

## FAQ: Class 10 SD card and other speed classes

### Is Class 10 the same speed as U1?

Both stand for 10 MB/s, but they belong to different families. The SD Association says a U1 card won't deliver the expected speed in a device that requires Class 10.

### What's the difference between U3 and V30?

U3 is a UHS Speed Class and V30 is a Video Speed Class. The SD Association FAQ lists both for Full HD to 4K recording. Follow the marking in your device's manual.

### Does a higher speed class make photo copying faster?

Not necessarily. Speed class is a minimum sequential write speed. Copy speed also depends on the bus interface, the card reader, and the USB speed of the connected device.

### Can I trust the maximum speed on the package?

It's a maximum the manufacturer measured in internal testing. A SanDisk data sheet says performance may be lower depending on the host device and usage conditions.

### Are A1 and A2 speed classes?

They're app performance classes. They show performance when running apps installed on the card. A Samsung data sheet lists sustained sequential write of 10 MB/s for both A1 and A2.
