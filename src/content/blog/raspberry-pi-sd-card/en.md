---
title: "Micro SD Card for Raspberry Pi: Capacity, Speed Markings, Size Limits, and Imager Steps"
description: "Choosing a micro SD card for Raspberry Pi? Check the recommended capacity for your OS, the 2 TB limit, the 256 GB boot limit on older models, and how to write the OS with Raspberry Pi Imager, based on Raspberry Pi's official documentation."
date: 2026-11-24
---

## Key takeaways

Choose a micro SD card for Raspberry Pi by three things: enough capacity for your operating system, a size under 2 TB, and the card's read and write speed. Raspberry Pi recommends at least 32 GB for the desktop Raspberry Pi OS and at least 8 GB for the command-line Lite version.

You write the operating system to the card from a computer with Raspberry Pi Imager. Imager erases everything on the card, so copy any files off it first.

Some older models only boot from a boot partition of 256 GB or less. Check whether your model is one of them.

"What size SD card do I need for a Raspberry Pi?" "I wrote the OS to the card, but it won't boot." These questions come up a lot when people set up their first Raspberry Pi. This guide covers what to check when you choose a Raspberry Pi SD card and how to write the operating system to it. This guide doesn't recommend any product, and we didn't test any cards or boards. Figures and steps come from Raspberry Pi's [Getting started guide](https://www.raspberrypi.com/documentation/computers/getting-started.html#boot-media) and [Raspberry Pi Imager documentation](https://www.raspberrypi.com/documentation/computers/imager.html).

## Why does a Raspberry Pi need an SD card?

It needs storage that holds an operating system before it can start. Raspberry Pi calls this storage boot media and says the most common type is a microSD card.

Every model since the Raspberry Pi Model B+ has a microSD card slot. It boots automatically from an inserted card with a valid OS image. Some newer models can also boot from USB mass storage, the network, or NVMe storage through PCIe.

There are exceptions. The Raspberry Pi 500 and some kits come with a microSD card that already has Raspberry Pi OS on it. In that case, skip the install steps and just update the software.

## What size micro SD card does a Raspberry Pi need?

It depends on the operating system. These are the recommendations in Raspberry Pi's [Getting started guide](https://www.raspberrypi.com/documentation/computers/getting-started.html#boot-media).

| Operating system | Use | Recommended capacity |
| --- | --- | --- |
| Raspberry Pi OS | Desktop with basic software | 32 GB or more |
| Raspberry Pi OS Full | Desktop with recommended apps | 32 GB or more |
| Raspberry Pi OS Lite | Command line only, for headless setups | 8 GB or more |

Raspberry Pi says these figures are enough to get started and recommends more storage to leave room to grow. Other operating systems have their own requirements, so check that OS's documentation.

Cards over 32 GB are SDXC. The capacity standards are explained in [SDHC Card vs SDXC vs SDUC](/blog/en/sdhc-vs-sdxc).

## What is the maximum SD card size for a Raspberry Pi?

You can use any card under 2 TB. Raspberry Pi's documentation says cards above 2 TB aren't supported because they exceed the limits of the Master Boot Record (MBR), the partitioning system that tells the Raspberry Pi where to find the OS.

Older models have a lower limit. These only boot from a boot partition of 256 GB or less.

| Model | Boot limit |
| --- | --- |
| Raspberry Pi Zero | Boot partition of 256 GB or less |
| The first Raspberry Pi | Boot partition of 256 GB or less |
| Early Raspberry Pi 2 with the BCM2836 chip | Boot partition of 256 GB or less |
| Other models | Card under 2 TB |

## What speed should a micro SD card for Raspberry Pi have?

