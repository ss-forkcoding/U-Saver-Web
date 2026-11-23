---
title: "DJI SD Card Guide: Speed Ratings, Capacity, and Care from DJI Spec Sheets"
description: "Choose a DJI SD card from the recommended microSD list and the V30 and U3 marks on your drone's spec sheet. Based on official DJI Mini 4 Pro, Mini 5 Pro, and Air 3S specs, this guide covers card ratings, exFAT, capacity math, internal storage, and moving footage."
date: 2026-11-24
---

## Key takeaways

Choose a DJI SD card from your drone's spec sheet. The "Storage" section of a DJI spec sheet lists recommended microSD cards. Every card on the DJI Mini 4 Pro, Mini 5 Pro, and Air 3S lists is rated V30 or higher.

DJI drones use the exFAT file system. All three spec sheets say "Supported File System: exFAT."

Work out capacity from the recording bitrate. The Mini 4 Pro's maximum video bitrate is 150 Mbps. By that number, it writes about 1.1 GB per minute.

"Can I put any SD card in my drone?" "Can I fly without a card?" These questions come up with a first drone. This guide shows how to read card requirements on official DJI spec sheets and how to look after the card. It doesn't recommend specific products, and we didn't test any cards.

## What does a DJI SD card need?

Look at the "Storage" section of the spec sheet. DJI doesn't write the requirement as a sentence. It shows a list of recommended cards. Here's what the lists on three drones have in common.

