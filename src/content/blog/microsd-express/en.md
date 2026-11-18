---
title: "What Is microSD Express? How It Differs From Regular microSD"
description: "microSD Express is a microSD card that adds the PCIe interface and NVMe protocol. Here are the SD Association's bus speeds, compatibility with regular microSD devices, the Nintendo Switch 2 requirement, and how microSD Express works with an iPhone."
date: 2026-11-18
---

## Key takeaways

microSD Express is a microSD-size card that adds the PCIe interface and the NVMe protocol, the same technology computer SSDs use. The SD Association introduced microSD Express in the SD 7.1 specification in 2019.

In the SD Association's table, microSD under the SD 8.0 specification supports only one PCIe Gen.4 lane, with a maximum bus speed of 1970 MB/s. The maximum bus speed of UHS-I is 104 MB/s.

SD Express cards keep the UHS-I interface. That means a microSD Express card also works in a regular microSD device, but without SD Express speed.

"Can I put my old microSD card in a Switch 2?" "Will a microSD Express card be faster in my phone or card reader?" These questions come up when people shop for a new card. This guide explains what microSD Express is and how it differs from regular microSD, based on SD Association and Nintendo documents. For a full comparison of bus interfaces, see [UHS SD card types: UHS-I vs UHS-II](/blog/en/uhs-sd-card).

## What is microSD Express?