Raspberry Pi says faster storage with higher read and write speeds improves overall performance. Its [SD card documentation](https://www.raspberrypi.com/documentation/accessories/sd-cards.html) explains that slow bus speeds and a lack of command queueing can reduce the performance of even the most powerful models.

Here are the markings on Raspberry Pi's own microSD cards. We use them only as an example of how to read a card.

| Item | Official Raspberry Pi card |
| --- | --- |
| Capacity | 32 GB, 64 GB, 128 GB |
| Form factor | microSDHC, microSDXC |
| Speed markings | C10, U3, V30, A2 |
| Bus speed | DDR50 and SDR104 |
| 4 KB random read / write | Raspberry Pi 4 (DDR50) 3,200 / 1,200 IOPS, Raspberry Pi 5 (SDR104) 5,000 / 2,000 IOPS |

C10, U3, and V30 mark a minimum sequential write speed. See [Class 10 SD Card, U3, and V30](/blog/en/sd-card-speed-class) for how to read them. A2 is an app performance class for small random reads and writes, which an operating system does a lot of when it runs from the card. The thresholds are in [A2 SD Card vs A1](/blog/en/sd-card-a1-a2).

## How do you choose a micro SD card for Raspberry Pi?

1. Check your model. On a Zero, the first Raspberry Pi, or an early Raspberry Pi 2, check the 256 GB boot partition limit.
2. Pick your operating system, then choose more than the recommended capacity in the table above.
3. Make sure the card is under 2 TB.
4. Read the speed markings on the package (Class, U, V, A).
5. Get a card reader for your computer. Raspberry Pi notes you might need one to install the OS. See [How to Choose an SD Card Reader](/blog/en/choose-sd-card-reader).
6. Check the real capacity right after you buy the card. See [Fake SD Card](/blog/en/fake-sd-card).

## How do you put the OS on a Raspberry Pi SD card?

Use Raspberry Pi Imager on another computer. Imager runs on Windows, macOS, and Linux. These steps follow the [install guide](https://www.raspberrypi.com/documentation/computers/getting-started.html#install).

1. Install and open Imager on your computer.
2. In the **Device** tab, select your Raspberry Pi model and select **Next**.
3. In the **OS** tab, choose an operating system. The recommended OS for your model is at the top of the list.
4. Connect the microSD card to your computer with a card reader.
5. In the **Storage** tab, select the card. Imager erases all data on it, so check the name and capacity again. Keep **Exclude system drives** selected.
6. In the **Customisation** tab, set the hostname, username and password, Wi-Fi, and remote access.
7. In the **Writing** tab, review your choices, select **Write**, then select **I understand, erase and write**.
8. Wait while Imager writes and verifies the image. Raspberry Pi recommends letting verification finish.
9. When the **Done** tab appears, select **Finish**.

For a headless setup, set up Wi-Fi (or use Ethernet) and either SSH or Raspberry Pi Connect in step 6. On first boot, those are the only ways to connect remotely.

If you don't have another computer, use Network Install. On a Raspberry Pi 4B, 5, 500, or 500+, it downloads and runs Imager over a wired internet connection, so you don't need a card reader.

## How do you insert the microSD card into a Raspberry Pi?

Insert it with the label facing away from the Raspberry Pi. On Raspberry Pi 3 and later and on all Zero models, the card slides in and stops without a click, and you remove it by gently pulling it. On older models, push the card first to unlock it.

Write the OS to the card before you insert it. Without an OS, the Raspberry Pi won't start.

## What if the Raspberry Pi SD card isn't detected or won't boot?

These checks come from the [Imager troubleshooting guide](https://www.raspberrypi.com/documentation/computers/imager.html#imager-troubleshooting).

| Symptom | What to check |
| --- | --- |
| Imager doesn't show the card | Whether the computer recognizes the card, and the write-protect switch on the card or adapter |
| Verification fails | Write again, try another card reader or USB port, try another card |
| It won't boot after writing | The model selected in the Device tab, and whether verification finished |

Raspberry Pi says a storage device that keeps failing verification might be faulty, or might be a counterfeit that reports more capacity than it has. The lock switch is covered in [SD Card Lock Switch](/blog/en/sd-card-lock-switch), and general checks are in [SD Card Corrupted or Not Recognized?](/blog/en/sd-card-not-working).

## How do you reuse a Raspberry Pi SD card in another device?

Erase it with Imager. According to the [Imager documentation](https://www.raspberrypi.com/documentation/computers/imager.html#erase-storage), select **Erase** at the bottom of the **OS** tab and continue from the **Storage** tab. Imager formats the card with a single FAT32 partition. Everything on the card is erased.

To format the card on your computer instead, see [How to Reformat a Micro SD Card](/blog/en/format-microsd).

## What should iPhone users read next?

A card erased to FAT32 for a Raspberry Pi is also in a format an iPhone can read. [Apple's external storage guide](https://support.apple.com/guide/iphone/external-storage-devices-iph95baac91f/ios) lists exFAT and FAT32 among the formats iPhone supports.

To connect a microSD card to an iPhone, see [Micro SD for iPhone](/blog/en/iphone-microsd). To move iPhone photos to a USB flash drive, see [How to Transfer Photos from iPhone to USB](/blog/en/iphone-photos-to-usb).

## Micro SD card for Raspberry Pi FAQ

### Is an 8 GB card enough for Raspberry Pi OS Lite?

8 GB is the minimum Raspberry Pi recommends. Raspberry Pi also recommends more storage to leave room to grow. If you plan to keep more software and files, pick a larger card.

### Can I use a 2 TB card in a Raspberry Pi?

Raspberry Pi's documentation says you can use any card under 2 TB. Cards above 2 TB aren't supported because of the MBR limit.

### What happens if I put a 512 GB card in a Raspberry Pi Zero?

The Zero only boots from a boot partition of 256 GB or less. The same applies to the first Raspberry Pi and early Raspberry Pi 2 models. Check this limit before you buy a card.

### Do I have to buy the official Raspberry Pi card?

No. Raspberry Pi's documentation suggests considering the official card if you're unsure which one to buy. You can choose another card by its capacity and speed markings.

### What happens to my files if I write the OS to a used card?

They're erased. Imager warns that it erases all data before it writes. Copy any files you want to keep to another storage device first.