| Drone | Speed marks on listed cards | Largest card on the list | File system |
| --- | --- | --- | --- |
| [DJI Mini 4 Pro](https://www.dji.com/mini-4-pro/specs) | U3, V30 or V90 (mix of A1 and A2) | 512 GB | exFAT |
| [DJI Mini 5 Pro](https://www.dji.com/mini-5-pro/specs) | A2, V30 | 1 TB | exFAT |
| [DJI Air 3S](https://www.dji.com/air-3s/specs) | U3, A2, V30 | 512 GB | exFAT |

For a card that isn't on the list, match the rating marks of the listed cards. Check for at least V30 and U3. The largest card on the list is the biggest card DJI recommends. It isn't stated as the drone's limit, so check the manual before using a bigger card.

The lists differ by model. Within the Mini series, the Mini 4 Pro list includes A1 cards while the Mini 5 Pro list has only A2 cards. Check your own drone's spec sheet first.

## What do V30, U3, and A2 mean on a DJI SD card?

The marks describe different kinds of performance.

| Mark | Meaning | Learn more |
| --- | --- | --- |
| V30 | Minimum write speed class for video | [How to Read SD Card Speed Classes](/blog/en/sd-card-speed-class) |
| U3 | UHS speed class | [UHS SD Card Guide](/blog/en/uhs-sd-card) |
| A2 | App performance class for small reads and writes | [A2 SD Card vs A1](/blog/en/sd-card-a1-a2) |

A [Samsung data sheet](https://download.semiconductor.samsung.com/resources/data-sheet/2023_samsung_data_sheet_microsd_card_pro_plus_v1.1.pdf) describes V30 as a sustained recording speed of 30 MB per second. The [SD Association speed class page](https://www.sdcard.org/developers/sd-standard-overview/speed-class/) says to choose a card with the same or a higher class than the device asks for. "Up to XX MB/s" on the package is not a guaranteed minimum. Choose by the rating marks.

## How fast does drone video get written to the card?

The maximum video bitrate on the spec sheet tells you.

| Drone | Max video bitrate | Data per second (calculated) |
| --- | --- | --- |
| DJI Mini 4 Pro | 150 Mbps | About 18.75 MB/s |
| DJI Mini 5 Pro | 130 Mbps | About 16.25 MB/s |
| DJI Air 3S | 130 Mbps | About 16.25 MB/s |

These values divide Mbps by 8 to get MB/s. All three are below the 30 MB/s sustained speed of V30. The math only counts video data, so still follow the ratings on the recommended list.

## How much capacity does a DJI SD card need?

Work out recording time from the bitrate. At the Mini 4 Pro's 150 Mbps, the math looks like this.

| Card size | Recording time at max bitrate (calculated) |
| --- | --- |
| 64 GB | About 56 minutes |
| 128 GB | About 1 hour 53 minutes |
| 256 GB | About 3 hours 47 minutes |

150 Mbps is about 1.1 GB per minute. That's simple arithmetic; actual time depends on the card's real capacity, resolution, and codec settings. Lower resolutions record longer.

Factor in flight time, too. The Mini 4 Pro spec sheet lists a maximum flight time of 34 minutes on the standard battery. If you fly several batteries in a day, add up those minutes to pick a size.

## Can you record without a card?

For a short time, if the drone has internal storage. The DJI spec sheets list these sizes.

| Drone | Internal storage |
| --- | --- |
| DJI Mini 4 Pro | 2 GB |
| DJI Mini 5 Pro | 42 GB |
| DJI Air 3S | 42 GB |

At 150 Mbps, the Mini 4 Pro's 2 GB holds less than 2 minutes. Put in a microSD card for longer shoots. Check the drone's manual to see whether footage goes to the card or internal storage.

## How do you choose a drone SD card, step by step?

1. Find the "Storage" section on your drone's spec sheet.
2. Note the speed marks (V30, U3) and app performance marks (A1, A2) of the recommended cards.
3. Confirm the supported file system (exFAT).
4. Work out the capacity you need from the max bitrate and your flight time.
5. Buy from a trusted seller. To check for cards with faked capacity, see [Fake SD Card: How to Spot One](/blog/en/fake-sd-card).
6. Put the new card in the drone and format it there.

For how this compares with regular camera cards, see [SD Card for Camera](/blog/en/camera-sd-card). For action cam requirements, see [Micro SD Card for GoPro and Insta360](/blog/en/gopro-sd-card).

## How do you format a DJI SD card?

Format it in the drone that uses it. The menu location differs by drone and DJI Fly app version, so check your drone's manual. Formatting erases everything on the card, so move your footage first.

If you have to format on a computer, choose exFAT. That's the supported file system on the DJI spec sheets. For computer steps, see [How to Reformat a Micro SD Card](/blog/en/format-microsd).

## What if the drone doesn't detect the card?

Go through these steps.

1. Take the card out, check which way it faces, and put it back in.
2. Check that the card has the same ratings as the recommended list.
3. Copy the card's files to a computer, then format the card in the drone.
4. If the computer doesn't detect the card either, follow [SD Card Corrupted or Not Recognized?](/blog/en/sd-card-not-working).
5. If problems keep coming back after formatting, replace the card.

## How do you move drone footage to an iPhone?

An iPhone has no card slot, so connect the card through an SD card reader. [Apple's external storage guide](https://support.apple.com/guide/iphone/external-storage-devices-iph95baac91f/ios) says iPhone reads formats including exFAT and FAT32. The exFAT format DJI drones use is on that list.

A card from a DJI remote controller works the same way. A [DJI support article](https://support.dji.com/help/content?customId=en-us03400006852&spaceId=34&re=US&lang=en&documentType=artical&paperDocType=paper) explains how to export from the microSD card of DJI RC series controllers with a card reader. It gives the folder path on the card as `SD_Card/DCIM/DJI Album`.

For connection steps, see [Micro SD for iPhone](/blog/en/iphone-microsd). To import into the Photos app from a reader, see [How to Use an iPhone SD Card Reader](/blog/en/iphone-sd-card-reader). Check the copied footage before you format the card in the drone.

## DJI SD card FAQ

### Is a V90 card better than V30?

The DJI Mini 4 Pro recommended list has both V30 and V90 cards. By the math on max bitrate, V30's minimum speed has room to spare on all three drones. Don't pick by the bigger number alone; go by the list and the ratings.

### Can I use a 1 TB card?

The DJI Mini 5 Pro recommended list includes a 1 TB card. The Mini 4 Pro and Air 3S lists go up to 512 GB. For a card bigger than the list, check the drone's manual for support.

### Can I move a micro SD card from my phone to a drone?

Yes, if its marks match the recommended list ratings (V30, U3, and so on). Copy the card's files first, then format it in the drone. Formatting erases the phone's files.

### Can I use a card from my GoPro in a drone?

The GoPro MAX2 manual asks for A2 and V30 or higher. A card like that overlaps with the ratings on DJI's recommended lists. When you move the card to another device, format it there.

### When should I replace the card?

Consider a new card if recording still drops or files won't open after formatting. For card care in a device that records nonstop, compare [Micro SD Card for Dash Cam](/blog/en/dashcam-sd-card).
