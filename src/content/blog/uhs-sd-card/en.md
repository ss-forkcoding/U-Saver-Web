---
title: "UHS SD Card Guide: UHS-I vs UHS-II vs SD Express Explained"
description: "A UHS SD card uses a faster bus interface than older SD cards. Here is how UHS-I, UHS-II, and SD Express differ in maximum bus speed, how backward compatibility works, and when you need a matching card reader, based on SD Association documents."
date: 2026-11-17
---

## Key takeaways

A UHS SD card uses one of the Ultra High Speed bus interfaces: UHS-I, UHS-II, or UHS-III. SD Express is the newer, faster interface. The bus interface is the link between the card and the device, not the card's own speed.

In the SD Association table, the maximum bus speed is 104 MB/s for UHS-I, 312 MB/s for UHS-II, and 3940 MB/s for SD Express. These are limits of the link. A card's actual speed depends on the card.

Faster cards still work in slower devices. You get full performance only when the card matches the fastest interface your device supports.

"Why isn't my UHS-II card any faster?" "Do I need a UHS-II reader?" These questions come up often when people upgrade cards. This guide explains the differences between UHS-I, UHS-II, and SD Express and how to choose a card and reader. For every card type, see [types of SD cards](/blog/en/what-is-sd-card).

## What are UHS-I, UHS-II, and SD Express?