The [SD Association's 20th anniversary article on microSD](https://www.sdcard.org/press/thoughtleadership/celebrating-20-years-of-microsd/) says microSD Express arrived with the SD 7.1 specification in 2019. The original design integrated a PCI Express Gen 3 interface and the NVM Express protocol. The same article says the SD 8.0 specification in 2023 raised microSD Express performance to 2 GB/s through PCIe Gen 4.0.

| When | Specification | What changed for microSD Express |
| --- | --- | --- |
| 2018 | SD 7.0 | SD Express and microSDUC introduced |
| 2019 | SD 7.1 | microSD Express introduced, PCIe Gen 3 |
| 2023 | SD 8.0 | PCIe Gen 4, about 2 GB/s |

The [SD Association FAQ](https://www.sdcard.org/consumers/faq/) describes SD Express cards as removable SSDs that reach up to 3940 MB/s with PCIe technology. That 3940 MB/s figure is the PCIe Gen.4 two-lane value for full-size SD. microSD Express uses one lane, as the table below shows.

## microSD Express vs regular microSD: what's the difference?

The size is the same. The difference is how the card and device exchange data.

| Item | Regular microSD (UHS-I) | microSD Express |
| --- | --- | --- |
| Bus interface | UHS-I | PCIe and NVMe, plus UHS-I |
| Maximum bus speed | 104 MB/s (SDR104) | 1970 MB/s (SD 8.0, PCIe Gen.4 one lane) |
| Pins | One row | Adds a second row |
| Capacity standards | SDHC, SDXC, SDUC | SDHC, SDXC, SDUC |

Speeds and pin rows come from the [SD Association's bus speed overview](https://www.sdcard.org/developers/sd-standard-overview/bus-speed-default-speed-high-speed-uhs-sd-express/). It says SD Express sends data through a second row of pins. It also notes that "Ver.8.00 microSD is supporting only PCIe Gen.4 x 1 Lane."

The speeds in the table are maximum bus speeds. The SD Association says a card's maximum speed differs from the bus speed and depends on the card's performance. This guide did not measure the real speed of any card.

Capacity standards are explained in [SDHC card vs SDXC vs SDUC](/blog/en/sdhc-vs-sdxc), and card sizes in [micro SD card and SD card](/blog/en/microsd-vs-sd).

## Does a microSD Express card work in a regular microSD device?

Yes. The SD Association FAQ says SD Express cards maintain the UHS-I interface. The [SD Association's bus interface guide](https://www.sdcard.org/consumers/about-sd-memory-card-choices/bus-interface-speed-standards-for-large-size-data-transfer/) also says any high speed card can be used in UHS-I, UHS-II, or SD Express host devices.

| Card | Device | Result |
| --- | --- | --- |
| microSD Express | Device without SD Express | Works in UHS-I mode |
| microSD Express | Device with SD Express | SD Express performance |
| Regular microSD | Device with SD Express | Check the device manual |

The same guide says SD Express host devices perform best with SD Express cards. Whether a regular microSD card works in an SD Express device depends on the device. The Nintendo Switch 2 below is one example.

## Why does the Nintendo Switch 2 need microSD Express?

Nintendo allows only microSD Express cards for saving game data on the Switch 2. The [Nintendo microSD Express card FAQ](https://www.nintendo.com/au/support/articles/microsd-express-card-faq/) says only microSD Express cards can be used to save game data, in-game screenshots, and videos on Nintendo Switch 2.

| Card | Nintendo Switch 2 | Nintendo Switch |
| --- | --- | --- |
| Regular microSD | Not supported. Can only import screenshots and videos captured on Switch | Supported |
| microSD Express | Supported, up to 2 TB | Supported, at regular microSD speed |

The table follows [Nintendo's compatibility article](https://www.nintendo.com/au/support/articles/microsd-card-and-microsd-express-card-compatibility-with-nintendo-switch-2/). The same article says a system update over the internet is required the first time you use a microSD Express card. For other consoles and cameras, check the manufacturer's manual.

## How do you tell if a card is microSD Express?

1. Look for the microSD Express marking on the card and package. The SD Association's table defines separate logos for SD Express.
2. Check the pins on the back. The SD Association says SD Express uses a second row of pins. A card with one row isn't SD Express.
3. Check the interface line in the manufacturer's data sheet for PCIe or NVMe.
4. Check the device manual for SD Express support.
5. Also check the capacity marking (such as microSDXC) and the speed marking (such as U3 or V30). Speed markings are explained in [Class 10 SD card, U3, and V30](/blog/en/sd-card-speed-class).

This guide doesn't recommend specific products. Real speed varies by card, even within the same standard.

## Can you use microSD Express with an iPhone?

An iPhone has no card slot, so you connect a card reader. The supported card list in [Apple's camera adapter guide](https://support.apple.com/en-us/118280) includes SDSC, SDHC, SDXC, and microSD. Apple's guide doesn't mention SD Express or microSD Express.

SD Express cards keep the UHS-I interface, so a reader without SD Express reads them in UHS-I mode. The same Apple guide says iPhone 15 Pro, iPhone 15 Pro Max, iPhone 16 Pro, and iPhone 16 Pro Max support USB 3 transfer speeds. This guide did not measure microSD Express speeds on iPhone.

The steps for connecting a reader are in [micro SD for iPhone](/blog/en/iphone-microsd) and [how to use an iPhone SD card reader](/blog/en/iphone-sd-card-reader). If a store page says "TF card," see [what is a TF card?](/blog/en/tf-card)

## How do you save iPhone photos to a USB flash drive?

The app below is described for USB flash drives. Connection requirements are in [how to use a flash drive with an iPhone](/blog/en/iphone-flash-drive-guide).

U-Saver, made by NextGenAI, is an app that saves photos, videos, and contacts to a regular USB drive formatted as exFAT or FAT32, and it requires iOS 26 or later. U-Saver is being prepared for release on the App Store, and in Korea it costs 4,900 KRW as a one-time purchase. U-Saver doesn't save messages, app data, or iPhone settings, and drives saved with U-Saver aren't encrypted. Before you buy, read [Six things to check before using U-Saver](/blog/en/before-you-buy).

## microSD Express FAQ

### What is microSD Express in short?

It's a microSD-size card that adds PCIe and NVMe, the same approach SSDs use. The SD Association introduced it in the SD 7.1 specification in 2019.

### Does a microSD Express card fit a regular microSD slot?

Yes. The size is the same, and the card keeps the UHS-I interface. In a device without SD Express, it won't reach SD Express speed.

### Can I use a regular microSD card in a Nintendo Switch 2?

Not for saving games. Nintendo says only microSD Express cards can save game data on Switch 2. A regular card can only be used to import screenshots and videos captured on Switch.

### Is 1970 MB/s the card's real speed?

It's the maximum bus speed. The SD Association says a card's maximum speed differs from the bus speed and depends on the card's performance.

### What reader do I need for a microSD Express card?

To read at SD Express speed, you need a device or reader that supports SD Express. A reader without it can still read the card in UHS-I mode. Reader interfaces are compared in [UHS SD card types: UHS-I vs UHS-II](/blog/en/uhs-sd-card).