A card and a device exchange data over a defined bus interface. The [SD Association's bus speed page](https://www.sdcard.org/developers/sd-standard-overview/bus-speed-default-speed-high-speed-uhs-sd-express/) lists these interfaces.

| Interface | Maximum bus speed | Data path | Spec version |
| --- | --- | --- | --- |
| Default Speed | 12.5 MB/s | One row of pins | 1.01 |
| High Speed | 25 MB/s | One row of pins | 1.10 |
| UHS-I | 50 MB/s (SDR50, DDR50), 104 MB/s (SDR104) | One row of pins | 3.01 |
| UHS-II | 156 MB/s (full duplex), 312 MB/s (half duplex) | Two rows of pins | 4.00 |
| UHS-III | 312 MB/s, 624 MB/s (full duplex) | Two rows of pins | 6.00 |
| SD Express | 985 MB/s, 1970 MB/s, 3940 MB/s | PCIe and NVMe | 7.00 or later |

UHS stands for Ultra High Speed. UHS-I raises speed using a single row of pins. UHS-II, UHS-III, and SD Express add a second row of pins and use two data lanes.

SD Express uses PCIe and NVMe, the same technologies used by computer SSDs. Its speed depends on the PCIe generation and the number of lanes. The SD Association notes that version 8.00 microSD supports only PCIe Gen.4 with one lane.

UHS and SD Express are available on SDHC, SDXC, and SDUC cards. For the capacity standards, see [SDHC card vs SDXC vs SDUC](/blog/en/sdhc-vs-sdxc).

## How is bus speed different from UHS speed class?

Both are speed markings, but they mean different things.

| Marking | Meaning | Examples |
| --- | --- | --- |
| Bus interface | Maximum speed of the link between card and device | UHS-I, UHS-II, SD Express |
| UHS Speed Class | Minimum write speed guaranteed for video recording | U1, U3 |
| Video Speed Class | Minimum write speed guaranteed for video recording | V30, V60, V90 |

The SD Association says a card's maximum speed differs from the bus interface speed. Actual speed varies with the card's performance, the device, the operation, and how other data is stored on the card.

The [SD Association's speed class page](https://www.sdcard.org/developers/sd-standard-overview/speed-class/) places U1 and U3 on UHS-I, UHS-II, and UHS-III. V60 and V90 need UHS-II or faster. UHS-I mode goes up to V30. The write speed for each marking is in [how to read SD card speed classes](/blog/en/sd-card-speed-class).

## Can you use a UHS-II card in a UHS-I device?

Yes. The [SD Association's bus interface page](https://www.sdcard.org/consumers/about-sd-memory-card-choices/bus-interface-speed-standards-for-large-size-data-transfer/) says any high speed card can be used in UHS-I, UHS-II, or SD Express host devices.

Performance depends on the device side. The SD Association puts it this way.

| Device interface | Cards that perform best |
| --- | --- |
| UHS-I | Cards that support at least UHS-I |
| UHS-II | Cards that support at least UHS-II |
| SD Express | SD Express cards |

The [SD Association FAQ](https://www.sdcard.org/consumers/faq/) says SD Express cards maintain the UHS-I interface. So an SD Express card also works in a UHS-I device, just not at SD Express speed.

## When do you need a UHS-II card reader?

To copy files to a computer at UHS-II speed, you need a UHS-II reader. A reader is a host device too. A UHS-II card in a UHS-I reader still works, but it won't reach UHS-II performance.

Here are the combinations.

| Card | Reader | Result |
| --- | --- | --- |
| UHS-I | UHS-I | UHS-I performance |
| UHS-I | UHS-II | Works; UHS-I performance because the card is UHS-I |
| UHS-II | UHS-I | Works; no UHS-II performance |
| UHS-II | UHS-II | UHS-II performance |
| SD Express | No SD Express support | Works over the UHS-I interface |

The reader's bus interface isn't the only limit. The USB port between the reader and the computer also caps transfer speed. This guide didn't measure actual reader speeds.

## How can you tell whether a card is UHS-I or UHS-II?

1. Look for UHS-I, UHS-II, or SD Express on the card and the package. The SD Association table gives each interface its own bus mark.
2. Check the pins on the back of the card. The SD Association says UHS-II, UHS-III, and SD Express use a second row of pins. A single row means UHS-I or older.
3. Check the interface line in the manufacturer's data sheet.
4. Check the memory card section of your device's manual for the supported bus interface.
5. Check whether the device takes SD or microSD. See [micro SD card and SD card](/blog/en/microsd-vs-sd).

## Which should you choose: UHS-I, UHS-II, or SD Express?

Your device's manual decides. Follow these steps.

1. Find the bus interface your device supports in its manual.
2. In the same section, find the recommended speed class (U3, V30, V60, and so on).
3. If the device supports only UHS-I, a UHS-I card is enough. A UHS-II card also works, but without UHS-II performance.
4. If the device supports UHS-II and asks for V60 or V90, choose a UHS-II card.
5. If the device supports SD Express, it performs best with an SD Express card.
6. If you often copy cards to a computer, get a reader with the same interface as your card.

This guide doesn't recommend specific products. Cards with the same interface still differ in actual speed. The maximum speeds in manufacturer data sheets come from internal testing.

## Is a UHS-II card faster on an iPhone?

An iPhone reads an SD card through a card reader. Transfer speed is also limited by the iPhone's USB speed.

[Apple's camera adapter guide](https://support.apple.com/en-us/118280) says iPhone 15 Pro, iPhone 15 Pro Max, iPhone 16 Pro, and iPhone 16 Pro Max support USB 3 transfer speeds. All other adapters and iOS devices use USB 2 speeds. The same page lists SDSC, SDHC, SDXC, and microSD cards as supported. This guide didn't measure speeds by UHS interface on an iPhone.

The steps are in [how to use an iPhone SD card reader](/blog/en/iphone-sd-card-reader).

## How do you save iPhone photos to a USB flash drive?

The app below is described for USB flash drives. Connection requirements are in [how to use a flash drive with an iPhone](/blog/en/iphone-flash-drive-guide).

U-Saver, made by NextGenAI, is an app that saves photos, videos, and contacts to a regular USB drive formatted as exFAT or FAT32, and it requires iOS 26 or later. U-Saver is being prepared for release on the App Store, and in Korea it costs 4,900 KRW as a one-time purchase. U-Saver doesn't save messages, app data, or iPhone settings, and drives saved with U-Saver aren't encrypted. Before you buy, read [Six things to check before using U-Saver](/blog/en/before-you-buy).

## FAQ: UHS SD card, UHS-II, and SD Express

### Can I put a UHS-II card in a UHS-I reader?

Yes. The SD Association says high speed cards can be used in UHS-I devices. You get UHS-II performance only with a UHS-II device or reader.

### Does a UHS-I card get faster in a UHS-II reader?

No. A UHS-I card runs over the UHS-I interface. The SD Association says UHS-II devices perform best with cards that support at least UHS-II.

### Is U3 the same as UHS-II?

No. U1 and U3 are minimum write speeds for video recording. UHS-I and UHS-II are bus interfaces. A UHS-I card can also carry a U3 marking.

### Will an SD Express card work in a device without SD Express?

The SD Association FAQ says SD Express cards maintain the UHS-I interface. If a device doesn't support SD Express, the card runs over UHS-I.

### Is 312 MB/s in the table the card's speed?

It's the maximum bus speed. The SD Association says a card's maximum speed differs from the bus speed and depends on the card's performance.
